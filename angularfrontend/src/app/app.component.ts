import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private categories = [];
  constructor(private catalogueService:CatalogueService){

  }
  ngOnInit(): void {
      this.getCategories();
  }
  private getCategories(){
    this.catalogueService.getRessource("/categories")
    .subscribe(data =>{
      //this.categories = data;
      console.log("data");
      console.log(data);
    }, error =>{
      console.log(error);
    });

  }
}
