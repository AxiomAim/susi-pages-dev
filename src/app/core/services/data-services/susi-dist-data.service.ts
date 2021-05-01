import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from './base-data.service';
import { SUSIDistDto } from '../../models/susi-distributor.model';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable()
export class SusiDistDataService extends BaseDataService<SUSIDistDto> {
    constructor(private firestore: FirestoreService) {
        super('distributors');
    }

    public get(): Observable<SUSIDistDto[]> {
        return this.firestore.get<SUSIDistDto>(this.baseCollection);
    }

    public getOne(id: string): Observable<SUSIDistDto> {
        return this.firestore.getOne<SUSIDistDto>(this.baseCollection, id);
    }

    public update(data: Partial<SUSIDistDto>): Promise<void> {
        return this.firestore.update<SUSIDistDto>(this.baseCollection, data.id, data);
    }

    public delete(id: string): Promise<any> {
        return this.firestore.delete(this.baseCollection, id);
    }
    
    public create(data: SUSIDistDto): Promise<void> {
        return this.firestore.create(this.baseCollection, data);
    }


}