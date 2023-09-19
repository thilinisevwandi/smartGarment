import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuffCollectionComponent } from './tuff-collection.component';

describe('TuffCollectionComponent', () => {
  let component: TuffCollectionComponent;
  let fixture: ComponentFixture<TuffCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuffCollectionComponent]
    });
    fixture = TestBed.createComponent(TuffCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
