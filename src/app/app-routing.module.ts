import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NopageComponent } from './nopage/nopage.component';
import { RoutepageComponent } from './routepage/routepage.component';

const routes: Routes = [
  {path:'root', component:AppComponent},
  {path:'child1',component:Child1Component},
  {path:'child2',component:Child2Component},
  {path:'nopage',component:NopageComponent},
  {path:'routepage',component:RoutepageComponent},
  {path:'**',component:NopageComponent},
  {path:'',redirectTo:'/root',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
