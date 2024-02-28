/* eslint-disable react/destructuring-assignment */
import Component from '../../../services/Component.ts';
import tpl from './tpl.ts';

interface IInput {
  attr: object;
  events?: {
    onBlur?: (element: HTMLInputElement) => void;
  };
}

export default class Input extends Component<object> {
  constructor(props: IInput) {
    super('input', props);

    this.addEvents();
  }

  addEvents() {
    super.addEvents();

    this.element?.addEventListener(
      'blur',
      () => {
        this.props.events?.onBlur?.(this.element);
      },
    );
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
