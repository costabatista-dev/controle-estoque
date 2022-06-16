import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuEntryComponent } from './components/menu-entry/menu-entry.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsPageComponent } from './pages/product/products-page/products-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DepartmentPageComponent } from './pages/department/department-page/department-page.component';
import { BatchesPageComponent } from './pages/batch/batches-page/batches-page.component';
import { BrandsPageComponent } from './pages/brand/brands-page/brands-page.component';
import { LocationsPageComponent } from './pages/location/locations-page/locations-page.component';
import { StockEntryPageComponent } from './pages/stock/stock-entry-page/stock-entry-page.component';
import { StockOutPageComponent } from './pages/stock/stock-out-page/stock-out-page.component';
import { StockTransferPageComponent } from './pages/stock/stock-transfer-page/stock-transfer-page.component';
import { ProductListPageComponent } from './pages/product/product-list-page/product-list-page.component';
import { StockMovementListPageComponent } from './pages/stock/stock-movement-list-page/stock-movement-list-page.component';
import { StockListPageComponent } from './pages/stock/stock-list-page/stock-list-page.component';
import { DepartmentListPageComponent } from './pages/department/department-list-page/department-list-page.component';
import { LocationListPageComponent } from './pages/location/location-list-page/location-list-page.component';
import { BatchListPageComponent } from './pages/batch/batch-list-page/batch-list-page.component';
import { BrandListPageComponent } from './pages/brand/brand-list-page/brand-list-page.component';
import { CommonPageComponent } from './components/common-page/common-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SimpleFormComponent } from './components/forms/simple-form/simple-form.component';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { QuantityInputComponent } from './components/quantity-input/quantity-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    BrandListPageComponent,
    CommonPageComponent,
    NotFoundPageComponent,
    SimpleFormComponent,
    ProductFormComponent,
    ListItemComponent,
    SearchComponentComponent,
    QuantityInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
