import { Component, OnInit } from '@angular/core';
import { Produit, Sort } from 'src/app/data/produit.model';
import { PanierService } from 'src/app/service/panierService/panier.service';
import { ProduitService } from 'src/app/service/produitService/produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public produits: Produit[];
  public sorts: Sort[];

  constructor(private produitService: ProduitService, private panierService: PanierService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe(
      (data) => {
        this.produits = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ajouterAuPanier(produit: Produit) {
    this.panierService.ajouterAuPanier(produit);
  }

}
