import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { frameworks, regexp, versions } from '../../configs/constants';
import { IHobby, IUser } from '../../interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users: IUser[] = [];
  hobbies: IHobby[] = [];

  form!: FormGroup;

  constructor() {
    this._initForm()
  }

  ngOnInit(): void {
    this.form.get('framework')?.valueChanges.subscribe(framework => {
      if (framework) {
        this.form.get('frameworkVersion')?.enable();
      } else {
        this.form.get('frameworkVersion')?.disable();
      }
    });
  }

  _initForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      lastName: new FormControl(null,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      dateOfBirth: new FormControl(null,[
        Validators.required
      ]),
      framework: new FormControl(null,[
        Validators.required
      ]),
      frameworkVersion: new FormControl({ value: null, disabled: true }, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(regexp.EMAIL)
      ]),
      hobby: new FormControl(null),
      hobbyDuration: new FormControl(null),
    })
  }

  createUser(data: IUser, hobby: IHobby[]): void {
    const newUser: IUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      framework: data.framework,
      frameworkVersion: data.frameworkVersion,
      hobby,
    }

    this.users.push(newUser);
  }

  addHobby(): void {
    const name = this.form.get('hobby');
    const duration = this.form.get('hobbyDuration');

    const newHobby: IHobby = {
      name: name?.value,
      duration: duration?.value,
    }

    name?.reset();
    duration?.reset();

    this.hobbies.push(newHobby);
  }

  removeHobby(hobby: IHobby): void {
    const index = this.hobbies.indexOf(hobby);
    if (index !== -1) {
      this.hobbies.splice(index, 1);
    }
  }

  save(data: IUser): void {
    if (!this.hobbies.length) {
      this.form.controls['hobby'].setErrors({ hobby: 'You need at least 1 hobby' });
      this.form.controls['hobbyDuration'].setErrors({ duration: 'You need at least 1 hobby' });
    }

    setTimeout(() => {
      for (const user of this.users) {
        if (user.email === data.email) {
          this.form.controls['email'].setErrors({ apiErr: 'User with this email already exist'})
        }
      }

      if (this.form.valid) {

        this.createUser(data, this.hobbies);

        this.hobbies = [];
        this.form.reset();

        console.log(this.users);
      }
    }, 2000);
  }

  protected readonly frameworks = frameworks;
  protected readonly versions = versions;
}
