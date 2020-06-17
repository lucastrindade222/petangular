export interface Car{


    id_venda:number,
     
    quantidade:String,
    total_venda: Number,
     
    produtos: {
      id_produto: Number,
      descri_P: String,
      valor: Number,
      nomefoto: String
    },


    pessoa: {nome: String,
    cpf: Number}
}