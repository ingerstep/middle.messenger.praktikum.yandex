import Auth from '../../components/Auth/index.ts';
import AuthField from '../../components/AuthField/index.ts';
import Button from '../../components/ui/Button/index.ts';
import Input from '../../components/ui/Input/index.ts';
import { validateForm, validateInput } from '../../utils/validate.ts';

const loginPage = new Auth({
  title: 'Вход',
  actionBtn: [
    new Button({
      value: 'Войти',
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
      value: 'Создать аккаунт',
      attr: { class: 'common-button reset-btn' },
    }),
  ],
  fields: [
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

export default loginPage;
