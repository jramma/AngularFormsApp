import { Component } from '@angular/core';
import { ArticleItemComponent } from '../article-item2/article-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  articles: Article[] = ['Artículo 1', 'Artículo 2', 'Artículo 3'].map(
    (name, i) => ({
      name,
      imageUrl: `https://picsum.photos/seed/${i + 1}/200`,
      price: +(Math.random() * 49 + 1).toFixed(2),
      quantityInCart: 0,
      isOnSale: i !== 2,
    })
  );
  addQuantity(article: Article): void {
    article.quantityInCart++;
  }
  onQuantityChange(event: ArticleQuantityChange): void {
    const article = this.articles.find(a => a === event.article);
    if (article) {
      article.quantityInCart += event.change;
    }
  }
}
type Article = {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
};
interface ArticleQuantityChange {
  article: Article;
  change: number;
}
