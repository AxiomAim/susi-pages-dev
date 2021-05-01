import { UUID } from 'angular2-uuid';
import { BaseDatabaseModel, BaseDto } from './base-dto.model';

export class SUSIDistModel extends BaseDatabaseModel {

    constructor(
        id: string,
        company: string,
        contact: string,
        street: string,
        street2: string,
        city: string,
        state: string,
        zip: string,
        phone: string,
        phone2: string,
        email: string,
        images: Image[]
        ) {
        super();
        this.id = id;
        this.company = company;
        this.contact = contact;
        this.street = street;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.phone2 = phone2;
        this.email = email;
        this.images = images;
    }
    public id: string;
    public company: string;
    public contact: string;
    public street: string;
    public street2: string;
    public city: string;
    public state: string;
    public zip: string;
    public phone: string;
    public phone2: string;
    public email: string;
    public images: Image[];

    public static fromDto(dist: SUSIDistDto): SUSIDistModel {
        return new SUSIDistModel(
            dist.id, 
            dist.company, 
            dist.contact, 
            dist.street, 
            dist.street2, 
            dist.city, 
            dist.state, 
            dist.zip, 
            dist.phone, 
            dist.phone2, 
            dist.email, 
            dist.images, 
            );
    }

    public static emptyDto(): SUSIDistDto {
        const datetime = new Date().toISOString();
        return {
            id: UUID.UUID(),
            company: null,
            contact: null,
            street: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            phone: null,
            phone2: null,
            email: null,
            images: [],
        }
    }

    public toDto(): SUSIDistDto {
        return {
            id: this.id,
            company: this.company,
            contact: this.contact,
            street: this.street,
            street2: this.street2,
            city: this.city,
            state: this.state,
            zip: this.zip,
            phone: this.phone,
            phone2: this.phone2,
            email: this.email,
            images: this.images,
        };
    }
}

export interface SUSIDistDto extends BaseDto {
    id: string;
    company: string;
    contact: string;
    street: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    phone2: string;
    email: string;
    images: Image[];
}

export interface Image {
    img?: string,
    extUrl?: string,
    path?: string,
}
