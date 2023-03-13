import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelitemComponent } from './delitem.component';

describe('DelitemComponent', () => {
  let component: DelitemComponent;
  let fixture: ComponentFixture<DelitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
