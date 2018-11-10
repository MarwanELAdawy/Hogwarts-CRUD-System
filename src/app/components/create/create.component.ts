import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Student';
  angForm: FormGroup;
  constructor(private studentsservice: StudentsService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      id: ['', Validators.required ],
      name: ['', Validators.required ],
      phone: ['', Validators.required ],
      URL: ['', Validators.required ],
      degree: ['', Validators.required ],
      committee: ['', Validators.required ]
   });
  }
  addStudent(id, name, phone, URL, degree, committee) {
    this.studentsservice.addStudent(id, name, phone, URL, degree, committee);
}
  ngOnInit() {
  }
}
