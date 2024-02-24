import Error from "../../components/Error";

export default class Page404 {
    private errorInstance: Error;

    constructor() {
        this.errorInstance = new Error({
            title: 'Мы уже фиксим',
            mainTitle: '500',
            attr: {
                class: "error flex"
            }
        });
    }

    getContent() {
        return this.errorInstance.getContent();
    }
}