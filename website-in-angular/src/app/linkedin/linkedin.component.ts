import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'http://linkedin.com/pub/vijesh-m/48/683/780';
  }

}
