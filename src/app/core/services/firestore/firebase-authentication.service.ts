import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserDataService } from '../data-services/user-data.service';
import { resolve } from 'url';
import { UtilService } from '../util/util.service';
// import * as firebase from 'firebase';
import { UserDto, UserModel } from '../../models/user.model';
import { Events } from '../events.service';

export class AuthInfo {
    constructor(public $uid: string) {}

    isLoggedIn() {
        return !!this.$uid;
    }
}

@Injectable()
export class AuthenticationService {
    static UNKNOWN_USER = new AuthInfo(null);
    public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthenticationService.UNKNOWN_USER);

    constructor(
        private fireAuth: AngularFireAuth,
        private userDataService: UserDataService,
        private util: UtilService,
        public events: Events,
        ) {
        this.fireAuth.authState.pipe(
            take(1)
        ).subscribe(user => {
            if (user) {
                this.authInfo$.next(new AuthInfo(user.uid));
            }
        });
    }
    
    public forgotPassoword(email:string) {
        this.fireAuth.sendPasswordResetEmail(email).then(() => {

        }).catch(err => {

        });
    }

    public createAccount(user: UserDto, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.fireAuth.createUserWithEmailAndPassword(user.email, password)
                .then(res => {
                    if (res.user) {
                        this.authInfo$.next(new AuthInfo(res.user.uid));
                        // const userDto: UserDto = UserModel.emptyDto();
                        user.id = res.user.uid;
                        this.userDataService.create(user);
                        this.events.publish('user:signup', {
                            user: user.email,
                            time: new Date()
                        });
                        resolve(res.user);
                    }
                })
                .catch(err => {
                    this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
                    reject(`creation failed ${err}`);
                });
        });
    }

    public login(email: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.fireAuth.signInWithEmailAndPassword(email, password)
                .then(res => {
                    if (res.user) {
                        this.authInfo$.next(new AuthInfo(res.user.uid));
                        this.events.publish('user:login', {
                            user: res.user.uid,
                            time: new Date()
                        });
                        resolve(res.user);
                    }
                })
                .catch(err => {
                    this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
                    reject(`login failed ${err}`);
                });
        });
    }

    public logout(): Promise<void> {
        this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
        this.events.publish('user:logout', {
            user: null,
            time: new Date()
        });
        return this.fireAuth.signOut();
    }

    public checkAuth() {
        return new Promise((resolve) => {
            this.fireAuth.onAuthStateChanged(user => {
                resolve(user);
             });
        });
    }

    public emailVerified() {
        return new Promise((resolve) => {
            this.fireAuth.authState.subscribe(user => {
                resolve(user.emailVerified);
            });
        });
    }

    // public loginWithFacebook(accessToken) {
    //     const credential = firebase.auth.FacebookAuthProvider
    //         .credential(accessToken);
    //     return this.fireAuth.signInWithCredential(credential);
    // }

    // public fbLogin(): Promise<any> {
    //     return this.fireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    // }

    // public loginWithTwitter(accessToken, accessSecret) {
    //     const credential = firebase.auth.TwitterAuthProvider
    //         .credential(accessToken, accessSecret);
    //     return this.fireAuth.signInWithCredential(credential);
    // }

    // public twitterLogin(): Promise<any> {
    //     return this.fireAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    // }

    // public loginWithGoogle(accessToken, accessSecret) {
    //     const credential = accessSecret ? firebase.auth.GoogleAuthProvider
    //         .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
    //         .credential(accessToken);
    //     return this.fireAuth.signInWithCredential(credential);
    // }

    // public googleLogin(): Promise<any> {
    //     return this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // }

    public createSocialLoginUser(user): Promise<any> {
        this.authInfo$.next(new AuthInfo(user.uid));
        const userDto: UserDto = UserModel.emptyDto();
        userDto.id = user.uid;
        userDto.email = user.email;
        userDto.firstName = user.firstName;
        userDto.lastName = user.lastName;

        return this.userDataService.create(userDto);
    }
}
