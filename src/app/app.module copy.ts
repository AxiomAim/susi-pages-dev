import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true               
};
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';

//Third Party Components//////////////////////////////////////////////////////////
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
const config: InputFileConfig = {
  fileAccept: '*'
};

//Components//////////////////////////////////////////////////////////////////////
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { Toolbar1Component } from './theme/components/toolbar1/toolbar1.component';
// import { Toolbar2Component } from './theme/components/toolbar2/toolbar2.component';
// import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
// import { SocialIconsComponent } from './theme/components/social-icons/social-icons.component';
// import { ContactsComponent } from './theme/components/contacts/contacts.component'; 
// import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
// import { HorizontalHoverMenuComponent } from './theme/components/hover-menu/horizontal-hover-menu/horizontal-hover-menu.component';
// import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
// import { FooterComponent } from './theme/components/footer/footer.component';
// import { StoreBadgesComponent } from './theme/components/store-badges/store-badges.component';

//Providers///////////////////////////////////////////////////////////////////////
// import { AppSettings } from './app.settings';
// import { StorageService } from './core/services/firestore/filestorage.service';
// import { AuthenticationService } from './core/services/firestore/firebase-authentication.service';
// import { FirestoreService} from './core/services/firestore/firestore.service';
// import { UserDataService } from './core/services/data-services/user-data.service';
// import { UtilService } from './core/services/util/util.service';
// import { SusiPartnerDataService } from './core/services/data-services/susi-partner-data.service';
// import { SusiAlbumDataService } from './core/services/data-services/susi-album-data.service';
// import { SusiDistDataService } from './core/services/data-services/susi-dist-data.service';
// import { SusiSupportDataService } from './core/services/data-services/susi-support-data.service';
// import { AppInterceptor } from './theme/utils/app-interceptor';
// import { GoogleAnalyticsService } from './core/services/google-analytics.service';
// import { Events } from './core/services/events.service';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NotFoundComponent,
    // UserMenuComponent,
    // SocialIconsComponent,
    // ContactsComponent, 
    // Toolbar1Component,
    // Toolbar2Component,
    // HorizontalMenuComponent,
    // HorizontalHoverMenuComponent,
    // VerticalMenuComponent,
    // FooterComponent,
    // StoreBadgesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    SharedModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    // AppSettings,
    // { provide: OverlayContainer, useClass: CustomOverlayContainer },
    // { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    // StorageService,
    // AuthenticationService,
    // FirestoreService,
    // UserDataService,
    // UtilService,
    // Events,
    // SusiPartnerDataService,
    // SusiAlbumDataService,
    // SusiDistDataService,
    // SusiSupportDataService,
    // GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
