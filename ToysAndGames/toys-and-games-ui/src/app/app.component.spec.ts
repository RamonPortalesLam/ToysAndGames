import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, from } from 'rxjs';
import { AppComponent } from './app.component';
import { ToysService } from './services/toys.service';
//import 'rxjs/add/observable/from';
//import { Product } from "../app/models/product.model";


describe('AppComponent', () => {
  let toysService: ToysService;
  let component: AppComponent;
  let http: HttpClient;

  beforeEach(async () => {
    
    component = new AppComponent(toysService);
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  

  it(`should have as title 'toys-and-games-ui'`, () => {
    component = new AppComponent(toysService);

    expect(component.title).toEqual('toys-and-games-ui');
  });

  it('Debe retornar true',()=>{
    const lst : any[] = [
      {  
        id:1,
        name:'Product1', 
        description:'Product 1', 
        ageRestriction:1,
        price:1, 
        company:'Company1'
      },
      {  
        id:2,
        name:'Product2', 
        description:'Product 2', 
        ageRestriction:2,
        price:2, 
        company:'Company2'
      }
    ];


     spyOn(toysService,'getToys').and.callFake(()=>{
       return Observable.from(lst);
     });
  //   toysService = new ToysService(http);
  //   component = new AppComponent(toysService);
  //   const res = component.updateGrid(true);
  //   expect(res).toBeTruthy();
   });
});
