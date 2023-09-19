import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuffCollectionViewComponent } from './tuff-collection-view.component';

describe('TuffCollectionViewComponent', () => {
  let component: TuffCollectionViewComponent;
  let fixture: ComponentFixture<TuffCollectionViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuffCollectionViewComponent]
    });
    fixture = TestBed.createComponent(TuffCollectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
