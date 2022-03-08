import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './../catalogue.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
   smartphones=[];
  constructor(private catalogueService:CatalogueService) { }

  ngOnInit(): void {
    this.getSmartphones();
  }
  
  private getSmartphones(){
    this.catalogueService.getRessource("/categories/3/products")
    .subscribe(data =>{
     
      this.smartphones = (data as any)['_embedded']['products'];
    }, error =>{
      console.log(error);
    });
  }

}
