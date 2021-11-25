import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReateRoomComponent } from './reate-room.component';

describe('ReateRoomComponent', () => {
  let component: ReateRoomComponent;
  let fixture: ComponentFixture<ReateRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReateRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
