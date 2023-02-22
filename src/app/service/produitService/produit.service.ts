import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produitGetAll = 'https://localhost:7141/api/Produit';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<any> {
    return this.http.get(this.produitGetAll);
  }
}
