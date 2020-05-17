import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'github',
  component: GithubComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
