import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ProdutosIndicadoresComponent } from './produtosIndicadores/produtosIndicadores.component';
import { PactuacaoComponent } from './pactuacao/pactuacao.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';

//importando classes da biblioteca de mapeamento de rotas
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ConsultaProdutosIndicadoresComponent } from './consulta-produtos-indicadores/consulta-produtos-indicadores.component';

//importando a classe de configuração do módulo para PAGINAÇÃO de dados
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [									
    AppComponent,
      HeaderComponent,
      FooterComponent,
      ProdutosIndicadoresComponent,
      PactuacaoComponent,
      AvaliacaoComponent,
      HomeComponent,
      TutorialComponent,
      ConsultaProdutosIndicadoresComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule, 
    //RouterModule.forRoot(routes),
    NgxPaginationModule,
    MatCardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
