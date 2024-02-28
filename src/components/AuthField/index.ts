import Component from '../../services/Component.ts';
import Input from '../ui/Input/index.ts';
import tpl from './tpl.ts';

interface IAuthField {
  label: string;
  name: string;
  authInput: Input[];
  attr: object;
}

export default class AuthField extends Component<object> {
  constructor(props: IAuthField) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
