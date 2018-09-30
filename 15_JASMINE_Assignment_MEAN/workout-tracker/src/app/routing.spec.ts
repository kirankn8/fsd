import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const routes: Routes = [
    { path: 'employees/new', component: AddEmployeeComponent, pathMatch: 'full' },
    { path: 'employees/:id', component: UpdateEmployeeComponent },
    { path: 'employees', component: ListEmployeeComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

describe('Routing', () => {
    let router: Router;
    let location: Location;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                NavbarComponent,
                AddEmployeeComponent,
                UpdateEmployeeComponent,
                ListEmployeeComponent,
            ],
            imports: [RouterTestingModule.withRoutes(routes)],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        router.initialNavigation();
    }));

    it('navigate to \"\" redirects to \"/employees\"', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/employees');
    }));

    it('navigate to \"/employees\"', fakeAsync(() => {
        router.navigate(['employees']);
        tick();
        expect(location.path()).toBe('/employees');
    }));

    it('navigate to \"/employees/new\"', fakeAsync(() => {
        router.navigate(['employees/new']);
        tick();
        expect(location.path()).toBe('/employees/new');
    }));

});
