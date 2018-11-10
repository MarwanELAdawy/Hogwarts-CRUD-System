import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentsService {

  result: any;
  constructor(private http: HttpClient) {}

  addStudent(id, name, phone, URL, degree, committee) {
    const uri = 'http://localhost:4000/students/add';
    const obj = {
      id: id,
      name: name,
      phone: phone,
      URL: URL,
      degree: degree,
      committee: committee
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getStudents() {
    const uri = 'http://localhost:4000/students';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editStudent(id) {
    const uri = 'http://localhost:4000/students/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
  updateCoin(id, name, phone, URL, degree, committee) {
    const uri = 'http://localhost:4000/students/update/' + id;

    const obj = {
      id: id,
      name: name,
      phone: phone,
      URL: URL,
      degree: degree,
      committee: committee
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteCoin(id) {
    const uri = 'http://localhost:4000/students/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
