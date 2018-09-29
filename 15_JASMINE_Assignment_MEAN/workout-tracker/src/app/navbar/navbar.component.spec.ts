import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Brand', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#workouttracker-brand').textContent).toContain('Workout Tracker');
  }));

  it('list all Employees Link', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#list-employees').textContent).toContain('Employees');
  }));

  it('add Employees link', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#add-employees').textContent).toContain('Add Employees');
  }));

  it('check all navbar link', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const routerLinks = compiled.querySelectorAll('a');
    expect(routerLinks.length).toBe(3, 'should have 3 routerLinks');
    expect(routerLinks[0].attributes.routerlink.value).toBe('/');
    expect(routerLinks[1].attributes.routerlink.value).toBe('/employees');
    expect(routerLinks[2].attributes.routerlink.value).toBe('/employees/new');
  }));

});
