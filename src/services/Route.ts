import renderDOM from '../utils/renderDOM.ts';
import Component from './Component.ts';

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

export default class Route {
  private _blockClass: Component<object>;

  private _pathname: string;

  private _block: null | Component<object>;

  private _props: {rootQuery: string};

  constructor(pathname: string, view: Component<object>, props: {rootQuery: string}) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = this._blockClass;
      renderDOM(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}