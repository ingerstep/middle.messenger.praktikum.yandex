import Component from '../../services/Component.ts';
import HeaderLink from '../ui/NavLink/index.ts';
import tpl from './tpl.ts';

interface NavProps {
  className?: string;
  navLinks: HeaderLink[];
  attr: object;
}

export default class Nav extends Component<object> {
  constructor(props: NavProps) {
    super('nav', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
