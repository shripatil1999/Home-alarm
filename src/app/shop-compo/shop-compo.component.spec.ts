import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCompoComponent } from './shop-compo.component';

describe('ShopCompoComponent', () => {
  let component: ShopCompoComponent;
  let fixture: ComponentFixture<ShopCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
