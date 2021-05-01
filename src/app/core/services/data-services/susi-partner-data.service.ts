import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from './base-data.service';
import { SUSIPartnerDto } from '../../models/susi-partner.model';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable()
export class SusiPartnerDataService extends BaseDataService<SUSIPartnerDto> {
    constructor(private firestore: FirestoreService) {
        super('partners');
    }

    public get(): Observable<SUSIPartnerDto[]> {
        return this.firestore.get<SUSIPartnerDto>(this.baseCollection);
    }

    public getOne(id: string): Observable<SUSIPartnerDto> {
        return this.firestore.getOne<SUSIPartnerDto>(this.baseCollection, id);
    }

    public update(data: Partial<SUSIPartnerDto>): Promise<void> {
        return this.firestore.update<SUSIPartnerDto>(this.baseCollection, data.id, data);
    }

    public delete(id: string): Promise<any> {
        return this.firestore.delete(this.baseCollection, id);
    }
    
    public create(data: SUSIPartnerDto): Promise<void> {
        return this.firestore.create(this.baseCollection, data);
    }


}