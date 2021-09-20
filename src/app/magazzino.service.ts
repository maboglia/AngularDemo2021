import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MagazzinoService {

  //1) inietto il cliente nel costruttore (e importo)
  constructor(private http: HttpClient) { }
  //2) creo un metodo che ritorna un json
  getMovimenti() {
    // return this.http.get('http://localhost:9090/magazzino/magazzinorest');
    return this.http.get('https://fakestoreapi.com/products');
  }
}
