const tpl = `
{{{nav}}}
<section class="sidebar flex">
        {{{profileLink}}}
        {{{searchInput}}}
        
        <ul class="sidebar__list flex reset-list"> 
            {{{senders}}}
        </ul>
</section>
<section class="chat flex">
        <div class="chat__header flex">
            {{{senderIconBtn}}}
            <span class="chat__name">Вадим</span>
            {{{menuBtn}}}
        </div>
        <div class="chat__window flex">
            {{{dialog}}}
        </div>

        <div class="chat__footer flex">
            {{{attachBtn}}}
            {{{messageInput}}}
            {{{backBtn}}}
        </div>
</section>    
`;

export default tpl;
