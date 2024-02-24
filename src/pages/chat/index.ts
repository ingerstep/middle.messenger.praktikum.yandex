import Chat from "../../components/Chat";
import Dialog from "../../components/Dialog";
import Message from "../../components/Message";
import Sender from "../../components/Sender";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Link from "../../components/ui/Link";

export default class ChatPage {
    private chatInstance: Chat;
    private senderArray: Sender[];
    private dialogData: Dialog[];

    constructor() {
        this.dialogData = [
            new Dialog({
                date: '19 июля',
                messages: [
                    new Message({
                        sender: 'sender',
                        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                                попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                                астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                                поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
        
                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так
                                никогда
                                и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                                евро.`,
                        time: '11:52',
                    }),
                    new Message({
                        img: 'img',
                        time: '10:04',
                    }),
                    new Message({
                        own: 'own',
                        text: 'Круто',
                        time: '12:44'
                    }),
                ]
            }),
            new Dialog({
                date: '20 июля',
                messages: [
                    new Message({
                        sender: 'sender',
                        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                                попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                                астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                                поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой..`,
                        time: '12:42',
                    }),
                    new Message({
                        img: 'img',
                        time: '10:04',
                    }),
                    new Message({
                        own: 'own',
                        text: 'Круто',
                        time: '12:44'
                    }),
                ]
            }),
            new Dialog({
                date: '19 июля',
                messages: [
                    new Message({
                        sender: 'sender',
                        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                                попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                                астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                                поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
        
                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так
                                никогда
                                и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                                евро.`,
                        time: '11:52',
                    }),
                    new Message({
                        img: 'img',
                        time: '10:04',
                    }),
                    new Message({
                        own: 'own',
                        text: 'Круто',
                        time: '12:44'
                    }),
                ]
            })
        ]

        this.senderArray = [
            new Sender({ name: "Андрей", sender_message: "Изображение", date: "10:49", message_count: "1", attr: { class: "sidebar__item" } }),
            new Sender({ name: "Илья", sender_message: "И Human Interface Guidelines и Material Design рекомендуют...", date: "11:59", message_count: "3", attr: { class: "sidebar__item" } }),
            new Sender({ name: "Киноклуб", sender_message: "В 2008 году художник Jon Rafman  начал собирать", date: "13:29", message_count: "2", attr: { class: "sidebar__item" } }),
            new Sender({ name: "Day.", sender_message: "Миллионы россиян ежедневно проводят десятки часов свое", date: "16:20", message_count: "10", attr: { class: "sidebar__item" } }),
        ]

        this.chatInstance = new Chat({
            senders: this.senderArray,
            dialog: this.dialogData,
            messageInput: [new Input({ attr: { class: 'chat__message reset-input', type: 'text', placeholder: 'Сообщение', name: 'message' } })],
            senderIconBtn: [new Button({ value: '', attr: { class: 'chat__icon reset-btn' } })],
            searchInput: [new Input({ attr: { class: 'sidebar__input reset-input', type: 'text', placeholder: 'Поиск' } })],
            profileLink: [new Link({ value: 'Профиль', attr: { class: 'sidebar__link reset-link', href: './profile' } })],
            attachBtn: [new Button({ value: 'attach-icon', attr: { class: 'chat__attach-btn reset-btn' } })],
            backBtn: [new Button({ value: 'back-icon', attr: { class: 'chat__send-btn reset-btn' } })],
            menuBtn: [new Button({ value: 'menu-icon', attr: { class: 'chat__menu reset-btn' } })],
            attr: {
                class: "main flex"
            }
        });
    }

    getContent() {
        return this.chatInstance.getContent();
    }
}