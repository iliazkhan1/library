import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlibrarycomponentComponent } from './newlibrarycomponent.component';

describe('NewlibrarycomponentComponent', () => {
  let component: NewlibrarycomponentComponent;
  let fixture: ComponentFixture<NewlibrarycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewlibrarycomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlibrarycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
