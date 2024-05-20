import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  { path: 'template', component: ArticleNewTemplateComponent },
  { path: 'reactivo', component: ArticleNewReactiveComponent },
  { path: 'articulos', component: ArticleListComponent },
  { path: '', redirectTo: '/articulos', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
