import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOtherSkillsComponent } from './about-other-skills.component';

describe('AboutOtherSkillsComponent', () => {
  let component: AboutOtherSkillsComponent;
  let fixture: ComponentFixture<AboutOtherSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOtherSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOtherSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
