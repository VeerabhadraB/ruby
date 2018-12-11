import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShopinglistComponent } from './shoping/shopinglist/shopinglist.component';
import { AuthgurdService } from './auth/authgurd.service';

const routes:Routes=[
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'recipelist',component: RecipeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'shoping-list', component: ShopinglistComponent ,canActivate:[AuthgurdService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
export const allRoutes = [LoginComponent,RecipeComponent];
