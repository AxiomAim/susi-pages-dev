import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthenticationService } from '../../core/services/firestore/firebase-authentication.service'
import { UtilService } from '../../core/services/util/util.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };
  @ViewChild('sidenav') sidenav: any;
  public displayName = 'Support';
  public sidenavOpen: boolean = true;
  public links;
  public adminLinks;

  constructor(
    public router: Router,
    public authenticationService: AuthenticationService,
    public utilService: UtilService
  ) {
    this.links = [
      { name: 'Selection Guides', href: 'selection-guides', icon: 'view_list' },
      { name: 'Brochures', href: 'brochures', icon: 'view_list' },
      { name: 'Pictures', href: 'pictures', icon: 'view_list' },
      { name: '360 Views', href: 'three-sixty-views', icon: 'view_list' },
      { name: 'Videos', href: 'videos', icon: 'view_list' },
      { name: 'Slide Shows', href: 'slide-shows', icon: 'view_list' },
      { name: 'Customers', href: 'customers', icon: 'view_list' },
      { name: 'Case Studies', href: 'case-studies', icon: 'view_list' },
      { name: 'Installation Guides', href: 'install-guides', icon: 'view_list' },
      { name: 'User Drawings', href: 'drawings', icon: 'view_list' },
      { name: 'Wiring Diagrams', href: 'wiring-diagrams', icon: 'view_list' },
    ];
    this.adminLinks = [
    ];
  }

  ngOnInit() {


    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    };
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (window.innerWidth < 960) {
          this.sidenav.close();
        }
      }
    });
  }


}
