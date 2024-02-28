import Nav from './components/Nav/index.ts';
import Link from './components/ui/Link/index.ts';
import NavLink from './components/ui/NavLink/index.ts';
import Page404 from './pages/404/index.ts';
import Page500 from './pages/500/index.ts';
import ChatPage from './pages/chat/index.ts';
import LoginPage from './pages/login/index.ts';
import ProfilePage from './pages/profile/index.ts';
import SigninPage from './pages/signin/index.ts';
import Component from './services/Component.ts';
import renderDOM from './utils/renderDOM.ts';

const root = document.querySelector('#app');

const nav = new Nav({
  navLinks: [
    new NavLink({
      links: [
        new Link({
          value: '500',
          events: {
            onLoad: () => {
              renderDOM(new Page500() as unknown as Component<object>);
            },
          },
          attr: { class: 'nav__item' },
        })],
      attr: { class: 'nav__item' },
    }),
    new NavLink({
      links: [
        new Link({
          value: '404',
          events: {
            onLoad: () => {
              renderDOM(new Page404() as unknown as Component<object>);
            },
          },
          attr: { class: 'nav__item' },
        })],
      attr: { class: 'nav__item' },
    }),
    new NavLink({
      links: [
        new Link({
          value: 'Чат',
          events: {
            onLoad: () => {
              renderDOM(new ChatPage() as unknown as Component<object>);
            },
          },
          attr: { class: 'nav__item' },
        })],
      attr: { class: 'nav__item' },
    }),
    new NavLink({
      links: [
        new Link({
          value: 'Профиль',
          events: {
            onLoad: () => {
              renderDOM(new ProfilePage() as unknown as Component<object>);
            },
          },
          attr: { class: 'nav__item' },
        })],
      attr: { class: 'nav__item' },
    }),
    new NavLink({
      links: [
        new Link({
          value: 'Вход',
          events: {
            onLoad: () => {
              renderDOM(new LoginPage() as unknown as Component<object>);
            },
          },
          attr: { class: 'nav__item' },
        })],
      attr: { class: 'nav__item' },
    }),
    new NavLink({
      links: [
        new Link({
          value: 'Регистрация',
          events: {
            onLoad: () => {
              renderDOM(new SigninPage() as unknown as Component<object>);
            },
          },
          attr: { class: 'nav__item' },
        })],
      attr: { class: 'nav__item' },
    }),
  ],
  attr: {
    class: 'nav flex',
  },
});

root?.append(nav.getContent());

export default nav;
