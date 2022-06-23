import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConteudoPrincipalComponent } from './conteudo-principal/conteudo-principal.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ParagrafoComponent } from './paragrafo/paragrafo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConteudoPrincipalComponent,
    RodapeComponent,
    ParagrafoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
