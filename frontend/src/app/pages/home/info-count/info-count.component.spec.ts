import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCountComponent } from './info-count.component';

describe('InfoCountComponent', () => {
  let component: InfoCountComponent;
  let fixture: ComponentFixture<InfoCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
