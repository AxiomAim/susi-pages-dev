import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthenticationService } from '../../core/services/firestore/firebase-authentication.service';
import { UtilService } from '../../core/services/util/util.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public hide = true;
  constructor(
    public fb: FormBuilder, 
    public router:Router,
    public authenticationService: AuthenticationService,
    public utilService: UtilService,
    public snackBar: MatSnackBar,
    public matDialog: MatDialog,
    ) { 

    }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      rememberMe: false
    });
  }

  public onLoginFormSubmit(values:any):void {
    if (this.loginForm.valid) {
        this.authenticationService.login(values.email, values.password).then(
          userData => {
            this.router.navigateByUrl("/");
            // this.utilService.navigate('');
          }
        ).catch(err => {
          if (err) {
            this.snackBar.open('Sign In Failed!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
          }
        });
      }
    }

    resetPwdDialog(): void {
      const dialogRef = this.matDialog.open(LoginResetPwdDialog, {
        width: '250px',
        data: { }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.authenticationService.forgotPassoword(result.email);
        this.snackBar.open('Check your Email!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });

      });
    }
}

@Component({
  selector: 'login-reset-pwd.component',
  templateUrl: 'login-reset-pwd.component.html',
})
export class LoginResetPwdDialog {

  public submitForm: FormGroup;
  public name:string;
  public description:string;

  constructor(
    public dialogRef: MatDialogRef<LoginResetPwdDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      const email = data.email;

      this.submitForm = fb.group({
        email: [null, Validators.compose([Validators.required, Validators.email])],
      });
    }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.data.email = this.submitForm.value.email;
  }

}

