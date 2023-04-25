import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailEquipeComponent } from './update-detail-equipe.component';

describe('UpdateDetailEquipeComponent', () => {
  let component: UpdateDetailEquipeComponent;
  let fixture: ComponentFixture<UpdateDetailEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetailEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetailEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
