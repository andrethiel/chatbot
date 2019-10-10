var botui = new BotUI('hello-world');
botui.message.bot({ // show first message
    delay: 200,
    content: 'Olá eu sou o Bot Rocio 👋'
}).then(() => {
    return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'Como posso te ajudar ??'
    })
}).then(() => {
    return botui.action.button({
        delay: 1000,
        action: [
            {
                text: 'Informções sobre pacientes',
                value: 'informacoes'
            },
            {
                text: 'Horarios de Visita',
                value: 'horarios'
            }
        ]
    })
}).then(res => {
    switch (res.value) {
        case "informacoes":
            botui.message.bot({
                delay: 200,
                loading: true,
                content: 'O hospital não passa nenhuma informação sobre os nossos pacientes 😔'
            }).then(() => {
                inicio();
            })
            break;
        case "horarios":
            botui.message.bot({
                delay: 1000,
                loading: true,
                content: 'Os horarios de visitas são divididos em 2 modos...'
            })
            botui.message.bot({
                delay: 2000,
                loading: true,
                content: 'Os quartos do primeiro andar são das <b>14h00 às 15h00</b> e do '+
                'segunda andar das <b>16h00 às 17h00</b>'
            })
            break;
        default:
            botui.message.bot({ // show first message
                delay: 200,
                content: 'Olá eu sou o Bot Rocio'
            })
    }
})