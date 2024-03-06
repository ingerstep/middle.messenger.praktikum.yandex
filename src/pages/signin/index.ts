import Auth from '../../components/Auth/index.ts';
import AuthField from '../../components/AuthField/index.ts';
import Button from '../../components/ui/Button/index.ts';
import Input from '../../components/ui/Input/index.ts';
import { validateForm, validateInput } from '../../utils/validate.ts';

const signinPage = new Auth({
  title: 'Регистрация',
  actionBtn: [
    new Button({
      value: 'Создать аккаунт',
      attr: { class: 'action-button reset-btn' },
      events: {
        onValidate: () => {
          validateForm();
        },
      },
    }),
  ],
  commonBtn: [
    new Button({
      value: 'Войти',
      attr: { class: 'common-button reset-btn' },
    }),
  ],
  fields: [
    new AuthField({
      label: 'Почта',
      name: 'email',
      authInput: [
        new Input({
          attr: {
            class: 'form__input reset-input validate-input',
            type: 'text',
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
      attr: { class: 'form__item flex' },
    }),
    new AuthField({
      label: 'Логин',
      name: 'login',
      authInput: [
        new Input({
          attr: {
            class: 'form__input reset-input validate-input',
            type: 'text',
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
      attr: { class: 'form__item flex' },
    }),
    new AuthField({
      label: 'Имя',
      name: 'first_name',
      authInput: [
        new Input({
          attr: {
            class: 'form__input reset-input validate-input',
            type: 'text',
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
      attr: { class: 'form__item flex' },
    }),
    new AuthField({
      label: 'Фамилия',
      name: 'second_name',
      authInput: [
        new Input({
          attr: {
            class: 'form__input reset-input validate-input',
            type: 'text',
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
      attr: { class: 'form__item flex' },
    }),
    new AuthField({
      label: 'Телефон',
      name: 'phone',
      authInput: [
        new Input({
          attr: {
            class: 'form__input reset-input validate-input',
            type: 'text',
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
      attr: { class: 'form__item flex' },
    }),
    new AuthField({
      label: 'Пароль',
      name: 'password',
      authInput: [
        new Input({
          attr: {
            class: 'form__input reset-input validate-input',
            type: 'text',
            name: 'password',
            id: 'password',
            dataValid: false,
          },
          events: {
            onBlur: (element) => {
              validateInput(element);
            },
          },
        }),
      ],
      attr: { class: 'form__item flex' },
    }),
  ],
  attr: {
    class: 'container flex',
  },
});

export default signinPage;
