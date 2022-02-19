import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './screens/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './screens/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    HomeComponent,
    ButtonComponent,
    ModalComponent,
    InputComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
