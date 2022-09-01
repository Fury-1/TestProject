import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlterComponent } from './product-alter.component';

describe('ProductAlterComponent', () => {
  let component: ProductAlterComponent;
  let fixture: ComponentFixture<ProductAlterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
