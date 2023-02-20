import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProductComponent } from './components/product/product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
    path:'accueil',
    component:AccueilComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'inscription',
    component:SignUpComponent
  },
  {
    path:'connexion',
    component:SignInComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
