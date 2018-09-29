import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UpdateEmployeeComponent } from './update-employee.component';
import { EmployeeService } from '../services/employee.service';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let employeeService: EmployeeService;
  let locationService: Location;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeeComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [EmployeeService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    employeeService = TestBed.get(EmployeeService);
    locationService = TestBed.get(Location);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have update employee form heading', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#update-emp-heading').textContent).toContain('Update Employee');
  }));

  it('should render update employee form', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#update-emp-form')).toBeTruthy();
    expect(compiled.querySelectorAll('#update-emp-form> label').length).toBe(3);
    expect(compiled.querySelectorAll('#update-emp-form> input').length).toBe(3);
    expect(compiled.querySelectorAll('#update-emp-form > button').length).toBe(2);
    expect(compiled.querySelectorAll('#update-emp-form > button')[0].textContent).toEqual('UPDATE');
    expect(compiled.querySelectorAll('#update-emp-form > button')[1].textContent).toEqual('CANCEL');
  }));
});
