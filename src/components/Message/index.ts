import Component from '../../services/Component.ts';
import tpl from './tpl.ts';

interface IMessage {
  own?: string;
  sender?: string;
  text?: string;
  img?: string;
  time: string;
}

export default class Message extends Component<object> {
  constructor(props: IMessage) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
