const tpl = `
        <button class="flex sidebare__button reset-btn">
            <img class="sidebar__icon" src="#" alt="Sender icon" />
            <div class="sidebar__sender-info flex">
                <div class="sidebar__sender-name">{{name}}</div>
                <p class="sidebar__sender-message">{{sender_message}}</p>
            </div>
            <div class="sidebar__info flex">
                <span class="sidebar__date">{{date}}</span>
                <span class="sidebar__counter">{{message_count}}</span>
            </div>
        </button>         
`;

export default tpl;
