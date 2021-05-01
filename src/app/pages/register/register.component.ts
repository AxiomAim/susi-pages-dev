import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { matchingPasswords, emailValidator, phoneValidator } from 'src/app/theme/utils/app-validators';
import { UserDto, UserModel } from '../../core/models/user.model';
import { AuthenticationService } from '../../core/services/firestore/firebase-authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public user: UserDto = UserModel.emptyDto();
  public hide = true;
  public userTypes: any[] = [
    { name: 'Manufacturer' },
    { name: 'Distributor' },
    { name: 'Customer' },
    { name: 'Other' }
  ];
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public snackBar: MatSnackBar,
    public authenticationService: AuthenticationService,
  ) {
    this.user = UserModel.emptyDto();
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userType: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      companyName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      phone: ['', Validators.compose([Validators.required, phoneValidator])],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      news: ['true', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      receiveNewsletter: false
    }, { validator: matchingPasswords('password', 'confirmPassword') });
  }

  setValue(i, e) {
    if (e.checked) {
      this.user.news = true
    } else {
      this.user.news = false
    }
  }

  public onRegisterFormSubmit(values: any): void {
    console.log(`${JSON.stringify(values, null, 2)}`);
    if (this.registerForm.valid) {
      // this.user.userType = values.userType.name;
      // this.user.firstName = values.firstName;
      // this.user.lastName = values.lastName;
      // this.user.email = values.email;
      // this.user.companyName = values.companyName;
      // this.user.phone = values.phone;
      // this.user.news = values.news;
      // console.log(`this.user: ${JSON.stringify(this.user, null, 2)}`);

      this.authenticationService.createAccount(this.user, values.password).then(res => {
        console.log(`${JSON.stringify(res, null, 2)}`);
        this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        this.router.navigate(['']);
      }).catch(err => {
        this.snackBar.open(`${err}`, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
      });
    }
  }
}
