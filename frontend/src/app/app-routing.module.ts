import { AccountCreateComponent } from './components/account/account-create/account-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AccountCrudComponent } from './views/account-crud/account-crud.component';


const routes: Routes = [{
  path:"",
  component:HomeComponent
  
},
{
  path:"account",
  component:AccountCrudComponent
},
{
  path:"account/create",
  component: AccountCreateComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
