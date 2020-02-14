import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sprintdetail',
  templateUrl: './sprintdetail.component.html',
  styleUrls: ['./sprintdetail.component.scss']
})
export class SprintdetailComponent implements OnInit {

  addressForm = this.fb.group({
    sprintName: null,
    firstName: null,
    lastName: null,
    address: null,
    address2: null,
    city: null, 
    state: null
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
