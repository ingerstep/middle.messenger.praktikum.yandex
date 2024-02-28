import Chat from '../../components/Chat/index.ts';
import Dialog from '../../components/Dialog/index.ts';
import Message from '../../components/Message/index.ts';
import Sender from '../../components/Sender/index.ts';
import Button from '../../components/ui/Button/index.ts';
import Input from '../../components/ui/Input/index.ts';
import Link from '../../components/ui/Link/index.ts';
import nav from '../../index.ts';
import Component from '../../services/Component.ts';
import renderDOM from '../../utils/renderDOM.ts';
import { validateInput } from '../../utils/validate.ts';
import ProfilePage from '../profile/index.ts';

export default class ChatPage {
  private chatInstance: Chat;

  private senderArray: Sender[];

  private dialogData: Dialog[];

  private navInstance: typeof nav;

  constructor() {
    this.navInstance = nav;
    this.dialogData = [
      new Dialog({
        date: '19 июля',
        messages: [
          new Message({
            sender: 'sender',
            text: 'Привет! Смотри, тут всплыл интересный ',
            time: '11:52',
          }),
          new Message({
            img: 'img',
            time: '10:04',
          }),
          new Message({
            own: 'own',
            text: 'Круто',
            time: '12:44',
          }),
        ],
      }),
      new Dialog({
        date: '20 июля',
        messages: [
          new Message({
            sender: 'sender',
            text: 'Привет! Смотри, тут ',
            time: '12:42',
          }),
          new Message({
            img: 'img',
            time: '10:04',
          }),
          new Message({
            own: 'own',
            text: 'Круто',
            time: '12:44',
          }),
        ],
      }),
      new Dialog({
        date: '19 июля',
        messages: [
          new Message({
            sender: 'sender',
            text: 'Привет! Смотри, тут всплыл',
            time: '11:52',
          }),
          new Message({
            img: 'img',
            time: '10:04',
          }),
          new Message({
            own: 'own',
            text: 'Круто',
            time: '12:44',
          }),
        ],
      }),
    ];

    this.senderArray = [
      new Sender({
        name: 'Андрей',
        sender_message: 'Изображение',
        date: '10:49',
        message_count: '1',
        attr: { class: 'sidebar__item' },
      }),
      new Sender({
        name: 'Илья',
        sender_message: 'И Human Interface Guidelines и Material Design рекомендуют...',
        date: '11:59',
        message_count: '3',
        attr: { class: 'sidebar__item' },
      }),
      new Sender({
        name: 'Киноклуб',
        sender_message: 'В 2008 году художник Jon Rafman  начал собирать',
        date: '13:29',
        message_count: '2',
        attr: { class: 'sidebar__item' },
      }),
      new Sender({
        name: 'Day.',
        sender_message: 'Миллионы россиян ежедневно проводят десятки часов свое',
        date: '16:20',
        message_count: '10',
        attr: { class: 'sidebar__item' },
      }),
    ];

    this.chatInstance = new Chat({
      nav: this.navInstance,
      senders: this.senderArray,
      dialog: this.dialogData,
      profileLink: [
        new Link({
          value: 'Профиль',
          events: {
            onLoad: () => {
              renderDOM(new ProfilePage() as unknown as Component<object>);
            },
          },
          attr: { class: 'sidebar__link reset-link', href: './profile' },
        }),
      ],
      messageInput: [
        new Input({
          attr: {
            class: 'chat__message reset-input',
            type: 'text',
            placeholder: 'Сообщение',
            name: 'message',
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      searchInput: [
        new Input({
          attr: {
            class: 'sidebar__input reset-input',
            type: 'text',
            placeholder: 'Поиск',
          },
        }),
      ],
      senderIconBtn: [new Button({ value: '', attr: { class: 'chat__icon reset-btn' } })],
      attachBtn: [
        new Button({
          value: '',
          src: '../static/icons/attach-icon.svg',
          alt: 'Отправить',
          attr: { class: 'chat__attach-btn reset-btn' },
        }),
      ],
      backBtn: [
        new Button({
          value: '',
          src: '../static/icons/back-icon.svg',
          alt: 'Назад',
          attr: { class: 'chat__send-btn reset-btn' },
        }),
      ],
      menuBtn: [
        new Button({
          value: '',
          src: '../static/icons/menu-icon.svg',
          alt: 'Меню',
          attr: { class: 'chat__menu reset-btn' },
        }),
      ],
      attr: {
        class: 'container flex',
      },
    });
  }

  getContent() {
    return this.chatInstance.getContent();
  }
}
