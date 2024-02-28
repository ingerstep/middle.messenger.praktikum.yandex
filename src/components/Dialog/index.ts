import Component from '../../services/Component.ts';
import Message from '../Message/index.ts';
import tpl from './tpl.ts';

interface IDialog {
  date: string;
  messages: Message[];
}

export default class Dialog extends Component<object> {
  constructor(props: IDialog) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
