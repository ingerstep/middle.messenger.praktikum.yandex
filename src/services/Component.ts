import { v4 as uuidv4 } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus';

interface IProps{
  settings?: {withInternalID: string};
  events?: { [eventName: string]: (event: Event) => void };
  attr?: Record<string, string>;
  props?: Record<string, string>;
}

interface IPropsAndStubs extends IProps {
  [key: string]: unknown;
}

type Nullable<T> = T | null;

export default class Component<P extends object> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  protected _props: IProps;

  protected _children;

  protected _id: string;

  protected _lists;

  protected _element: Nullable<HTMLElement> = null;

  protected _meta: { tag: string; props: object };

  protected _eventBus: EventBus;

  protected _setUpdate = false;

  constructor(tag = 'div', propsAndChilds = {}) {
    const { children, props, lists } = this.getChildren(propsAndChilds);

    this._eventBus = new EventBus();
    this._id = uuidv4();
    this._children = this.makePropsProxy(children);
    this._lists = this.makePropsProxy(lists);
    this._props = this.makePropsProxy({ ...props, __id: this._id });
    this._meta = { tag, props };

    this.registerEvents();
    this._eventBus.emit(Component.EVENTS.INIT);
  }

  registerEvents() {
    this._eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    this._eventBus.on(
      Component.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this),
    );
    this._eventBus.on(
      Component.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this),
    );
    this._eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init(): void {
    this._element = this.createDocumentElement(this._meta?.tag);
    this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
  }

  createDocumentElement(tag: string): HTMLTemplateElement {
    const element = document.createElement(tag);

    if (this._props.settings?.withInternalID) {
      element.setAttribute('data-id', this._id);
    }

    return element as HTMLTemplateElement;
  }

  _render() {
    const block = this.render();
    this.removeEvents();
    if (this._element && block !== undefined && block !== null) {
      this._element.innerHTML = '';
      this._element.appendChild(block);
    }
    this.addEvents();
    this.addAttribute();
  }

  render() {}

  addEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  removeEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  addAttribute() {
    const { attr = {} } = this._props;

    Object.entries(attr).forEach(([key, value]) => {
      if (this._element) {
        this._element.setAttribute(key, value);
      }
    });
  }

  getChildren(propsAndChilds: Record<string, P>) {
    const children: Record<string, P> = {};
    const props: Record<string, P> = {};
    const lists: Record<string, P> = {};

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

  compile(template: string, props: IProps) {
    if (typeof (props) === 'undefined') {
      props = this._props;
    }

    let propsAndStubs: IPropsAndStubs = {};

    if (typeof (props) === 'object') {
      propsAndStubs = { ...props };
    }

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.keys(this._lists).forEach((key) => {
      propsAndStubs[key] = `<div data-id="__1_${key}"></div>`;
    });

    const fragment: HTMLTemplateElement = this.createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this._children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });

    Object.entries(this._lists).forEach(([key, child]) => {
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

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this._children).forEach((child) => {
      child.dispatchComponentDidMound();
    });
  }

  componentDidMount() { }

  dispatchComponentDidMound() {
    this._eventBus.emit(Component.EVENTS.FLOW_CDM);

    if (Object.keys(this._children).length) {
      this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  _componentDidUpdate() {
    const isReRender = this.componentDidUpdate();

    if (isReRender) {
      this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate() {
    return true;
  }

  setProps(newProps: Record<string, P>) {
    if (!newProps) {
      return;
    }

    this._setUpdate = false;
    const oldValue = { ...this._props };

    const { children, props, lists } = this.getChildren(newProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }

    if (Object.values(lists).length) {
      Object.assign(this._lists, lists);
    }

    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }

    if (this._setUpdate) {
      this._eventBus.emit(Component.EVENTS.FLOW_CDU, oldValue, this._props);
      this._setUpdate = false;
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
          target[prop] = value;
          this._setUpdate = true;
        }
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа.');
      },
    }) as unknown as P;
  }

  getContent(): HTMLElement {
    return this._element as HTMLElement;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}
