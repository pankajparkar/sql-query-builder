import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryEditComponent } from './query-edit.component';

describe('QueryEditComponent', () => {
  let component: QueryEditComponent;
  let fixture: ComponentFixture<QueryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ QueryEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
