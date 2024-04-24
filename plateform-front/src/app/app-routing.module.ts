import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from "./board/board.component";
import {AuthGuard} from "./_helpers/auth.guard";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'board', component: BoardComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'restaurant-list', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
