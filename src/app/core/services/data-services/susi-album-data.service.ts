import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from './base-data.service';
import { SUSIAlbumDto } from '../../models/susi-album.model';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable()
export class SusiAlbumDataService extends BaseDataService<SUSIAlbumDto> {
    constructor(private firestore: FirestoreService) {
        super('gallery');
    }

    public get(): Observable<SUSIAlbumDto[]> {
        return this.firestore.get<SUSIAlbumDto>(this.baseCollection);
    }

    public getOne(id: string): Observable<SUSIAlbumDto> {
        return this.firestore.getOne<SUSIAlbumDto>(this.baseCollection, id);
    }

    public update(data: Partial<SUSIAlbumDto>): Promise<void> {
        return this.firestore.update<SUSIAlbumDto>(this.baseCollection, data.id, data);
    }

    public delete(id: string): Promise<any> {
        return this.firestore.delete(this.baseCollection, id);
    }
    
    public create(data: SUSIAlbumDto): Promise<void> {
        return this.firestore.create(this.baseCollection, data);
    }


}