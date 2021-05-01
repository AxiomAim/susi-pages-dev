import { UUID } from 'angular2-uuid';
import { BaseDatabaseModel, BaseDto } from './base-dto.model';

export class SUSI360Model extends BaseDatabaseModel {

    constructor(
        id: string,
        partner: string,
        type: string,
        part: string,
        url: string
        ) {
        super();
        this.id = id;
        this.partner = partner;
        this.type = type;
        this.part = part;
        this.url = url;
    }
    public id: string;
    public partner: string;
    public type: string;
    public part: string;
    public url: string;

    public static fromDto(view: SUSI360Dto): SUSI360Model {
        return new SUSI360Model(
            view.id, 
            view.partner, 
            view.type, 
            view.part, 
            view.url, 
            );
    }

    public static emptyDto(): SUSI360Dto {
        const datetime = new Date().toISOString();
        return {
            id: UUID.UUID(),
            partner: null,
            type: null,
            part: null,
            url: null,
        }
    }

    public toDto(): SUSI360Dto {
        return {
            id: this.id,
            partner: this.partner,
            type: this.type,
            part: this.part,
            url: this.url,
        };
    }
}

export interface SUSI360Dto extends BaseDto {
    id: string;
    partner: string;
    type: string;
    part: string;
    url: string;
}
