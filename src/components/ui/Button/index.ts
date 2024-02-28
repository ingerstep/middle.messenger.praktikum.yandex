/* eslint-disable react/destructuring-assignment */
import Component from '../../../services/Component.ts';
import tpl from './tpl.ts';

interface IButton {
  value: string;
  attr?: object;
  src?: string;
  alt?: string;
  events?: {
    onValidate?: (event: Event) => void;
  };
}

export default class Button extends Component<object> {
  constructor(props: IButton) {
    super('button', props);

    this.addEvents();
  }

  addEvents() {
    super.addEvents();

    this.element?.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    });

    this.element?.addEventListener(
      'click',
    this.props.events?.onValidate as (this: HTMLElement, ev: MouseEvent) => unknown,
    );
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
