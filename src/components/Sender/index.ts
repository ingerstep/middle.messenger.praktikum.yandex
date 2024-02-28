import Component from '../../services/Component.ts';
import tpl from './tpl.ts';

interface ISender {
  name: string;
  sender_message: string;
  date: string;
  message_count: string;
  attr: object;
}

export default class Sender extends Component<object> {
  constructor(props: ISender) {
    super('li', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
