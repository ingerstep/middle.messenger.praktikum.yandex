import Component from '../../services/Component.ts';
import Link from '../ui/Link/index.ts';
import tpl from './tpl.ts';

interface Err {
  title: string;
  mainTitle: string;
  backLink: Link[];
  attr: object;
}

export default class Error extends Component<object> {
  constructor(props: Err) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
