import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './../catalogue.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
  computers=[];
  constructor(private catalogueService:CatalogueService) { }

  ngOnInit(): void {
    this.getComputers();
  }
  private getComputers(){
    this.catalogueService.getRessource("/categories/1/products")
    .subscribe(data =>{
      this.computers = (data as any)['_embedded']['products'];
    }, error =>{
      console.log(error);
    });
  }
}
