import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComputersComponent } from './computers/computers.component';
import { PrintersComponent } from './printers/printers.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';


const routes: Routes = [  { path: '', component: HomeComponent},
                          { path: 'computers', component: ComputersComponent},
                          { path: 'printers', component: PrintersComponent},
                          { path: 'smartphones', component: SmartphonesComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
