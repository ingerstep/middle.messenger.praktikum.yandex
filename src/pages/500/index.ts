import Error from '../../components/Error/index.ts';
import Link from '../../components/ui/Link/index.ts';
import Router from '../../services/Router.ts';

const page500 = new Error({
  title: 'Мы уже фиксим',
  mainTitle: '500',
  backLink: [
    new Link({
      value: 'Назад к чатам',
      events: {
        onLoad: () => {
          Router.go('/');
        },
      },
      attr: { class: 'back-link reset-link', href: './chat' },
    }),
  ],
  attr: {
    class: 'error flex',
  },
});

export default page500;
