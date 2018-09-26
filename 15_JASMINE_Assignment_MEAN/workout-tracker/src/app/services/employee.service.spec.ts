import { TestBed, inject } from '@angular/core/testing';

import { EmployeeService } from './employee.service';



describe('EmployeeService', () => {
  let employeeService: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService]
    });
    employeeService = TestBed.get(EmployeeService);
  });

  it('should be created', () => {
    expect(employeeService).toBeTruthy();
  });

  it('Initial value of LocalStorage with Employee key', () => {
    expect(employeeService.getEmployeesFromLS()).toBe(null);
  });

  it('Set value of LocalStorage with Employee key', () => {
    employeeService.setEmployeesToLS();
    expect(employeeService.getEmployeesFromLS()).toBe([]);
  });

});
