import Component from '../../services/Component.ts';
import ProfileField from '../ProfileField/index.ts';
import Button from '../ui/Button/index.ts';
import tpl from './tpl.ts';

interface IProfile {
  userName: string;
  fields: ProfileField[];
  changes: ProfileField[];
  saveBtn: Button[];
  changeDataBtn: Button[];
  changePassBtn: Button[];
  exitBtn: Button[];
  avatarBtn: Button[];
  backBtn: Button[];
  attr: object;
}

export default class Profile extends Component<object> {
  constructor(props: IProfile) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
