
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoTableComponent } from './endereco-table.component';

describe('EnderecoTableComponent', () => {
  let component: EnderecoTableComponent;
  let fixture: ComponentFixture<EnderecoTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
