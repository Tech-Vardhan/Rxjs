import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseAwaitComponent } from './promise-await.component';

describe('PromiseAwaitComponent', () => {
  let component: PromiseAwaitComponent;
  let fixture: ComponentFixture<PromiseAwaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseAwaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
