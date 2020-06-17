import { ListarprodutosComponent } from './view/listarprodutos/listarprodutos.component';
import { AtendimentolistarComponent } from './view/atendimentolistar/atendimentolistar.component';
import { ClientesComponent } from './view/clientes/clientes.component';
import { ListarservicoComponent } from './view/listarservico/listarservico.component';
import { ListarAnimalComponent } from './view/listar-animal/listar-animal.component';
import { CadastroprodutosComponent } from './view/cadastroprodutos/cadastroprodutos.component';
import { AtendimentoComponent } from './view/atendimento/atendimento.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { CarrinhoComponent } from './view/carrinho/carrinho.component';
import { PerguntasComponent } from './view/perguntas/perguntas.component';
 
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}from '../app/login/login.component'
import { HomeComponent } from './home/home.component';
import { CadastrarPSComponent } from './view/cadastrar-ps/cadastrar-ps.component';
import { CadasservicosComponent } from './view/cadasservicos/cadasservicos.component';
import { CadastroanimalComponent } from './view/cadastroanimal/cadastroanimal.component';
import { ListarClientesComponent } from './view/listar-clientes/listar-clientes.component';

const routes: Routes = [

{
path:'login',
component:LoginComponent
},


{
  path:'cadastro',
  component:CadastrarComponent
},

{
  path:'',
  component:HomeComponent
},
 
{
  path:'perguntas',
  component:PerguntasComponent
},

{
  path:'carrinho',
  component:CarrinhoComponent
},
{


path:'sobre',
component:SobreComponent

},
{
  path:'atendimento',
  component:AtendimentoComponent
},
{
path:'cadastroprodutos',
component:CadastroprodutosComponent

},{
path:'cadastrarps',
component:CadastrarPSComponent

},{
path:'cadasservicos',
component:CadasservicosComponent

},{
  path:'castroanimal',
  component:CadastroanimalComponent
},
{
  path:'listarAnimal',
  component:ListarAnimalComponent
},{
path:'listarProduto',
component:ListarprodutosComponent
},
{
  path:"listarservico",
  component:ListarservicoComponent
},{
  path:"listarclientes",
  component:ListarClientesComponent
},{
  path:"Clientes",
  component:ClientesComponent
},{
  path:"atendimentolistar",
  component:AtendimentolistarComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
