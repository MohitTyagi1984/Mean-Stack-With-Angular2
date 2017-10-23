import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;

  createForm() {
    this.form = this.formBuilder.group({
    email: ['', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ])],
    username:  ['', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ])],
    password:  ['', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ])],
    confirm:  ['', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ])]
    });
  }
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.createForm();
  }
  onRegisterSubmit() {
    const user = {
      email: this.form.get('email').value,
      user: this.form.get('user').value,
      password: this.form.get('password').value,
    };
    this.authService.registerUser(user).subscribe(data => {
      // if (!data.success) {
      //   this.messageClass = 'alert alert-danger';
      //   this.message = data.message;
      // }
      console.log(data);
    });
  }
  ngOnInit() {
  }
}
