import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './../catalogue.service';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.css']
})
export class PrintersComponent implements OnInit {

  printers =[];
  constructor(private catalogueService:CatalogueService) { }

  ngOnInit(): void {
    this.getPrinters();
  }
  private getPrinters(){
    this.catalogueService.getRessource("/categories/2/products")
    .subscribe(data =>{
      this.printers = (data as any)['_embedded']['products'];
    }, error =>{
      console.log(error);
    });
  }
}
