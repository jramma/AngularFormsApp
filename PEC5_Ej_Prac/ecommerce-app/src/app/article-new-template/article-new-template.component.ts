import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css',
})
export class ArticleNewTemplateComponent {
  article: FormGroup;
  submitted = false;
  formError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.article = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', [Validators.required, Validators.pattern('(https?://.*\.(?:png|jpg))')]],
      isOnSale: [false],
    });
  }

  get name() {
    return this.article.get('name');
  }

  get price() {
    return this.article.get('price');
  }

  get imageUrl() {
    return this.article.get('imageUrl');
  }

  onSubmit() {
    this.submitted = true;
    if (this.article.valid) {
      console.log(this.article.value);
      this.formError = null;
    } else {
      this.formError = 'Por favor, corrija los errores en el formulario.';
    }
  }
}
