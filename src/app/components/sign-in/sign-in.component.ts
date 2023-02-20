import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/service/connexionService/connexion.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  email = '';
  motDePasse = '';
  errorMessage = '';

  constructor(private connexionService: ConnexionService, private router: Router) { }

  soumettreFormulaire() {
    this.connexionService.connecter(this.email, this.motDePasse)
      .subscribe(
        response => {
          if (response.status === 200) {
            const token = response.body.token;
            localStorage.setItem('token', token);
            this.router.navigate(['/accueil']);
          } else if(response.status === 400) {
            this.errorMessage = 'Email ou mot de passe invalide';
          }
        },
        error => {
          console.error(error);
        }
      );
  }
}
