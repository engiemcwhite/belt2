import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component'
import { CreateComponent } from './create/create.component'
import { UpdateComponent } from './update/update.component';
import { DetailsComponent} from './details/details.component';
import { RedirectComponent} from './redirect/redirect.component';

const routes: Routes = [
  {path: '', pathMatch:'full',component: RedirectComponent},
  {path: 'products', pathMatch:'full', component: ProductComponent},
  {path: 'products/new', component: CreateComponent},
  {path: 'products/:id', component: DetailsComponent},
  {path: 'products/:id/edit', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
