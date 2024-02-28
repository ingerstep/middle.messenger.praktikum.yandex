const tpl = `
    {{{nav}}}

    <div class="flex back__wrapper">
         {{{backBtn}}}
    </div>

    <section class="profile flex">
        {{{avatarBtn}}}
        <h1 class="profile__name">{{userName}}</h1>
        
        <form class="profile__form flex" action="#">
            <ul class="reset-list profile__list flex">
                {{{fields}}}
            </ul>

            <ul class="reset-list profile__list flex">
                <li class="profile__item">
                    {{{changeDataBtn}}}
                </li>
                <li class="profile__item">
                    {{{changePassBtn}}}
                </li>
                <li class="profile__item">
                    {{{exitBtn}}}
                </li>
            </ul>

            <ul class="reset-list profile__list flex">
                {{{changes}}}
            </ul>

            {{{saveBtn}}}
        </form>
    </section>
`;

export default tpl;
