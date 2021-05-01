import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthenticationService } from '../../core/services/firestore/firebase-authentication.service'
import { UserDataService } from '../../core/services/data-services/user-data.service'
import { UtilService } from '../../core/services/util/util.service';
import { tap } from 'rxjs/operators';
import { UserDto, UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation:true
  };
  @ViewChild('sidenav') sidenav: any;
  public displayName = 'Thomas Powell';
  public sidenavOpen:boolean = true;
  public user = UserModel.emptyDto();

  links = [ 
    { name: 'Profile', href: 'profile', icon: 'person' },  
    { name: 'Logout', href: '/login', icon: 'power_settings_new' },            
  ]; 
  adminLinks = [ 
    { name: 'Partners', href: 'susi-partners-list', icon: 'view_list' },  
    { name: 'Image Gallery', href: 'susi-images-list', icon: 'view_list' }, 
    { name: 'Support Resources', href: 'susi-support', icon: 'view_list' },  
    { name: 'Users', href: 'susi-admin-user-list', icon: 'view_list' },  
  ]; 

  constructor(
    public router: Router,
    public authenticationService: AuthenticationService,
    public utilService: UtilService,
    public userDataService: UserDataService
    ) { 
      this.authenticationService.authInfo$.pipe(tap(auth => {
        if (auth.$uid) {
          this.userDataService.getOne(auth.$uid).pipe(tap(data => {
            this.user = data;            
          })).subscribe();
        } else {
          this.utilService.navigate('')
        }
      })).subscribe();

    }

  ngOnInit() {
    if(window.innerWidth < 960){
      this.sidenavOpen = false;
    };
  }

  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {  
        if(window.innerWidth < 960){
          this.sidenav.close(); 
        }
      }                
    });
  } 


}
