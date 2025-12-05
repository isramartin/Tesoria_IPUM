import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Senores } from './senores';

describe('Senores', () => {
  let component: Senores;
  let fixture: ComponentFixture<Senores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Senores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Senores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
