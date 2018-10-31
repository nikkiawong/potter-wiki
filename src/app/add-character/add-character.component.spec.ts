import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharacterComponent } from './add-character.component';

describe('AddCharacterComponent', () => {
  let component: AddCharacterComponent;
  let fixture: ComponentFixture<AddCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
