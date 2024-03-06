import Profile from '../../components/Profile/index.ts';
import ProfileField from '../../components/ProfileField/index.ts';
import Button from '../../components/ui/Button/index.ts';
import Input from '../../components/ui/Input/index.ts';
import { validateInput } from '../../utils/validate.ts';

const profilePage = new Profile({
  userName: 'Иван',
  avatarBtn: [
    new Button({
      value: 'avatar',
      attr: { class: 'reset-btn profile__avatar avatar', id: 'avatar' },
    }),
  ],
  changeDataBtn: [
    new Button({
      value: 'Изменить данные',
      attr: { class: 'profile__item_blue reset-btn' },
    }),
  ],
  changePassBtn: [
    new Button({
      value: 'Изменить пароль',
      attr: { class: 'profile__item_blue reset-btn' },
    }),
  ],
  exitBtn: [
    new Button({
      value: 'Выйти',
      attr: { class: 'profile__item_red reset-btn' },
    }),
  ],
  saveBtn: [
    new Button({
      value: 'Сохранить',
      attr: { class: 'reset-btn action-button profile__save-btn' },
    }),
  ],
  backBtn: [
    new Button({
      value: '',
      src: '../static/icons/back-icon.svg',
      alt: 'Назад',
      attr: { class: 'reset-btn' },
    }),
  ],
  fields: [
    new ProfileField({
      name: 'email',
      label: 'Почта',
      profileInput: [
        new Input({
          attr: {
            class: 'profile__input reset-input validate-input',
            type: 'text',
            placeholder: 'pochta@yandex.ru',
            name: 'email',
            id: 'email',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'profile__item' },
    }),
    new ProfileField({
      name: 'login',
      label: 'Логин',
      profileInput: [
        new Input({
          attr: {
            class: 'profile__input reset-input validate-input',
            type: 'text',
            placeholder: 'ivanivanov',
            name: 'login',
            id: 'login',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'profile__item' },
    }),
    new ProfileField({
      name: 'first_name',
      label: 'Имя',
      profileInput: [
        new Input({
          attr: {
            class: 'profile__input reset-input validate-input',
            type: 'text',
            placeholder: 'Иван',
            name: 'first_name',
            id: 'first_name',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'profile__item' },
    }),
    new ProfileField({
      name: 'second_name',
      label: 'Фамилия',
      profileInput: [
        new Input({
          attr: {
            class: 'profile__input reset-input validate-input',
            type: 'text',
            placeholder: 'Иванов',
            name: 'second_name',
            id: 'second_name',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'profile__item' },
    }),
    new ProfileField({
      name: 'display_name',
      label: 'Имя в чате',
      profileInput: [
        new Input({
          attr: {
            class: 'profile__input reset-input validate-input',
            type: 'text',
            placeholder: 'Иван',
            name: 'display_name',
            id: 'display_name',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'profile__item' },
    }),
    new ProfileField({
      name: 'phone',
      label: 'Телефон',
      profileInput: [
        new Input({
          attr: {
            class: 'profile__input reset-input validate-input',
            type: 'text',
            placeholder: '+79999999999',
            name: 'phone',
            id: 'phone',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'profile__item' },
    }),
  ],
  changes: [
    new ProfileField({
      name: 'oldPassword',
      label: 'Старый пароль',
      profileInput: [
        new Input({
          attr: {
            class: 'profile__input reset-input validate-input',
            type: 'text',
            placeholder: '******',
            name: 'oldPassword',
            id: 'oldPassword',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'profile__item' },
    }),
    new ProfileField({
      name: 'newPassword',
      label: 'Новый пароль',
      profileInput: [
        new Input({
          attr: {
            class: 'profile__input reset-input validate-input',
            type: 'text',
            placeholder: '******',
            name: 'newPassword',
            id: 'newPassword',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'profile__item' },
    }),
    new ProfileField({
      name: 'newPassword',
      label: 'Повторите новый пароль',
      profileInput: [
        new Input({
          attr: {
            class: 'profile__input reset-input validate-input',
            type: 'text',
            placeholder: '******',
            name: 'newPassword',
            id: 'newPassword',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'profile__item' },
    }),
  ],
  attr: {
    class: 'container flex',
  },
});

export default profilePage;
