import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UpdateEmployeeComponent } from './update-employee.component';
import { EmployeeService } from '../services/employee.service';
import { By } from '@angular/platform-browser';

export function newEvent(eventName: string, bubbles = false, cancelable = false) {
  const evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}

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

  it('check update employee form with sample input', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const form = {
      name: compiled.querySelector('input#name') as HTMLInputElement,
      age: compiled.querySelector('input#age') as HTMLInputElement,
      email: compiled.querySelector('input#email') as HTMLInputElement,
    };
    form.name.value = 'Crazy Monkey';
    form.age.value = '62';
    form.email.value = 'crazy@monkey.com';

    form.name.dispatchEvent(newEvent('input'));
    form.age.dispatchEvent(newEvent('input'));
    form.email.dispatchEvent(newEvent('input'));

    fixture.detectChanges();

    expect(form.name.value).toEqual('Crazy Monkey');
    expect(form.age.value).toEqual('62');
    expect(form.email.value).toEqual('crazy@monkey.com');

    expect(component.employee.name).toBe(form.name.value);
    expect(+component.employee.age).toBe(+form.age.value);
    expect(component.employee.email).toBe(form.email.value);
  }));

  it('check update button whether disabled/enabled with various test inputs', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const updateBtn = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;

    const form = {
      name: compiled.querySelector('input#name') as HTMLInputElement,
      age: compiled.querySelector('input#age') as HTMLInputElement,
      email: compiled.querySelector('input#email') as HTMLInputElement,
    };

    // Case 1
    form.name.value = '';
    form.age.value = '';
    form.email.value = '';

    form.name.dispatchEvent(newEvent('input'));
    form.age.dispatchEvent(newEvent('input'));
    form.email.dispatchEvent(newEvent('input'));

    fixture.detectChanges();
    expect(updateBtn.disabled).toBe(true);

    // Case 2
    form.name.value = '';
    form.age.value = '62';
    form.email.value = 'crazy@monkey.com';

    form.name.dispatchEvent(newEvent('input'));
    form.age.dispatchEvent(newEvent('input'));
    form.email.dispatchEvent(newEvent('input'));

    fixture.detectChanges();
    expect(updateBtn.disabled).toBe(true);

    // Case 3
    form.name.value = 'Crazy Monkey';
    form.age.value = '0';
    form.email.value = 'crazy@monkey.com';

    form.name.dispatchEvent(newEvent('input'));
    form.age.dispatchEvent(newEvent('input'));
    form.email.dispatchEvent(newEvent('input'));

    fixture.detectChanges();
    expect(updateBtn.disabled).toBe(true);

    // Case 4
    form.name.value = 'Crazy Monkey';
    form.age.value = '62';
    form.email.value = 'crazsdsdmonksdsdcom';

    form.name.dispatchEvent(newEvent('input'));
    form.age.dispatchEvent(newEvent('input'));
    form.email.dispatchEvent(newEvent('input'));

    fixture.detectChanges();
    expect(updateBtn.disabled).toBe(true);

    // Case 5
    form.name.value = 'Crazy Monkey';
    form.age.value = '62';
    form.email.value = 'crazy@monkey.com';

    form.name.dispatchEvent(newEvent('input'));
    form.age.dispatchEvent(newEvent('input'));
    form.email.dispatchEvent(newEvent('input'));

    fixture.detectChanges();
    expect(updateBtn.disabled).toBe(false);
  }));

  it('check by clicking \"UPDATE\" button', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const updateBtn = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;

    const form = {
      name: compiled.querySelector('input#name') as HTMLInputElement,
      age: compiled.querySelector('input#age') as HTMLInputElement,
      email: compiled.querySelector('input#email') as HTMLInputElement,
    };
    form.name.value = 'Crazy Monkey';
    form.age.value = '62';
    form.email.value = 'crazy@monkey.com';

    form.name.dispatchEvent(newEvent('input'));
    form.age.dispatchEvent(newEvent('input'));
    form.email.dispatchEvent(newEvent('input'));

    updateBtn.click();
    fixture.detectChanges();
  }));
});
