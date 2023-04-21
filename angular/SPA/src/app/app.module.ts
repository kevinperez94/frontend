import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
