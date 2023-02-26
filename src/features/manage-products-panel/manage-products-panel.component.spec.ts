import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductsPanelComponent } from './manage-products-panel.component';

describe('ManageProductsPanelComponent', () => {
  let component: ManageProductsPanelComponent;
  let fixture: ComponentFixture<ManageProductsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProductsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
