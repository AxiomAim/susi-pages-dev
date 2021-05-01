import { UUID } from 'angular2-uuid';
import { BaseDatabaseModel, BaseDto } from './base-dto.model';

export class SUSIAlbumModel extends BaseDatabaseModel {

    constructor(
        id: string,
        name: string,
        description: string,
        images: Image[]
        ) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.images = images;
    }
    public id: string;
    public name: string;
    public description: string;
    public images: Image[];

    public static fromDto(brand: SUSIAlbumDto): SUSIAlbumModel {
        return new SUSIAlbumModel(
            brand.id, 
            brand.name, 
            brand.description, 
            brand.images, 
            );
    }

    public static emptyDto(): SUSIAlbumDto {
        const datetime = new Date().toISOString();
        return {
            id: UUID.UUID(),
            name: null,
            description: null,
            images: [],
        }
    }

    public toDto(): SUSIAlbumDto {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            images: this.images,
        };
    }
}

export interface SUSIAlbumDto extends BaseDto {
    id: string;
    name: string;
    description: string;
    images: Image[];
}

export interface Image {
    name?: string,
    img?: string,
    extUrl?: string,
    path?: string,
}
