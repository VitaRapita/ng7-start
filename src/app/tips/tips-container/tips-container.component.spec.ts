import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsContainerComponent } from './tips-container.component';

describe('TipsContainerComponent', () => {
  let component: TipsContainerComponent;
  let fixture: ComponentFixture<TipsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TipsContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
