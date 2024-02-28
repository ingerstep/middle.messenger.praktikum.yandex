import nav from '../../index.ts';
import Component from '../../services/Component.ts';
import Dialog from '../Dialog/index.ts';
import Sender from '../Sender/index.ts';
import Button from '../ui/Button/index.ts';
import Input from '../ui/Input/index.ts';
import Link from '../ui/Link/index.ts';
import tpl from './tpl.ts';

interface IChat {
  senders: Sender[];
  dialog: Dialog[];
  backBtn: Button[];
  attachBtn: Button[];
  menuBtn: Button[];
  senderIconBtn: Button[];
  searchInput: Input[];
  messageInput: Input[];
  profileLink: Link[];
  nav: typeof nav;
  attr: object;
}

export default class Chat extends Component<object> {
  constructor(props: IChat) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
