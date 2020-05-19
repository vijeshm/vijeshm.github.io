import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';
import { FlickrComponent } from './flickr/flickr.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { FacebookComponent } from './facebook/facebook.component';
import { TwitterComponent } from './twitter/twitter.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'github',
  component: GithubComponent
}, {
  path: 'flickr',
  component: FlickrComponent
}, {
  path: 'linkedin',
  component: LinkedinComponent
}, {
  path: 'facebook',
  component: FacebookComponent
}, {
  path: 'twitter',
  component: TwitterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
