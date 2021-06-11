import { Location } from "@angular/common";
import { TestBed, fakeAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppComponent } from "./app.component";
import { routes } from "./app-routing.module";
import { LoginService } from "./shared/services/login.service";
import { HttpClient } from "@angular/common/http";
import { provideMockStore } from "@ngrx/store/testing";

describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        PageNotFoundComponent
      ],
      providers: [
        LoginService,
        HttpClient,
        RouterTestingModule,
        provideMockStore({}),
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
  });

  it('navigate to "" redirects you to /login', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/login");
    });
  }));

  it('navigate to "login" takes you to /login', fakeAsync(() => {
    router.navigate(["/login"]).then(() => {
      expect(location.path()).toBe("/login");
    });
  }));
  it('navigate to "dashboard" takes you to /login incase of not logged in', fakeAsync(() => {
    sessionStorage.clear();
    router.navigate(["/dashboard"]).then(() => {
      expect(location.path()).toBe("/login");
    });
  }));
  it('navigate to "dashboard" takes you to /dashboard incase of logged in', fakeAsync(() => {
    sessionStorage.setItem('token', 'token123');
    router.navigate(["/dashboard"]).then(() => {
      expect(location.path()).toBe("/dashboard");
    });
  }));
  it('navigate to "page-not-found" takes you to /page-not-found as ** router is added', fakeAsync(() => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    router.navigate(["/page-not-found"]).then(() => {
      expect(location.path()).toBe("/page-not-found");
      fixture.detectChanges();
      expect(compiled.querySelector('h1').textContent).toContain('404 Error: Page not found!');
    });
  }));
});