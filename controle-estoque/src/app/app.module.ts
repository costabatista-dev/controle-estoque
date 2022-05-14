import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuEntryComponent } from './menu-entry/menu-entry.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuEntryComponent,
    TitleBarComponent,
    FooterComponent,
    ProductsPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
