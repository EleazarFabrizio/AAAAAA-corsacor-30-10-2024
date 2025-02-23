import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEmpresaComponent } from './buscar-empresa.component';

describe('BuscarEmpresaComponent', () => {
  let component: BuscarEmpresaComponent;
  let fixture: ComponentFixture<BuscarEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
