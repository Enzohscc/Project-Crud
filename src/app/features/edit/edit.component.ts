import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

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
