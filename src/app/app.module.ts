import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { NgxPopper } from 'angular-popper';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from "../app/utils/navbar/navbar.component";
import { WavesModule, ButtonsModule, IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md'
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DataTablesModule } from 'angular-datatables';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfilComponent } from './profil/profil.component';
import { UserServiceService } from './services/user-service.service';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TestComponent } from './test/test.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudUserComponent } from './supdash/crud-user/crud-user.component';
import { AuthService } from './services/auth.service';
import { AdminGuard } from './admin.guard';
import { SupGuard } from './sup.guard';
import { ClientGuard } from './client.guard';
import { LivreurGuard } from './livreur.guard';
import { NgxSpinnerModule } from "ngx-spinner";
// import { AngularFileViewerModule } from '@taldor-ltd/angular-file-viewer';
import { CmdeComponent } from './admindash/cmde/cmde.component';
import { CrudStockComponent } from './admindash/crud-stock/crud-stock.component';

import { CrudSScatComponent } from './supdash/crud-categorie/crud-sscat/crud-sscat.component';
import { CrudCategorieComponent } from './supdash/crud-categorie/crud-categorie.component';
import { LivreurdashComponent } from './livreurdash/livreurdash.component';
import { UploadFilesComponent } from './livreurdash/upload-files/upload-files.component';
import { CrudCmdeComponent } from './livreurdash/crud-cmde/crud-cmde.component';
import { SupdashComponent } from './supdash/supdash.component';
import { CrudDocComponent } from './supdash/crud-doc/crud-doc.component';
import { LivProfilComponent } from './livreurdash/liv-profil/liv-profil.component';
import { DocValidComponent } from './supdash/doc-valid/doc-valid.component';
import { AdminProfilComponent } from './admindash/admin-profil/admin-profil.component';
import { NotifLivComponent } from './admindash/notif-liv/notif-liv.component';
import { EditComponent } from './admindash/admin-profil/edit/edit.component';

const Routes: Routes = [

  { path: '', component: CatalogComponent },
  { path: 'test', component: TestComponent },
  {
    path: 'sup', component: SupdashComponent,canActivate:[SupGuard],
    children: [
      { path: 'users', component: CrudUserComponent },
      {path: 'categorie', component: CrudCategorieComponent,
        children: [{ path: 'ss_categorie', component: CrudSScatComponent}]
      },

      { path: 'doc', component: CrudDocComponent }
      ,

      { path: 'valid', component: DocValidComponent }
    ]
  },

  {
    path: 'admin', component: AdmindashComponent, canActivate:[AdminGuard],
    children: [
 
      { path: 'stock', component: CrudStockComponent },
      { path: 'cmde', component: CmdeComponent } ,
      { path: 'notif', component: NotifLivComponent } ,
      { path: 'profil', component: AdminProfilComponent},
      { path: 'edit', component: EditComponent }
    
]
},
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  {path: 'profil', component: ProfilComponent , canActivate:[ClientGuard]},

  {
    path: 'liv', component: LivreurdashComponent, canActivate:[LivreurGuard] ,
    children: [
      { path: 'upload', component: UploadFilesComponent },
      { path: 'cmd', component: CrudCmdeComponent },
      { path: 'profil', component: LivProfilComponent }]
  },



  { path: 'forgotpwd/:id', component: ForgotPwdComponent, canActivate:[ClientGuard]},
  { path: 'changepwd', component: ChangepwdComponent,canActivate:[ClientGuard] },




]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CartComponent,
    ResetPasswordComponent,
    ProfilComponent,
    ForgotPwdComponent,
    RegisterComponent,
    ChangepwdComponent,
    CatalogComponent,
    TestComponent,
    AdmindashComponent,
    CrudUserComponent,
    CrudSScatComponent,
    CmdeComponent,
    CrudStockComponent,
    CrudCategorieComponent,
    LivreurdashComponent,
    UploadFilesComponent,
    CrudCmdeComponent,
    SupdashComponent,
    CrudDocComponent,
    LivProfilComponent,
    DocValidComponent,
    AdminProfilComponent,
    NotifLivComponent,
    EditComponent




  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    SocialLoginModule,
    DataTablesModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    NgxPopper,
    NgbModule,
    // AngularFileViewerModule,
    MatCardModule,
    FileUploadModule,
    NgxSpinnerModule,
    MDBBootstrapModule.forRoot(),
    NoopAnimationsModule,


  ],
  providers: [UserServiceService,AdminGuard,LivreurGuard,SupGuard,ClientGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '975189348983-n9bq8niid4t71uqq6lppg3g97gurdjak.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1155701404843582')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ], bootstrap: [AppComponent]
})
export class AppModule { }
