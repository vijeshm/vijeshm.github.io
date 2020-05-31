import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss']
})
export class SectionCardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('section-icon-path') sectionIconPath: string;
  @Input() label: string;
  @Input() state: string;
  @Input() description: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToState() {
    this.router.navigate([this.state]);
  }
}
