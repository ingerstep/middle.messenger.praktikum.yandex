import Error from '../../components/Error/index.ts';
import Link from '../../components/ui/Link/index.ts';
import nav from '../../index.ts';
import Component from '../../services/Component.ts';
import renderDOM from '../../utils/renderDOM.ts';
import ChatPage from '../chat/index.ts';

export default class Page500 {
  private errorInstance: Error;

  private navInstance: typeof nav;

  constructor() {
    this.navInstance = nav;

    this.errorInstance = new Error({
      title: 'Мы уже фиксим',
      mainTitle: '500',
      nav: this.navInstance,
      backLink: [
        new Link({
          value: 'Назад к чатам',
          events: {
            onLoad: () => {
              renderDOM(new ChatPage() as unknown as Component<object>);
            },
          },
          attr: { class: 'back-link reset-link', href: './chat' },
        }),
      ],
      attr: {
        class: 'error flex',
      },
    });
  }

  getContent() {
    return this.errorInstance.getContent();
  }
}
