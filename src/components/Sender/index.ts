import Component from "../../services/Component";
import tpl from "./tpl";

export default class Sender extends Component<object> {
    render(): void {
        return this.compile(tpl)
    }
}