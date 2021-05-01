import { BaseDatabaseModel } from '../../models/base-dto.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UtilService } from '../util/util.service';
import { map } from 'rxjs/operators'

@Injectable()
export class FirestoreService {
    userid: any;
    // userProfile: ProfileDto;

    constructor(
        public store: AngularFirestore,
        private fireAuth: AngularFireAuth, 
        private util: UtilService
        ) {
        this.util.userid.subscribe(res => {
            this.userid = res;
        })
        // this.util.userProfile.subscribe(data => {
        //     this.userProfile = data;
        // })
    }

    public create<T extends BaseDatabaseModel>(collection: string, data: T): Promise<void> {
        return this.store.doc<T>(`${collection}/${data.id}`).set(data);
    }

    public get<T extends BaseDatabaseModel>(collection: string): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref).valueChanges();
    }

    public getRoutineId<T extends BaseDatabaseModel>(collection: string, routineId: string): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where(`routineId`, `==`, `${routineId}`)).valueChanges();
    }

    public getUserData<T extends BaseDatabaseModel>(collection: string): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('uid', '==', `${this.userid}`)).valueChanges();
    }

    public getOne<T extends BaseDatabaseModel>(collection: string, id: string): Observable<T> {
        return this.store.doc<T>(`${collection}/${id}`).valueChanges();
    }

    public update<T extends BaseDatabaseModel>(collection: string, id: string, document: Partial<T>): Promise<void> {
        return this.store.doc<T>(`${collection}/${id}`).update(document);
    }

    // public runQuery<T extends BaseDatabaseModel>(collection: string, query: FirestoreQuery): Observable<T[]> {
    //     return this.store.collection<T>(collection, ref => ref.where(query.field, query.operation, query.searchKey)).valueChanges();
    // }

    public delete<T extends BaseDatabaseModel>(collection: string, id: string): Promise<any> {
        return this.store.doc<T>(`${collection}/${id}`).delete();
    }

    public uploadFile(folderName: string,downloadUrl: string, fileName: string): Promise<any> {
        return this.store.collection<{ downloadUrl: string, fileName: string, uid: string }>(`fileReferences`).add({ downloadUrl: downloadUrl, fileName: fileName, uid: this.userid });
    }

    public getImages(): Observable<any> {
        return this.store.collection('fileReferences', ref => ref.where('uid', '==', `${this.userid}`)).snapshotChanges().pipe(map(actions => {       
            return actions.map(a => {
              const data = a.payload.doc.data();
              data['id'] = a.payload.doc.id;
              return data;
            });
          }));
    }

    public getRoutinePosition<T extends BaseDatabaseModel>(collection: string, position: string): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('poze.position', '==', `${position}`)).valueChanges();
    }

    public getRoutinePositionLength<T extends BaseDatabaseModel>(collection: string, position: string, length: number): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('poze.position', '==', `${position}`).where(`length`, `==`, length)).valueChanges();
    }

    public getFavoriteRoutine<T extends BaseDatabaseModel>(collection: string, uid: string, routineId: string): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('uid', '==', `${uid}`).where(`routineId`, `==`, `${routineId}`)).valueChanges();
    }

    public getRatingRoutineUserId<T extends BaseDatabaseModel>(collection: string, uid: string, routineId: string): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('uid', '==', `${uid}`).where(`routineId`, `==`, `${routineId}`)).valueChanges();
    }

    public getFavoritesByUserId<T extends BaseDatabaseModel>(collection: string, uid: string): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('uid', '==', `${uid}`)).valueChanges();
    }

    public getFavoriteUserIdRoutineId<T extends BaseDatabaseModel>(collection: string, uid: string, routineId: string): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('uid', '==', `${uid}`).where(`routineId`, `==`, `${routineId}`)).valueChanges();
    }

    public getDateLog<T extends BaseDatabaseModel>(collection: string, date: any): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('uid', '==', `${this.userid}`).where('date', '==', `${date}`)).valueChanges();
    }

    public getDailyLog<T extends BaseDatabaseModel>(collection: string, dateInt: any): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('uid', '==', `${this.userid}`).where('dateInt', '==', `${dateInt}`)).valueChanges();
    }

    public getBrand<T extends BaseDatabaseModel>(collection: string, domain: string): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where('domain', '==', `${domain}`)).valueChanges();
    }

}

// export interface FirestoreQuery {
//     field: string;
//     operation: firebase.firestore.WhereFilterOp;
//     searchKey: string;
// }