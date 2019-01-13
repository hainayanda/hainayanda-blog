import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperiencesComponent } from './about-experiences.component';

describe('AboutExperiencesComponent', () => {
  let component: AboutExperiencesComponent;
  let fixture: ComponentFixture<AboutExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
