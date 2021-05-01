import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from './base-data.service';
import { FirestoreService } from '../firestore/firestore.service';
import { UtilService } from '../util/util.service';
import { AppSettingsDto } from '../../models/app-settings.model';


@Injectable()
export class AppSettingsDataService extends BaseDataService<AppSettingsDto> {
    constructor(private firestore: FirestoreService, private util: UtilService) {
        super('appSettings');
    }

    public get(): Observable<AppSettingsDto[]> {
        return this.firestore.get<AppSettingsDto>(this.baseCollection);
    }

    public getOne(id: string): Observable<AppSettingsDto> {
        return this.firestore.getOne<AppSettingsDto>(this.baseCollection, id);
    }

    public update(data: Partial<AppSettingsDto>): Promise<void> {
        return this.firestore.update<AppSettingsDto>(this.baseCollection, data.id, data);
    }

    public delete(id: string): Promise<any> {
        return this.firestore.delete(this.baseCollection, id);
    }
    
    public create(data: AppSettingsDto): Promise<void> {
        return this.firestore.create(this.baseCollection, data);
    }
}