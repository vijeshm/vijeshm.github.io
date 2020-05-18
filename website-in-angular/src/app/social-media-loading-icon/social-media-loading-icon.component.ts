import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-loading-icon',
  templateUrl: './social-media-loading-icon.component.html',
  styleUrls: ['./social-media-loading-icon.component.scss']
})
export class SocialMediaLoadingIconComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('social-media-name') socialMediaName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
