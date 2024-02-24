const tpl = `
<label class="profile__label" for={{name}}>{{label}}</label>
<input
    value={{value}}
    class="profile__input reset-input"
    type="text"
    name={{name}}
    id={{name}}
/>
`

export default tpl;