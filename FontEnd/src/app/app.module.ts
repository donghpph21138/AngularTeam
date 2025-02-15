import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { ProductComponent } from './pages/client/product/product.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CategoriesComponent } from './pages/client/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    WebsiteLayoutComponent,
    HomePageComponent,
    ProductComponent,
    CategoryAddComponent,
    CategoryListComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
