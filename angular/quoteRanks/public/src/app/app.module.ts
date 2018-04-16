import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EditComponent } from './edit/edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    AuthorComponent,
    EditComponent,
    QuotesComponent,
    AddQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
