
const customExpress = require('./config/customexpress')
const conexao = require('./infra/conexao')
const tabela = require('./infra/tabela')


conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    }else{
        console.log('foi')
        tabela.init(conexao)
        const app = customExpress()

        app.listen(3000, () =>  console.log('foi2'))
    }
})




 
