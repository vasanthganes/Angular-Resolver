import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RoutingMOdule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home.component';

import { RouterGuard } from './app.guard';
import { RouterResolver } from './app.resolver';
import { APiService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingMOdule ,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ RouterGuard, RouterResolver,APiService]
})
export class AppModule { }
