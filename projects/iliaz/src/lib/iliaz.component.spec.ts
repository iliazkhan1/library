import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IliazComponent } from './iliaz.component';

describe('IliazComponent', () => {
  let component: IliazComponent;
  let fixture: ComponentFixture<IliazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IliazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IliazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
