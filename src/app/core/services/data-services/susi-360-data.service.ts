import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from './base-data.service';
import { SUSI360Model } from '../../models/susi-360.model';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable()
export class Susi360DataService extends BaseDataService<SUSI360Model> {
    constructor(private firestore: FirestoreService) {
        super('360Views');
    }

    public get(): Observable<SUSI360Model[]> {
        return this.firestore.get<SUSI360Model>(this.baseCollection);
    }

    public getOne(id: string): Observable<SUSI360Model> {
        return this.firestore.getOne<SUSI360Model>(this.baseCollection, id);
    }

    public update(data: Partial<SUSI360Model>): Promise<void> {
        return this.firestore.update<SUSI360Model>(this.baseCollection, data.id, data);
    }

    public delete(id: string): Promise<any> {
        return this.firestore.delete(this.baseCollection, id);
    }
    
    public create(data: SUSI360Model): Promise<void> {
        return this.firestore.create(this.baseCollection, data);
    }


}