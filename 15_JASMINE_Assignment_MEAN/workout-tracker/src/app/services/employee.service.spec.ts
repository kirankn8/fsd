import { TestBed, inject } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;
  const employee0: Employee = {
    name: 'DummyName1',
    age: 50,
    email: 'dummyname1@dymmyemail.com',
  };
  const employee1: Employee = {
    name: 'DummyName2',
    age: 25,
    email: 'dummyname2@dymmyemail.com',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService]
    });
    employeeService = TestBed.get(EmployeeService);
  });

  it('should be created', () => {
    expect(employeeService).toBeTruthy();
  });

  it('Initial value of LocalStorage', () => {
    employeeService.employees = null;
    employeeService.setEmployeesToLS();
    expect(employeeService.getEmployeesFromLS()).toBe(null);
  });

  it('Set value of LocalStorage', () => {
    employeeService.setEmployeesToLS();
    expect(employeeService.getEmployeesFromLS().length).toBe(0);
  });

  it('Add values to LocalStorage', () => {
    employeeService.addEmployee(employee0);
    employeeService.addEmployee(employee1);
    employeeService.setEmployeesToLS();
    expect(employeeService.getEmployeesFromLS().length).toBe(2);
  });

  it('Update value0 in LocalStorage', () => {
    employee0.name = 'ModifiedDummyName1';
    employeeService.updateEmployee(0, employee0);
    employeeService.setEmployeesToLS();
    expect(employeeService.getEmployeesFromLS()[0].name).toBe('ModifiedDummyName1');
  });

  it('Update value1 in LocalStorage', () => {
    employee1.name = 'ModifiedDummyName2';
    employee1.age = 24;
    employeeService.updateEmployee(1, employee1);
    employeeService.setEmployeesToLS();
    expect(employeeService.getEmployeesFromLS()[1].name).toBe('ModifiedDummyName2');
    expect(employeeService.getEmployeesFromLS()[1].age).toBe(24);
  });

});
