import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule}  from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, allRoutes } from './app-routing.module';
import { ShopingComponent } from './shoping/shoping.component';
import { ShopinglistComponent } from './shoping/shopinglist/shopinglist.component';
import { ShopinglisteditComponent } from './shoping/shopinglistedit/shopinglistedit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { RecipedetailsComponent } from './recipe/recipedetails/recipedetails.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipe/recipelist/recipe-item/recipe-item.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { HoverHighliterDirective } from './helpers/hover-highliter.directive';
import { AuthserviceService } from './auth/authservice.service';
import { AuthgurdService } from './auth/authgurd.service';
import { ColerpickerDirective } from './shared/colerpicker.directive';
import { ShortPipe } from './shared/short.pipe';

@NgModule({
  declarations: [
    AppComponent,
     allRoutes,
     ShopingComponent,
     ShopinglistComponent,
     ShopinglisteditComponent,
     RecipeComponent,
     RecipelistComponent,
     RecipedetailsComponent,
     HeaderComponent,
     RecipeItemComponent,
     CockpitComponent,
     ServerElementComponent,
     HoverHighliterDirective,
     ColerpickerDirective,
     ShortPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [AuthserviceService,AuthgurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
