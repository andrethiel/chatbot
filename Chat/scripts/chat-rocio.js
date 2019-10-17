var botui = new BotUI('hello-world');
botui.message.bot({ // show first message
    loading: true,
    delay: 1000,
    content: 'Olá eu sou o Bot Rocio 👋'
}).then(() => {
    return botui.message.bot({ // second one
        loading: true,
        delay: 1500, // wait 1 sec.
        content: 'Estou aqui para lhe ajudar com as perguntas mais frequentes sobre o hospital'
    })
}).then(() => {
    return botui.message.bot({ // second one
        loading: true,
        delay: 1500, // wait 1 sec.
        content: 'Divimos as perguntas em alguns grupos para melhor lhe atendelo'
    })
}).then(() => {
    return botui.action.button({
        loading: true,
        delay: 1000,
        action: [
            {
                text: 'Pronto Socorro',
                value: 'pronto'
            },
            {
                text: 'Centro de Imagens',
                value: 'imagens'
            },
            {
                text: 'Recepcoes',
                value: 'recepcoes'
            }
        ]
    })
}).then(res => {
    switch (res.value) {
        case "pronto":
            return botui.action.button({
                loading: true,
                delay: 1000,
                action: [
                    {
                        text: 'Convenios atendidos',
                        value: 'convenios'
                    },
                    {
                        text: 'Consultar particulares',
                        value: 'consulta'
                    },
                    {
                        text: 'Atendimento SUS',
                        value: 'sus'
                    }
                ]
            }).then(res => {
                switch (res.value) {
                    case "convenios":
                        botui.message.bot({
                            delay: 1000,
                            loading: true,
                            content: 'Atendemos os seguintes convenios'
                        })
                        botui.message.bot({
                            delay: 1500,
                            loading: true,
                            content: '<b>Amil, Unimed, Cassi, Saude Caixa, Fundação Copel, Fundação Sanepar'+
                            'Bradesco Saúde, Siemaco, Voam, Sul America, GoBox</b>'
                        })
                        break;
                }
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
                content: 'Os quartos do primeiro andar são das <b>14h00 às 15h00</b> e do ' +
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