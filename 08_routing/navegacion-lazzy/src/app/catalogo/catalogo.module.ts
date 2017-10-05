import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatalogoComponent]
})
export class CatalogoModule { }
