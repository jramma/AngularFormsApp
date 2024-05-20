import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css',
})
export class ArticleNewTemplateComponent {
  name: string | undefined;
  price: number | undefined;
  imageUrl: string | undefined;
  isOnSale: boolean | undefined;
  submitted: boolean = false;
  formError: string | null = null;

  onSubmit(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      const formValue = {
        name: this.name,
        price: this.price,
        imageUrl: this.imageUrl,
        isOnSale: this.isOnSale,
      };
      console.log(formValue);
      this.formError = null;
    } else {
      this.formError = 'Por favor, corrija los errores en el formulario.';
    }
  }
}
