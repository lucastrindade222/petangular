import { baseUrl } from './../../../environments/environment';
export interface Ate{

 

	id_consuta:number,
	data_consulta:String,
	hoje:String,
 	   servicos: {
		id_servico:number
	}

	animal:{
		id_animal:number,
		pessoa:{
			id_pessoa:number
		}
	}
 
}

 