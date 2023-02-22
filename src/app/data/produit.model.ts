export class Produit{
    public id:number;
    public nomDomaine:string;
    public reference:number;
    public quantite:number;
    public prix:number;
    public volume:number;
    public millesime:number;
    public image:string;
    public type:Type;
} 

export class Type{
    public id:number;
    public name:string;
}