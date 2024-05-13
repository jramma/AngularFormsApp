import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes que se utilizarán en las rutas
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleListComponent } from './article-list/article-list.component';

// Define las rutas de la aplicación
const routes: Routes = [
  { path: 'nuevo-articulo-template', component: ArticleNewTemplateComponent },
  { path: 'nuevo-articulo-reactivo', component: ArticleNewReactiveComponent },
  { path: 'articulos', component: ArticleListComponent },
  { path: '', redirectTo: '/articulos', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  // Configura RouterModule con las rutas
  ],
  exports: [RouterModule]  // Exporta RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { }
