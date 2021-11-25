import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Test, TestService} from "./services/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatApp';
  testValue: Observable<Test> = this.service.getTest() ;

  constructor(private service: TestService) {
  }
}
