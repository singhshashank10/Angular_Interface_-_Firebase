import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopperComponent } from './topper/topper.component';
import { UserComponent } from './user/user.component';
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'winner', component: WinnerComponent },
  { path: 'topper', component: TopperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
