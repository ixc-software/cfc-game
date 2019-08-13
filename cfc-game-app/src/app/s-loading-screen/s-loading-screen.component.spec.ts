import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SLoadingScreenComponent } from './s-loading-screen.component';

describe('SLoadingScreenComponent', () => {
  let component: SLoadingScreenComponent;
  let fixture: ComponentFixture<SLoadingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SLoadingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SLoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
