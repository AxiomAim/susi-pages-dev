import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { AuthenticationService } from '../../../core/services/firestore/firebase-authentication.service'
import { UtilService } from '../../../core/services/util/util.service';
import { UserDataService } from '../../../core/services/data-services/user-data.service';
import { Events } from '../../../core/services/events.service';
import { UserDto, UserModel } from 'src/app/core/models/user.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  public auth: boolean = false;
  public user: UserDto;

  constructor(
    public appService:AppService,
    public authenticationService: AuthenticationService,
    public utilService: UtilService,
    private userDataService: UserDataService,
    public events: Events
    
    ) {
      this.listenToLoginEvents();
      this.user = UserModel.emptyDto();
      this.authenticationService.authInfo$.pipe(tap(auth => {
        if (auth.$uid) {
          this.auth = true;
          this.userDataService.getOne(auth.$uid).pipe(tap(data => {
            this.user = data;
          })).subscribe();
        } else {
          this.auth = false;
          this.utilService.navigate('')
        }
      })).subscribe();
     }

  ngOnInit() {

  }

  signOut() {
    this.authenticationService.logout().then(user => {
      this.utilService.navigate('');
    });
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', (data: any) => {
      console.log('user:login', data.user, 'at', data.time);
      this.ngOnInit();
    });

    this.events.subscribe('user:signup', (data: any) => {
      console.log('user:signup', data.user, 'at', data.time);
      this.ngOnInit();
    });

    this.events.subscribe('user:logout', (data: any) => {
      console.log('user:logout', data.user, 'at', data.time);
      this.ngOnInit();
    });
  }


}
