import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesInformes } from './reportes-informes';

describe('ReportesInformes', () => {
  let component: ReportesInformes;
  let fixture: ComponentFixture<ReportesInformes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesInformes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesInformes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
