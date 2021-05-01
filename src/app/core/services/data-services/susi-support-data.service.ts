import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from './base-data.service';
import { FirestoreService } from '../firestore/firestore.service';
import { SUSISupportDto } from '../../models/susi-support.model';

@Injectable()
export class SusiSupportDataService extends BaseDataService<SUSISupportDto> {
    constructor(private firestore: FirestoreService) {
        super('support');
    }

    public get(): Observable<SUSISupportDto[]> {
        return this.firestore.get<SUSISupportDto>(this.baseCollection);
    }

    public getOne(id: string): Observable<SUSISupportDto> {
        return this.firestore.getOne<SUSISupportDto>(this.baseCollection, id);
    }

    public update(data: Partial<SUSISupportDto>): Promise<void> {
        return this.firestore.update<SUSISupportDto>(this.baseCollection, data.id, data);
    }

    public delete(id: string): Promise<any> {
        return this.firestore.delete(this.baseCollection, id);
    }
    
    public create(data: SUSISupportDto): Promise<void> {
        return this.firestore.create(this.baseCollection, data);
    }
}