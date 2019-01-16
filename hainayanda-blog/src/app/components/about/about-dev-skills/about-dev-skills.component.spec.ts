import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDevSkillsComponent } from './about-dev-skills.component';

describe('AboutDevSkillsComponent', () => {
  let component: AboutDevSkillsComponent;
  let fixture: ComponentFixture<AboutDevSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDevSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDevSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
