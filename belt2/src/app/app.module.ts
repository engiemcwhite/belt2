import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BeltService } from './belt.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RedirectComponent } from './redirect/redirect.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    UpdateComponent,
    CreateComponent,
    DetailsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BeltService],
  bootstrap: [AppComponent]
})
export class AppModule { }
