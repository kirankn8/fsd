import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeComponent } from './list-employee.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListEmployeeComponent', () => {
  let component: ListEmployeeComponent;
  let fixture: ComponentFixture<ListEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmployeeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain \"Employees\" heading', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#emp-heading').textContent).toContain('Employees: ');
  }));

  // it('initially show no employees added message', async(() => {
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#no-employees-msg').textContent)
  //     .toContain('No Employees to display. Go ahead and add some employees !!!');
  // }));

});
