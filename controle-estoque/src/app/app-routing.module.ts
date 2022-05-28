import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchListPageComponent } from './batch-list-page/batch-list-page.component';
import { BatchesPageComponent } from './batches-page/batches-page.component';
import { BrandListPageComponent } from './brand-list-page/brand-list-page.component';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { DepartmentListPageComponent } from './department-list-page/department-list-page.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { LocationListPageComponent } from './location-list-page/location-list-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { StockEntryPageComponent } from './stock-entry-page/stock-entry-page.component';
import { StockListPageComponent } from './stock-list-page/stock-list-page.component';
import { StockMovementListPageComponent } from './stock-movement-list-page/stock-movement-list-page.component';
import { StockOutPageComponent } from './stock-out-page/stock-out-page.component';
import { StockTransferPageComponent } from './stock-transfer-page/stock-transfer-page.component';

const routes: Routes = [
  { path: 'products/:id', component: ProductsPageComponent},
  { path: 'products', component: ProductsPageComponent},
  { path: 'departments/:id', component: DepartmentPageComponent},
  { path: 'departments', component: DepartmentPageComponent},
  { path: 'batches/:id', component: BatchesPageComponent},
  { path: 'batches', component: BatchesPageComponent},
  { path: 'brands/:id', component: BrandsPageComponent},
  { path: 'brands', component: BrandsPageComponent},
  { path: 'locations/:id', component: LocationsPageComponent},
  { path: 'locations', component: LocationsPageComponent},
  { path: 'stock-entry/:id', component: StockEntryPageComponent},
  { path: 'stock-entry', component: StockEntryPageComponent},
  { path: 'stock-out/:id', component: StockOutPageComponent},
  { path: 'stock-out', component: StockOutPageComponent},
  { path: 'stock-transger/:id', component: StockTransferPageComponent},
  { path: 'stock-transfer', component: StockTransferPageComponent},
  { path: 'product-list', component: ProductListPageComponent},
  { path: 'mov-list', component: StockMovementListPageComponent},
  { path: 'stock-list', component: StockListPageComponent},
  { path: 'department-list', component: DepartmentListPageComponent},
  { path: 'location-list', component: LocationListPageComponent},
  { path: 'batch-list', component: BatchListPageComponent},
  { path: 'brand-list', component: BrandListPageComponent},
  { path: '', component: MainPageComponent},
  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
