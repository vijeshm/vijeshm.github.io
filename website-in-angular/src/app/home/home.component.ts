import { Component, OnInit } from '@angular/core';
import { ISocialMediaElement, ISection } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imagePath = '../../assets/images/mylogo.png';
  public name = 'Vijesh Mohan';
  public tags: string[] = ['Engineer', 'Photographer', 'Researcher', 'A restless soul'];
  public socialMediaLinks: ISocialMediaElement[] = [{
    socialMediaLink: 'http://github.com/vijeshm',
    iconPath: '../../assets/images/social-media/github.png'
  }, {
    socialMediaLink: 'http://flickr.com/vijeshm',
    iconPath: '../../assets/images/social-media/flickr.png'
  }, {
    socialMediaLink: 'http://linkedin.com/pub/vijesh-m/48/683/780',
    iconPath: '../../assets/images/social-media/linkedin.png'
  }, {
    socialMediaLink: 'http://facebook.com/mv.vijesh',
    iconPath: '../../assets/images/social-media/facebook.png'
  }, {
    socialMediaLink: 'http://twitter.com/edbidangi',
    iconPath: '../../assets/images/social-media/twitter.png'
  }];
  public sections: ISection[] = [{
    sectionIconPath: '../../assets/images/section-cards/photography.jpg',
    label: 'Photography',
    stateUrl: '/photography'
  }];

  constructor() { }

  ngOnInit(): void {
    const windowAsAny = window as any;
    if (windowAsAny.twttr) {
      windowAsAny.twttr.widgets.load();
    }
  }

}
