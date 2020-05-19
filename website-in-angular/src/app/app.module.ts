import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';
import { SocialMediaLoadingIconComponent } from './social-media-loading-icon/social-media-loading-icon.component';
import { FlickrComponent } from './flickr/flickr.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { FacebookComponent } from './facebook/facebook.component';
import { TwitterComponent } from './twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubComponent,
    SocialMediaLoadingIconComponent,
    FlickrComponent,
    LinkedinComponent,
    FacebookComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
