import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ToysService } from './services/toys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  detectChanges() {
    throw new Error('Method not implemented.');
  }
  products: Product[] = [];
  title = 'toys-and-games-ui';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private toysService: ToysService){

  }

  ngOnInit(): void {
    this.loadToys();
  }
  
  loadToys(): void{
    this.toysService.getToys().subscribe(t => this.products = t);
  }

  updateGrid(event: boolean): void {
    if(event){
      this.loadToys();
    }
  }
}
