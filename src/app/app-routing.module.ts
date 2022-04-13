import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartAngularComponent } from './start-angular/start-angular.component';

const routes: Routes = [
  {path:'' , redirectTo:'start' , pathMatch:'full'} ,
  { path:'start' , component:StartAngularComponent} ,
  {path:'portfolio' , component:PortfolioComponent} ,
  {path:'about' , component:AboutComponent} ,
  {path:'contact' , component:ContactComponent} ,
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
