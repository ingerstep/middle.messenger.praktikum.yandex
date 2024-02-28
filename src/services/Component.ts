import { v4 as uuidv4 } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus.ts';

type Nullable<T> = T | null;

interface IProps {
  settings?: { withInternalID: string };
  events?: { [eventName: string]: (event: Event | Nullable<HTMLElement>) => void };
  attr?: Record<string, string>;
  props?: Record<string, string>;
}

interface IPropsAndStubs extends IProps {
  [key: string]: unknown;
}

export default class Component<P extends object> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  protected props: IProps;

  protected children;

  protected id: string;

  protected lists;

  protected element: Nullable<HTMLElement> = null;

  protected meta: { tag: string; props: object };

  protected eventBus: EventBus;

  protected setUpdate = false;

  constructor(tag = 'div', propsAndChilds = {}) {
    const { children, props, lists } = Component.getChildren(propsAndChilds);

    this.eventBus = new EventBus();
    this.id = uuidv4();
    this.children = this.makePropsProxy(children);
    this.lists = this.makePropsProxy(lists);
    this.props = this.makePropsProxy({ ...props, __id: this.id });
    this.meta = { tag, props };

    this.registerEvents();
    this.eventBus.emit(Component.EVENTS.INIT);
  }

  registerEvents() {
    this.eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Component.EVENTS.FLOW_CDM, this.componentDidMountInstance.bind(this));
    this.eventBus.on(Component.EVENTS.FLOW_CDU, this.componentDidUpdateInstance.bind(this));
    this.eventBus.on(Component.EVENTS.FLOW_RENDER, this.renderInstance.bind(this));
  }

  init(): void {
    this.element = this.createDocumentElement(this.meta?.tag);
    this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
  }

  createDocumentElement(tag: string): HTMLTemplateElement {
    const element = document.createElement(tag);

    if (this.props.settings?.withInternalID) {
      element.setAttribute('data-id', this.id);
    }

    return element as HTMLTemplateElement;
  }

  renderInstance() {
    const block = this.render();
    this.removeEvents();
    if (this.element && block !== undefined && block !== null) {
      this.element.innerHTML = '';
      this.element.appendChild(block);
    }
    this.addEvents();
    this.addAttribute();
  }

  render() {}

  addEvents() {
    const { events } = this.props;

    if (!events) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      if (this.element) {
        this.element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  removeEvents() {
    const { events } = this.props;

    if (!events) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      if (this.element) {
        this.element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  addAttribute() {
    const { attr } = this.props;

    if (!attr) {
      return;
    }

    Object.entries(attr).forEach(([key, value]) => {
      if (this.element) {
        this.element.setAttribute(key, value);
      }
    });
  }

  static getChildren(propsAndChilds: Record<string, unknown>) {
    const children: Record<string, unknown> = {};
    const props: Record<string, unknown> = {};
    const lists: Record<string, unknown> = {};

    Object.keys(propsAndChilds).forEach((key) => {
      if (propsAndChilds[key] instanceof Component) {
        children[key] = propsAndChilds[key];
      } else if (Array.isArray(propsAndChilds[key])) {
        lists[key] = propsAndChilds[key];
      } else {
        props[key] = propsAndChilds[key];
      }
    });

    return { children, props, lists };
  }

  compile(template: string, inputProps: IProps) {
    let props = inputProps;

    if (typeof props === 'undefined') {
      props = this.props;
    }

    let propsAndStubs: IPropsAndStubs = {};

    if (typeof props === 'object') {
      propsAndStubs = { ...props };
    }

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    Object.keys(this.lists).forEach((key) => {
      propsAndStubs[key] = `<div data-id="__1_${key}"></div>`;
    });

    const fragment: HTMLTemplateElement = this.createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });

    Object.entries(this.lists).forEach(([key, child]) => {
      const stub = fragment.content.querySelector(`[data-id="__1_${key}"]`);

      if (!stub) {
        return;
      }

      const listContent: HTMLTemplateElement = this.createDocumentElement('template');

      child.forEach((item: Component<P>) => {
        if (item instanceof Component) {
          listContent.content.append(item.getContent());
        } else {
          listContent.content.append(`${item}`);
        }
      });

      stub.replaceWith(listContent.content);
    });

    return fragment.content;
  }

  componentDidMountInstance() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMound();
    });
  }

  componentDidMount() {}

  dispatchComponentDidMound() {
    this.eventBus.emit(Component.EVENTS.FLOW_CDM);

    if (Object.keys(this.children).length) {
      this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdateInstance() {
    const isReRender = this.componentDidUpdate();

    if (isReRender) {
      this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate() {
    return true;
  }

  setProps(newProps: Record<string, P>) {
    if (!newProps) {
      return;
    }

    this.setUpdate = false;
    const oldValue = { ...this.props };

    const { children, props, lists } = Component.getChildren(newProps);

    if (Object.values(children).length) {
      Object.assign(this.children, children);
    }

    if (Object.values(lists).length) {
      Object.assign(this.lists, lists);
    }

    if (Object.values(props).length) {
      Object.assign(this.props, props);
    }

    if (this.setUpdate) {
      this.eventBus.emit(Component.EVENTS.FLOW_CDU, oldValue, this.props);
      this.setUpdate = false;
    }
  }

  private makePropsProxy(props: object): object {
    return new Proxy(props as unknown as object, {
      get: (target: Record<string, unknown>, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: Record<string, unknown>, prop: string, value: unknown) => {
        if (target[prop] !== value) {
          const newTarget = { ...target, [prop]: value };
          this.setUpdate = true;
          return Reflect.set(newTarget, prop, value);
        }
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа.');
      },
    }) as unknown as P;
  }

  getContent(): HTMLElement {
    return this.element as HTMLElement;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}
