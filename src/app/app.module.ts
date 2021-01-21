import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { EntidadesComponent } from './components/entidades/entidades.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { DataTablesModule } from 'angular-datatables';
import { SuperfamiliasViewComponent } from './components/superfamilias-view/superfamilias-view.component';
import { FamiliasViewComponent } from './components/familias-view/familias-view.component';
import { ServiciosViewComponent } from './components/servicios-view/servicios-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    EntidadesComponent,
    NavegacionComponent,
    SuperfamiliasViewComponent,
    FamiliasViewComponent,
    ServiciosViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
