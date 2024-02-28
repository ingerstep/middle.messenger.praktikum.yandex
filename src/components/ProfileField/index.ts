import Component from '../../services/Component.ts';
import Input from '../ui/Input/index.ts';
import tpl from './tpl.ts';

interface IProfileField {
  name: string;
  label: string;
  profileInput: Input[];
  attr: object;
}

export default class ProfileField extends Component<object> {
  constructor(props: IProfileField) {
    super('li', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
