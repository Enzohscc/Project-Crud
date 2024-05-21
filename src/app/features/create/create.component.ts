import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  productsService = inject(ProductsService);

  matSnackBar = inject(MatSnackBar);

  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>(
      '', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit() {
    this.productsService.post({
      title: this.form.controls.title.value
    })
    .subscribe(() => {
      this.matSnackBar.open('Produto Criado Com Sucesso!', 'OK');
    });

    this.router.navigateByUrl('/');
  }
}
