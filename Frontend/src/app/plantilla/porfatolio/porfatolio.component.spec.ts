import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfatolioComponent } from './porfatolio.component';

describe('PorfatolioComponent', () => {
  let component: PorfatolioComponent;
  let fixture: ComponentFixture<PorfatolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfatolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfatolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
