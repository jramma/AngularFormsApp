import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[NavbarComponent, RouterOutlet],
  standalone: true
})
export class AppComponent {
  title = 'ecommerce';
  articles = Array.from({ length: 12 }, (_, i) => ({
    name: `Producto ${i + 1}`,
    imageUrl: `https://picsum.photos/seed/${i + 1}/200`, // Genera una URL de imagen aleatoria
    price: +(Math.random() * 49 + 1).toFixed(2), // Genera un precio aleatorio entre 1 y 50 con decimales
    isOnSale: i % 2 === 0,
    quantityInCart: 0,
  }));
}
