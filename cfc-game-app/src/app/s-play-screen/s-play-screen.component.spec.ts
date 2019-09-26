import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPlayScreenComponent } from './s-play-screen.component';

describe('SPlayScreenComponent', () => {
  let component: SPlayScreenComponent;
  let fixture: ComponentFixture<SPlayScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SPlayScreenComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPlayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
