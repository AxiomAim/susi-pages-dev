import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AuthenticationService } from '../firestore/firebase-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  adMobId = {
    android :{
      banner: 'ca-app-pub-3940256099942544/6300978111', // replace with your adMob ID
      interstitial: 'ca-app-pub-3940256099942544/1033173712', // replace with your adMob ID
      interstitialVideo: 'ca-app-pub-3940256099942544/8691691433', // replace with your adMob ID
      reward: 'ca-app-pub-3940256099942544/5224354917' // replace with your adMob ID
    },
    ios :{
      banner: 'ca-app-pub-3940256099942544/2934735716',  // replace with your adMob ID
      interstitial: 'ca-app-pub-3940256099942544/4411468910', // replace with your adMob ID
      interstitialVideo: 'ca-app-pub-3940256099942544/5135589807', // replace with your adMob ID
      reward: 'ca-app-pub-3940256099942544/1712485313' // replace with your adMob ID
    }
  }

  userid: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // userProfile: BehaviorSubject<ProfileDto> = new BehaviorSubject<ProfileDto>(null);

  constructor(
    private fireAuth: AngularFireAuth, 
    private router: Router, 
    ) {
    this.getUserId();
  }

  getUserId() {
    this.fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.userid.next(user.uid);
      }
    });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  getLocalUrl(_imagePath): Promise<{ url: string, nativeUrl: string }> {
    return new Promise((resolve, reject) => {
      const name = _imagePath.split('/');
      this.makeFileIntoBlob(_imagePath, name[name.length - 1]).then((image) => {
        resolve({ url: window.URL.createObjectURL(image), nativeUrl: _imagePath });
      }).catch(
        _ => {
          reject();

        }
      );
    });
  }
  makeFileIntoBlob(_imagePath, fileName) {
    return new Promise((resolve, reject) => {
      window['resolveLocalFileSystemURL'](_imagePath, (fileEntry) => {
        fileEntry['file']((resFile) => {
          const reader = new FileReader();
          reader.onload = (evt: any) => {
            const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
            imgBlob.name = fileName;
            resolve(imgBlob);
          };
          reader.onloadend = (evt: any) => {
            const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
            imgBlob.name = fileName;
            resolve(imgBlob);
          };

          reader.onerror = (e) => {

            reject(e);
          };

          reader.readAsArrayBuffer(resFile);
        }, (err) => {

          reject({ message: 'File does not exists.' });
        });
      }, (err) => {
      });
    });
  }

  navigate(link?) {
    // this.router.navigate(['/', 'red-pill']);
    this.router.navigateByUrl('/' + link);
  }
}
