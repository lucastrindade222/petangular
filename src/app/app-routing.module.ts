import { AtendimentoComponent } from './view/atendimento/atendimento.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { CarrinhoComponent } from './view/carrinho/carrinho.component';
import { PerguntasComponent } from './view/perguntas/perguntas.component';
import { ProdutosComponent } from './home/view/produtos/produtos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}from '../app/login/login.component'
import { HomeComponent } from './home/home.component';

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
  path:'produto',
  component:ProdutosComponent
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
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
