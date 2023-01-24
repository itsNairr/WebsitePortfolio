const { Webhook } = require('discord-webhook-node');
module.exports = {
    discordSend: (text) => {
    const hook = new Webhook('https://discordapp.com/api/webhooks/1067571528805404772/_xx4ttXMaS4rptr_Ooo1T0b0ZxLA8LHaz4wHp2JVA9Bi1qnXxVvVG2kVw7HAkf0m4qmg');
    hook.setUsername('Jeff the Website Manager');
    hook.setAvatar('');
    hook.send(text);
    }
}