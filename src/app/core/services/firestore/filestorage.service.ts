import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirestoreService } from './firestore.service'

@Injectable()
export class StorageService {
    constructor(
        private storage: AngularFireStorage, 
        private baseFs: FirestoreService
        ) {
    }
    public uploadContent(folder: any, file: any, fileName: any  ): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if (file) {
                    return this.storage.upload(`susi/${fileName}`, file).then(
                        success => {
                            return this.storage.ref(`susi/${fileName}`).getDownloadURL().subscribe(url => {
                                return this.baseFs.uploadFile('susi',url,fileName)
                                    .then(() => {
                                        resolve({ url: url, fileName: fileName });
                                    })
                                    .catch(err => {
                                        reject(err);
                                })
                            });
                        },
                        failure => {
                           
                            reject(failure);
                        }
                    )
                        .catch(err => {
                          
                            reject(err);
                        })
                } else {
                    reject(new Error(' choice key not given'));
                }
            } catch (e) {
               
                reject(e);
            }

        })
    }
}
