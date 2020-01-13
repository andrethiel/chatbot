var botui = new BotUI('hello-world');
botui.message.bot({
    loading: true,
    delay: 1000,
    content: 'Olá eu sou o Bot Rocio 👋'
}).then(() => {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: 'Estou aqui para lhe ajudar com as perguntas mais frequentes sobre o hospital'
    })
}).then(() => {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: 'Divimos as perguntas em alguns grupos para melhor lhe atendelo'
    })
}).then(() => {
    loop();
})


var loop = function () {
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
                                    content: '<b>Amil, Unimed, Cassi, Saude Caixa, Fundação Copel, Fundação Sanepar' +
                                        'Bradesco Saúde, Siemaco, Voam, Sul America, GoBox</b>'
                                })
                                return botui.action.button({
                                    loading: true,
                                    delay: 1000,
                                    action: [
                                        {
                                            text: 'Mais ajuda',
                                            value: '1'
                                        },
                                        {
                                            text: 'Nao',
                                            value: '0'
                                        }
                                    ]
                                }).then(res => {
                                    if (res.value == '0') {
                                        botui.message.bot({ // show first message
                                            delay: 200,
                                            content: 'fim atendimento'
                                        })
                                    } else {
                                        loop();
                                    }
                                })
                            break
                        }
                
                    })
                break
                case 'recepcoes':
                        return botui.action.button({
                            loading: true,
                            delay: 1000,
                            action: [
                                {
                                    text: 'Telefone do ambulatório',
                                    value: 'ambu'
                                },
                                {
                                    text: 'Telefone para marcação de consultas  da UNIMED',
                                    value: 'uni'
                                },
                                {
                                    text: 'Telefone para marcação de exames de imagem',
                                    value: 'cdi'
                                },{
                                    text: 'Telefone do setor de endoscopia',
                                    value: 'endos'
                                },{
                                    text: 'Como o paciente com problemas no pós cirúrgico faz para retornar na emergência',
                                    value: 'endos'
                                }
                            ]
                        })
                    break
                    case 'dedede':
                        break
            }
    })
}