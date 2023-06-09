import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetitemsComponent } from './getitems.component';

describe('GetitemsComponent', () => {
  let component: GetitemsComponent;
  let fixture: ComponentFixture<GetitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
