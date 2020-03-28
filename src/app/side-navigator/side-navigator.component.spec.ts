
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavigatorComponent } from './side-navigator.component';

describe('SideNavigatorComponent', () => {
  let component: SideNavigatorComponent;
  let fixture: ComponentFixture<SideNavigatorComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [SideNavigatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
