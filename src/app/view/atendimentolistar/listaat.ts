import { baseUrl } from './../../../environments/environment';
import { hrtime } from 'process';
export interface Ate{

 

	id_consuta:number,
	data_consulta:String,
	hoje:String,
	servicos:{
		id_servico:number
	}

	animal:{
		id_animal:number,
		pessoa:{
			id_pessoa:number
		}
	}
 
 

}

 