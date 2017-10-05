// Modulos de la aplicacion
import { AboutModule } from './about/about.module';
import { AutoresModule } from './autores/autores.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { EnlacesModule } from './enlaces/enlaces.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routng';
// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Componente del Modulo
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    SharedModule,
    HomeModule,
    EnlacesModule,
    CatalogoModule,
    AutoresModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
