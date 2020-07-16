import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoptableComponent } from './shoptable.component';

describe('ShoptableComponent', () => {
  let component: ShoptableComponent;
  let fixture: ComponentFixture<ShoptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
