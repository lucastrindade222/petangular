export interface Cli{


    nome:string,
    cpf: number,
    login:String,
    email:String,
    senha: String,
    salario: number,

    
    telefones:[]
    ,
    endereco: {
        numero: number,
        rua: String,
        bairro:String,
        cidade: String,
        uf: String,
        cep: number,
        complemento: String
    },






}
