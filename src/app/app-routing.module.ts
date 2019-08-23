import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFeedComponent} from './main-feed/main-feed.component';

const routes: Routes = [
  { path: '', component: MainFeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
