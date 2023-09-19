import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

import { AppComponent } from './app.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { AppRoutingModule } from './app-routing.module';
import { TuffCollectionComponent } from './product-management/tuff-collection/tuff-collection.component';
import { TuffCollectionViewComponent } from './product-management/tuff-collection/tuff-collection-view/tuff-collection-view.component';
import { StepsModule } from 'primeng/steps';
import { MaterialComponent } from './product-management/tuff-collection/tuff-collection-view/material/material.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DescriptionComponent } from './product-management/tuff-collection/tuff-collection-view/description/description.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SizeComponent } from './product-management/tuff-collection/tuff-collection-view/size/size.component';
import { ConfirmationComponent } from './product-management/tuff-collection/tuff-collection-view/confirmation/confirmation.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    ProductManagementComponent,
    TuffCollectionComponent,
    TuffCollectionViewComponent,
    MaterialComponent,
    ProductListComponent,
    DescriptionComponent,
    SizeComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    DividerModule,
    AppRoutingModule,
    StepsModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
