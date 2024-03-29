import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {LoginComponent} from './login/login.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule, Routes} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import {JwtInterceptor} from '../utils/jwt.interceptor';
import {MatStepperModule} from '@angular/material/stepper';
import {registerLocaleData} from '@angular/common';
import localeRS from '@angular/common/locales/sr-Latn';
import {MatTabsModule} from '@angular/material/tabs';
import { CeoProductAdministrationComponent } from './ceo-product-administration/ceo-product-administration.component';
import { CeoEmployeeAdministrationComponent } from './ceo-employee-administration/ceo-employee-administration.component';
import { CeoOrdersAdministrationComponent } from './ceo-orders-administration/ceo-orders-administration.component';
import { BuyerProductOverviewComponent } from './buyer-product-overview/buyer-product-overview.component';
import { BuyerOrdersOverviewComponent } from './buyer-orders-overview/buyer-orders-overview.component';
import { CeoEmployeeCreateDialogComponent } from './ceo-employee-administration/ceo-employee-create-dialog/ceo-employee-create-dialog.component';
import { CeoEmployeeViewComponent } from './ceo-employee-administration/ceo-employee-view/ceo-employee-view.component';
import { CeoProductCreateComponent } from './ceo-product-administration/ceo-product-create/ceo-product-create.component';
import { CeoOrdersProductsDialogComponent } from './ceo-orders-administration/ceo-orders-products-dialog/ceo-orders-products-dialog.component';
import { BuyerCartComponentComponent } from './buyer-product-overview/buyer-cart-component/buyer-cart-component.component';
import {MatTableModule} from '@angular/material/table';
import {AuthGuard} from '../utils/auth.guard';
import { CeoDocumentAdministrationDialogComponent } from './ceo-employee-administration/ceo-document-administration-dialog-component/ceo-document-administration-dialog.component';


const appRoutes: Routes = [
  {path: 'product-overview', component: CeoProductAdministrationComponent, canActivate: [AuthGuard]},
  {path: 'employee-overview', component: CeoEmployeeAdministrationComponent, canActivate: [AuthGuard]},
  {path: 'order-overview', component: CeoOrdersAdministrationComponent, canActivate: [AuthGuard]},
  {path: 'app-component', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'products-catalog', component: BuyerProductOverviewComponent, canActivate: [AuthGuard]},
  {path: 'buyer-orders', component: BuyerOrdersOverviewComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
];

registerLocaleData(localeRS);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CeoProductAdministrationComponent,
    CeoEmployeeAdministrationComponent,
    CeoOrdersAdministrationComponent,
    BuyerProductOverviewComponent,
    BuyerOrdersOverviewComponent,
    CeoEmployeeCreateDialogComponent,
    CeoEmployeeViewComponent,
    CeoProductCreateComponent,
    CeoOrdersProductsDialogComponent,
    BuyerCartComponentComponent,
    CeoDocumentAdministrationDialogComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes),
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
  ], entryComponents: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
