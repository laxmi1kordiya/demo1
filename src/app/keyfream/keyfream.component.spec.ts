import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyfreamComponent } from './keyfream.component';

describe('KeyfreamComponent', () => {
  let component: KeyfreamComponent;
  let fixture: ComponentFixture<KeyfreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyfreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyfreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
