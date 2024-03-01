import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhetherComponent } from './whether.component';

describe('WhetherComponent', () => {
  let component: WhetherComponent;
  let fixture: ComponentFixture<WhetherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhetherComponent]
    });
    fixture = TestBed.createComponent(WhetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
