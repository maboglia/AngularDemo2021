import { ToDoComponent } from './to-do/to-do.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { ContentBarComponent } from './content-bar/content-bar.component';
import { HomeComponent } from './home/home.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { MagazzinoService } from './magazzino.service';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopBarComponent,
    FooterBarComponent,
    ContentBarComponent,
    HomeComponent,
    AppComponent,
    MagazzinoComponent,
    TestComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [MagazzinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
