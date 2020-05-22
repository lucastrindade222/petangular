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
import { ProdutosComponent } from './home/view/produtos/produtos.component';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatListModule} from '@angular/material/list';
import { CarrinhoComponent } from './view/carrinho/carrinho.component';
import { PerguntasComponent } from './view/perguntas/perguntas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TextFieldModule} from '@angular/cdk/text-field';
import { AtendimentoComponent } from './view/atendimento/atendimento.component';
import { SobreComponent } from './view/sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
   
    HomeComponent,
    NavComponent,
    FooterComponent,
    ProdutosComponent,
    HeaderComponent,
    CarrinhoComponent,
    PerguntasComponent,
    AtendimentoComponent,
    SobreComponent
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
