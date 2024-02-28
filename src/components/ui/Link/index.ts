/* eslint-disable react/destructuring-assignment */
import Component from '../../../services/Component.ts';
import tpl from './tpl.ts';

interface ILink {
  value: string;
  attr: object;
  events?: {
    onLoad?: () => void;
  };
}

export default class Link extends Component<object> {
  constructor(props: ILink) {
    super('a', props);

    this.addEvents();
  }

  addEvents() {
    super.addEvents();

    this.element?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });

    this.element?.addEventListener('click', this.props.events?.onLoad as () => unknown);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
