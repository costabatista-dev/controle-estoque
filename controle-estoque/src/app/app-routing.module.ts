import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchListPageComponent } from './pages/batch/batch-list-page/batch-list-page.component';
import { BatchesPageComponent } from './pages/batch/batches-page/batches-page.component';
import { BrandListPageComponent } from './pages/brand/brand-list-page/brand-list-page.component';
import { BrandsPageComponent } from './pages/brand/brands-page/brands-page.component';
import { DepartmentListPageComponent } from './pages/department/department-list-page/department-list-page.component';
import { DepartmentPageComponent } from './pages/department/department-page/department-page.component';
import { LocationListPageComponent } from './pages/location/location-list-page/location-list-page.component';
import { LocationsPageComponent } from './pages/location/locations-page/locations-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductListPageComponent } from './pages/product/product-list-page/product-list-page.component';
import { ProductsPageComponent } from './pages/product/products-page/products-page.component';
import { StockEntryPageComponent } from './pages/stock/stock-entry-page/stock-entry-page.component';
import { StockListPageComponent } from './pages/stock/stock-list-page/stock-list-page.component';
import { StockMovementListPageComponent } from './pages/stock/stock-movement-list-page/stock-movement-list-page.component';
import { StockOutPageComponent } from './pages/stock/stock-out-page/stock-out-page.component';
import { StockTransferPageComponent } from './pages/stock/stock-transfer-page/stock-transfer-page.component';

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
