import nav from '../../index.ts';
import Component from '../../services/Component.ts';
import AuthField from '../AuthField/index.ts';
import Button from '../ui/Button/index.ts';
import tpl from './tpl.ts';

interface IAuth {
  title: string;
  fields: AuthField[];
  actionBtn: Button[];
  commonBtn: Button[];
  nav: typeof nav;
  attr: object;
}

export default class Auth extends Component<object> {
  constructor(props: IAuth) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
