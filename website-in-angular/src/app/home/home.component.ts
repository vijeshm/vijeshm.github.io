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
    description: '"You don\'t take a photograph, you make it." - Ansel Adams',
    stateUrl: '/photography'
  }, {
    sectionIconPath: '../../assets/images/section-cards/projects.png',
    label: 'Projects',
    description: '"If you optimize everything, you will always be unhappy." - Donald Knuth',
    stateUrl: '/projects'
  }, {
    sectionIconPath: '../../assets/images/section-cards/fyp.png',
    label: 'Research',
    description: '"If we knew what it was we were doing, it would not be called research, would it?" - Albert Einstein',
    stateUrl: '/research'
  }, {
    sectionIconPath: '../../assets/images/section-cards/blog.jpg',
    label: 'Blog',
    description: '"If we knew what it was we were doing, it would not be called research, would it?" - Albert Einstein',
    stateUrl: '/blog'
  }];

  constructor() { }

  ngOnInit(): void {
    const windowAsAny = window as any;
    if (windowAsAny.twttr) {
      windowAsAny.twttr.widgets.load();
    }
  }

}
