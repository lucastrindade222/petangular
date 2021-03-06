 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import{HttpClientModule} from'@angular/common/http'
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import {MatRadioModule} from '@angular/material/radio';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { FooterComponent } from './home/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon';
 
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatListModule} from '@angular/material/list';
import { CarrinhoComponent } from './view/carrinho/carrinho.component';
import { PerguntasComponent } from './view/perguntas/perguntas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TextFieldModule} from '@angular/cdk/text-field';
import { AtendimentoComponent } from './view/atendimento/atendimento.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { CadastroprodutosComponent } from './view/cadastroprodutos/cadastroprodutos.component';
import { CadastrarPSComponent } from './view/cadastrar-ps/cadastrar-ps.component';
import { CadasservicosComponent } from './view/cadasservicos/cadasservicos.component';
import { CadastroanimalComponent } from './view/cadastroanimal/cadastroanimal.component';
import { ListarAnimalComponent } from './view/listar-animal/listar-animal.component';
import { ListarservicoComponent } from './view/listarservico/listarservico.component';
import { ListarClientesComponent } from './view/listar-clientes/listar-clientes.component';
import { ClientesComponent } from './view/clientes/clientes.component';
import { AtendimentolistarComponent } from './view/atendimentolistar/atendimentolistar.component';
import { ListarprodutosComponent } from './view/listarprodutos/listarprodutos.component';
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
   
    HomeComponent,
    NavComponent,
    FooterComponent,
 
    HeaderComponent,
    CarrinhoComponent,
    PerguntasComponent,
    AtendimentoComponent,
    SobreComponent,
    CadastroprodutosComponent,
    CadastrarPSComponent,
    CadasservicosComponent,
    CadastroanimalComponent,
    ListarAnimalComponent,
    ListarservicoComponent,
    ListarClientesComponent,
    ClientesComponent,
    AtendimentolistarComponent,
    ListarprodutosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    TextFieldModule
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
