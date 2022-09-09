import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetabotsComponent } from './metabots.component';

describe('MetabotsComponent', () => {
  let component: MetabotsComponent;
  let fixture: ComponentFixture<MetabotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetabotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetabotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
