import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetalheComponent } from './user-detalhe.component';

describe('UserDetalheComponent', () => {
  let component: UserDetalheComponent;
  let fixture: ComponentFixture<UserDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
