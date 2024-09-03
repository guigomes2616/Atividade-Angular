import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoProjetoComponent } from './segundo-projeto.component';

describe('SegundoProjetoComponent', () => {
  let component: SegundoProjetoComponent;
  let fixture: ComponentFixture<SegundoProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundoProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
