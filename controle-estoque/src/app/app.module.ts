import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuEntryComponent } from './menu-entry/menu-entry.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { BatchesPageComponent } from './batches-page/batches-page.component';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { StockEntryPageComponent } from './stock-entry-page/stock-entry-page.component';
import { StockOutPageComponent } from './stock-out-page/stock-out-page.component';
import { StockTransferPageComponent } from './stock-transfer-page/stock-transfer-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { StockMovementListPageComponent } from './stock-movement-list-page/stock-movement-list-page.component';
import { StockListPageComponent } from './stock-list-page/stock-list-page.component';
import { DepartmentListPageComponent } from './department-list-page/department-list-page.component';
import { LocationListPageComponent } from './location-list-page/location-list-page.component';
import { BatchListPageComponent } from './batch-list-page/batch-list-page.component';
import { BrandListPageComponent } from './brand-list-page/brand-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuEntryComponent,
    TitleBarComponent,
    FooterComponent,
    ProductsPageComponent,
    MainPageComponent,
    DepartmentPageComponent,
    BatchesPageComponent,
    BrandsPageComponent,
    LocationsPageComponent,
    StockEntryPageComponent,
    StockOutPageComponent,
    StockTransferPageComponent,
    ProductListPageComponent,
    StockMovementListPageComponent,
    StockListPageComponent,
    DepartmentListPageComponent,
    LocationListPageComponent,
    BatchListPageComponent,
    BrandListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
