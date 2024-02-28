import Component from '../../../services/Component.ts';
import Link from '../Link/index.ts';
import tpl from './tpl.ts';

interface INavLink {
  attr: object;
  links: Link[];
}

export default class NavLink extends Component<object> {
  constructor(props: INavLink) {
    super('li', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
