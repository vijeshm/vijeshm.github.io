import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imagePath = '../../assets/images/mylogo.png';
  public name = 'Vijesh Mohan';
  constructor() { }

  ngOnInit(): void {
  }

}
