import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchesPageComponent } from './batches-page/batches-page.component';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { StockEntryPageComponent } from './stock-entry-page/stock-entry-page.component';
import { StockOutPageComponent } from './stock-out-page/stock-out-page.component';
import { StockTransferPageComponent } from './stock-transfer-page/stock-transfer-page.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent},
  { path: 'departments', component: DepartmentPageComponent},
  { path: 'batches', component: BatchesPageComponent},
  { path: 'brands', component: BrandsPageComponent},
  { path: 'locations', component: LocationsPageComponent},
  { path: 'stock-entry', component: StockEntryPageComponent},
  { path: 'stock-out', component: StockOutPageComponent},
  { path: 'stock-transfer', component: StockTransferPageComponent},
  { path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
