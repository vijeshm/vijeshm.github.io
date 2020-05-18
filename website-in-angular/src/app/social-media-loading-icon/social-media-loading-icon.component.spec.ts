import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaLoadingIconComponent } from './social-media-loading-icon.component';

describe('SocialMediaLoadingIconComponent', () => {
  let component: SocialMediaLoadingIconComponent;
  let fixture: ComponentFixture<SocialMediaLoadingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaLoadingIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaLoadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
