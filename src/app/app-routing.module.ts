import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';
import { Routes, RouterModule } from '@angular/router'; 
import { TuffCollectionComponent } from './product-management/tuff-collection/tuff-collection.component';
import { TuffCollectionViewComponent } from './product-management/tuff-collection/tuff-collection-view/tuff-collection-view.component';
import { MaterialComponent } from './product-management/tuff-collection/tuff-collection-view/material/material.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'product', component: ProductManagementComponent }, // Define the route for the product component
  { path: 'tuffCollection', component: TuffCollectionComponent },
  { path: 'tuffCollection/:name', component: TuffCollectionViewComponent },
  { path: 'tuffCollection/material', component: MaterialComponent },
  { path: '', component: ProductListComponent },
];


@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
