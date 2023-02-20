import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  estConnecte = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.estConnecte = true;
    }
  }

  deconnecter() {
    localStorage.removeItem('token');
    this.estConnecte = false;
    this.router.navigate(['/connexion']);
  }
}
