import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NonVerifiedCasesComponent } from './non-verified-cases/non-verified-cases.component';
import { ArraySortPipe } from "./pipes/sort.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NonVerifiedCasesComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    ArraySortPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
