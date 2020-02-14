import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() 
  signEvent = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  efetuarLogin() {
    this.signEvent.emit();
  }
}
