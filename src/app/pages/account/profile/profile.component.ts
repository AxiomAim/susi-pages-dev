import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, matchingPasswords } from 'src/app/theme/utils/app-validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataService } from '../../../core/services/data-services/user-data.service';
import { AuthenticationService } from '../../../core/services/firestore/firebase-authentication.service'
import { UserDto, UserModel } from 'src/app/core/models/user.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public infoForm: FormGroup;
  public passwordForm: FormGroup;
  public user: UserDto;

  public userTypes: any[] = [
    { name: 'Manufacturer' },
    { name: 'Distributor' },
    { name: 'Customer' },
    { name: 'Other' }
  ];

  constructor(
    public formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private userDataService: UserDataService,
    private authenticationService: AuthenticationService,
  ) {
    this.user = UserModel.emptyDto();
    this.authenticationService.authInfo$.pipe(tap(auth => {
      if (auth.$uid) {
        this.userDataService.getOne(auth.$uid).pipe(tap(data => {
          this.user = data;            
        })).subscribe();
      } 
    })).subscribe();
  }

  ngOnInit() {
    this.infoForm = this.formBuilder.group({
      userType: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      companyName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      phone: ['', Validators.required]
    });
  }

  public onInfoFormSubmit(values: Object): void {
    if (this.infoForm.valid) {
      console.log(values)
      this.userDataService.update(this.user).then(res => {
      });
      this.snackBar.open('Your account information updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    }
  }

}
