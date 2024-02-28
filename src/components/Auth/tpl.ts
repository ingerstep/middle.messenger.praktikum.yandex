const tpl = `
    {{{nav}}}
    <form action="#" class="form flex">

        <h1 class="form__title">{{title}}</h1>

        <ul class="flex form__list reset-list">
            {{{fields}}}
        </ul>

        {{{actionBtn}}}
        {{{commonBtn}}}

    </form>
`;

export default tpl;
