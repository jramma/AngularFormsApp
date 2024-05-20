import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa RouterModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component'; // Importa NavbarComponent
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    NavbarComponent, // Declara NavbarComponent aquí
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'template', component: ArticleNewTemplateComponent },
      { path: 'reactivo', component: ArticleNewReactiveComponent },
      { path: 'articulos', component: ArticleListComponent },
      { path: '', redirectTo: '/articulos', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
