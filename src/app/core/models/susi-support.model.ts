import { UUID } from 'angular2-uuid';
import { BaseDatabaseModel, BaseDto } from './base-dto.model';

export class SUSISupportModel extends BaseDatabaseModel {

    constructor(
        id: string,
        partnerId: string,
        partnerName: string,
        name: string,
        description: string,
        pictures: Pictures[],
        brochures: Brochures[],
        caseStudies: CaseStudies[],
        customers: Customers[],
        installationGuides: InstallationGuides[],
        selectionGuides: SelectionGuides[],
        slideShows: SlideShows[],
        threeSixtyViews: ThreeSixtyViews[],
        userDrawings: UserDrawings[],
        videos: Videos[],
        wiringDiagrams: WiringDiagrams[],
        ) {
        super();
        this.id = id;
        this.partnerId = partnerId;
        this.partnerName = partnerName;
        this.name = name;
        this.description = description;
        this.pictures = pictures;
        this.brochures = brochures;
        this.caseStudies = caseStudies;
        this.customers = customers;
        this.installationGuides = installationGuides;
        this.selectionGuides = selectionGuides;
        this.slideShows = slideShows;
        this.threeSixtyViews = threeSixtyViews;
        this.userDrawings = userDrawings;
        this.videos = videos;
        this.wiringDiagrams = wiringDiagrams;
    }
    public id: string;
    public partnerId: string;
    public partnerName: string;
    public name: string;
    public description: string;
    public pictures: Pictures[];
    public brochures: Brochures[];
    public caseStudies: CaseStudies[];
    public customers: Customers[];
    public installationGuides: InstallationGuides[];
    public selectionGuides: SelectionGuides[];
    public slideShows: SlideShows[];
    public threeSixtyViews: ThreeSixtyViews[];
    public userDrawings: UserDrawings[];
    public videos: Videos[];
    public wiringDiagrams: WiringDiagrams[];

    public static fromDto(partner: SUSISupportDto): SUSISupportModel {
        return new SUSISupportModel(
            partner.id, 
            partner.partnerId, 
            partner.partnerName, 
            partner.name, 
            partner.description, 
            partner.pictures, 
            partner.brochures, 
            partner.caseStudies, 
            partner.customers, 
            partner.installationGuides, 
            partner.selectionGuides, 
            partner.slideShows, 
            partner.threeSixtyViews, 
            partner.userDrawings, 
            partner.videos, 
            partner.wiringDiagrams, 
            );
    }

    public static emptyDto(): SUSISupportDto {
        const datetime = new Date().toISOString();
        return {
            id: null,
            partnerId: null,
            partnerName: null,
            name: null,
            description: null,
            pictures: [],
            brochures: [],
            caseStudies: [],
            customers: [],
            installationGuides: [],
            selectionGuides: [],
            slideShows: [],
            threeSixtyViews: [],
            userDrawings: [],
            videos: [],
            wiringDiagrams: [],
        }
    }

    public toDto(): SUSISupportDto {
        return {
            id: this.id,
            partnerId: this.partnerId,
            partnerName: this.partnerName,
            name: this.name,
            description: this.description,
            pictures: this.pictures,
            brochures: this.brochures,
            caseStudies: this.caseStudies,
            customers: this.customers,
            installationGuides: this.installationGuides,
            selectionGuides: this.selectionGuides,
            slideShows: this.slideShows,
            threeSixtyViews: this.threeSixtyViews,
            userDrawings: this.userDrawings,
            videos: this.videos,
            wiringDiagrams: this.wiringDiagrams,
        };        
    }
    
}

export interface SUSISupportDto extends BaseDto {
    id: string;
    partnerId: string;
    partnerName: string;
    name: string;
    description: string;
    pictures: Pictures[];
    brochures: Brochures[];
    caseStudies: CaseStudies[];
    customers: Customers[];
    installationGuides: InstallationGuides[];
    selectionGuides: SelectionGuides[];
    slideShows: SlideShows[];
    threeSixtyViews: ThreeSixtyViews[];
    userDrawings: UserDrawings[];
    videos: Videos[];
    wiringDiagrams: WiringDiagrams[];
}

export interface Pictures {
    image?: string,
    id: string;
    name: string;
    description: string;
    images: Images[];
}

export interface Images {
    fileName?: string,
    downloadUrl?: string,
    extUrl?: string,
    path?: string,
}

export interface Brochures {
    image?: string,
    fileName?: string,
    downloadUrl?: string,
    extUrl?: string,
    path?: string,
}

export interface CaseStudies {
    image?: string,
    fileName?: string,
    downloadUrl?: string,
    extUrl?: string,
    path?: string,
}

export interface Customers {
    image?: string,
    name?: string,
    category?: string,
}

export interface InstallationGuides {
    image?: string,
    fileName?: string,
    downloadUrl?: string,
    extUrl?: string,
    path?: string,
}

export interface SelectionGuides {
    image?: string,
    fileName?: string,
    downloadUrl?: string,
    extUrl?: string,
    path?: string,
}

export interface SlideShows {
    image?: string,
    fileName?: string,
    downloadUrl?: string,
    extUrl?: string,
    path?: string,
}

export interface ThreeSixtyViews {
    image?: string,
    partner?: string;
    type?: string;
    part?: string;
    extUrl?: string,
}

export interface UserDrawings {
    image?: string,
    fileName?: string,
    downloadUrl?: string,
    extUrl?: string,
    path?: string,
}

export interface Videos {
    image?: string,
    videoName?: string,
    extUrl?: string,
    youTubeId?: string,
}

export interface WiringDiagrams {
    image?: string,
    fileName?: string,
    downloadUrl?: string,
    extUrl?: string,
    path?: string,
}







