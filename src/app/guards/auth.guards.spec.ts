import {AuthGuards} from "./auth.guards";
import {TestBed} from "@angular/core/testing";

describe('AuthGuards',  () => {
  let guard: AuthGuards;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuards);
  });

  it("Được tạo mới", () => {
    expect(guard).toBeTruthy();
  });
});
