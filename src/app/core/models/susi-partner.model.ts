import { BaseDatabaseModel, BaseDto } from './base-dto.model';

export class SUSIPartnerModel extends BaseDatabaseModel {

    constructor(
        id: string,
        url: string,
        email: string,
        phone: string,
        colorPrimary: string,
        colorSecondary: string,
        colorAccent: string,
        //Theme Data
        name: string,
        tagline: string,
        logo: string,
        theme: string,
        toolbar: number,
        stickyMenuToolbar: boolean,                
        header: string,
        rtl: boolean,
        searchPanelVariant: number,
        searchOnBtnClick: boolean,
        currency: string,                
        //additional options
        mainToolbarFixed:boolean,
        contentOffsetToTop:boolean,                
        headerBgImage: boolean,
        partnerBar: boolean,
        //Social Links
        socialLinks: SocialLinks,
        loadMore: LoadMore,
        pdfs: Pdf[],
        photos: Photos[],
        videos: Videos[],
        slideShows: SlideShows[],
        caseStudies: CaseStudies[],
        threeSixty: threeSixty[],
        wiringDiagrams: WiringDiagrams[],
        customerDrawings: CustomerDrawings[],
        brochures: Brochure[],
        selectionGuides: SelectionGuide[]

        ) {
        super();
        this.id = id;
        this.url = url;
        this.email = email;
        this.phone = phone;
        this.colorPrimary = colorPrimary;
        this.colorSecondary = colorSecondary;
        this.colorAccent = colorAccent;
        this.name = name;
        this.tagline = tagline;
        this.logo = logo;
        this.theme = theme;
        this.toolbar = toolbar;
        this.stickyMenuToolbar = stickyMenuToolbar;
        this.header = header;
        this.rtl = rtl;
        this.searchPanelVariant = searchPanelVariant;
        this.searchOnBtnClick = searchOnBtnClick;
        this.currency = currency;
        this.mainToolbarFixed = mainToolbarFixed;
        this.contentOffsetToTop = contentOffsetToTop;
        this.headerBgImage = headerBgImage;
        this.partnerBar = partnerBar;
        this.socialLinks = socialLinks;
        this.loadMore = loadMore;
        this.pdfs = pdfs;
        this.photos = photos;
        this.videos = videos;
        this.slideShows = slideShows;
        this.caseStudies = caseStudies;
        this.threeSixty = threeSixty;
        this.wiringDiagrams = wiringDiagrams;
        this.customerDrawings = customerDrawings;
        this.brochures = brochures;
        this.selectionGuides = selectionGuides;
    }
    public id: string;
    public url: string;
    public email: string;
    public phone: string;
    public colorPrimary: string;
    public colorSecondary: string;
    public colorAccent: string;
    public name: string;
    public tagline: string;
    public logo: string;
    public theme: string;
    public toolbar: number;
    public stickyMenuToolbar: boolean;
    public header: string;
    public rtl: boolean;
    public searchPanelVariant: number;
    public searchOnBtnClick: boolean;
    public currency: string;
    public mainToolbarFixed: boolean;
    public contentOffsetToTop: boolean;
    public headerBgImage: boolean;
    public partnerBar: boolean;
    public socialLinks: SocialLinks;
    public loadMore: LoadMore;
    public pdfs: Pdf[];
    public photos: Photos[];
    public videos: Videos[];
    public slideShows: SlideShows[];
    public caseStudies: CaseStudies[];
    public threeSixty: threeSixty[];
    public wiringDiagrams: WiringDiagrams[];
    public customerDrawings: CustomerDrawings[];
    public brochures: Brochure[];
    public selectionGuides: SelectionGuide[];

    public static fromDto(partner: SUSIPartnerDto): SUSIPartnerModel {
        return new SUSIPartnerModel (
            partner.id, 
            partner.url, 
            partner.email, 
            partner.phone, 
            partner.colorPrimary, 
            partner.colorSecondary, 
            partner.colorAccent, 
            partner.name, 
            partner.tagline, 
            partner.logo, 
            partner.theme, 
            partner.toolbar,
            partner.stickyMenuToolbar,
            partner.header,
            partner.rtl,
            partner.searchPanelVariant,
            partner.searchOnBtnClick,
            partner.currency,
            partner.mainToolbarFixed,
            partner.contentOffsetToTop,
            partner.headerBgImage,
            partner.partnerBar,
            partner.socialLinks,
            partner.loadMore,
            partner.pdfs,
            partner.photos,
            partner.videos,
            partner.slideShows,
            partner.caseStudies,
            partner.threeSixty,
            partner.wiringDiagrams,
            partner.customerDrawings,
            partner.brochures,
            partner.selectionGuides
            );
    }

    public static emptyDto(): SUSIPartnerDto {
        const datetime = new Date().toISOString();
        return {
            id: null,
            url: null,
            email: null,
            phone: null,
            colorPrimary: null,
            colorSecondary: null,
            colorAccent: null,
            name: null,
            tagline: null,
            logo: null,
            theme: 'susi',
            toolbar: 1,
            stickyMenuToolbar: true,
            header: 'carousel',
            rtl: false,
            searchPanelVariant: 1,
            searchOnBtnClick: false,
            currency: 'USD',
            mainToolbarFixed: false,
            contentOffsetToTop: true,
            headerBgImage: false,
            partnerBar: false,
            socialLinks: {            
                facebookUrl: null,
                twitterUrl: null,
                linkedInUrl: null,
                youtubeUrl: null,
            },  
            loadMore: {            
                start: false,
                step: 1,
                load: false,
                page: 1,
                complete: false,
                result: 0
            },
            pdfs: [],
            photos: [],
            videos: [],
            slideShows: [],
            caseStudies: [], 
            threeSixty: [], 
            wiringDiagrams: [], 
            customerDrawings: [], 
            brochures: [], 
            selectionGuides: [], 
        }
    }

    public static defaultDto(): SUSIPartnerDto {
        const datetime = new Date().toISOString();
        return {
            id: 'susiadaptors.com',
            url: 'http://susiadapters.com',
            email: 'sales@susiadapters.com',
            phone: '',
            colorPrimary: null,
            colorSecondary: null,
            colorAccent: null,
            name: 'SUSI Adapters',
            tagline: 'Any Meter for Any Panel',
            logo: null,
            theme: 'SU-light',
            toolbar: 1,
            stickyMenuToolbar: true,
            header: 'carousel',
            rtl: false,
            searchPanelVariant: 1,
            searchOnBtnClick: false,
            currency: 'USD',
            mainToolbarFixed: false,
            contentOffsetToTop: false,
            headerBgImage: false,
            partnerBar: false,
            socialLinks: {            
                facebookUrl: 'https://www.facebook.com/susiadapters/',
                twitterUrl: 'https://twitter.com/susiadapters',
                linkedInUrl: 'https://www.linkedin.com/company/susiadapters/',
                youtubeUrl: 'https://www.youtube.com/channel/UCGGMUcRPnbYjpuLidz7L4Eg',
            },  
            loadMore: {            
                start: false,
                step: 1,
                load: false,
                page: 1,
                complete: false,
                result: 0
            },  
            pdfs: [],
            photos: [],
            videos: [], 
            slideShows: [], 
            caseStudies: [],
            threeSixty: [],
            wiringDiagrams: [],
            customerDrawings: [],
            brochures: [],
            selectionGuides: []
        }
    }

    public toDto(): SUSIPartnerDto {
        return {
            id: this.id,
            url: this.url,
            email: this.email,
            phone: this.phone,
            colorPrimary: this.colorPrimary,
            colorSecondary: this.colorSecondary,
            colorAccent: this.colorAccent,
            name: this.name,
            logo: this.logo,
            tagline: this.tagline,
            theme: this.theme,
            toolbar: this.toolbar,
            stickyMenuToolbar: this.stickyMenuToolbar,
            header: this.header,
            rtl: this.rtl,
            searchPanelVariant: this.searchPanelVariant,
            searchOnBtnClick: this.searchOnBtnClick,
            currency: this.currency,
            mainToolbarFixed: this.mainToolbarFixed,
            contentOffsetToTop: this.contentOffsetToTop,
            headerBgImage: this.headerBgImage,
            partnerBar: this.partnerBar,
            socialLinks: this.socialLinks,
            loadMore: this.loadMore,
            pdfs: this.pdfs,
            photos: this.photos,
            videos: this.videos,
            slideShows: this.slideShows,
            caseStudies: this.caseStudies,
            threeSixty: this.threeSixty,
            wiringDiagrams: this.wiringDiagrams,
            customerDrawings: this.customerDrawings,
            brochures: this.brochures,
            selectionGuides: this.selectionGuides,
        };
    }
}

export interface SUSIPartnerDto extends BaseDto {
    id: string;
    url: string;
    email: string;
    phone: string;
    colorPrimary: string;
    colorSecondary: string;
    colorAccent: string;
    //Theme Data
    name: string;
    tagline: string;
    logo: string;
    theme: string;
    toolbar: number;
    stickyMenuToolbar: boolean;                
    header: string;
    rtl: boolean;
    searchPanelVariant: number;
    searchOnBtnClick: boolean;
    currency: string;
    //additional options
    mainToolbarFixed:boolean;
    contentOffsetToTop:boolean;                
    headerBgImage: boolean;
    partnerBar: boolean;
    socialLinks: SocialLinks;
    loadMore: LoadMore;
    pdfs: Pdf[];
    photos: Photos[];
    videos: Videos[];
    slideShows: SlideShows[];
    caseStudies: CaseStudies[];
    threeSixty: threeSixty[];
    wiringDiagrams: WiringDiagrams[];
    customerDrawings: CustomerDrawings[];
    brochures: Brochure[];
    selectionGuides: SelectionGuide[];
}

export interface SocialLinks {
    facebookUrl?: string,
    twitterUrl?: string,
    linkedInUrl?: string,
    youtubeUrl?: string,
}

export interface Pdf {
    id: string,
    name: string,
    url?: string
}

export interface WiringDiagrams {
    id: string,
    name: string,
    url?: string
}

export interface CustomerDrawings {
    id: string,
    name: string,
    url?: string
}

export interface SlideShows {
    id: string,
    name: string,
    url?: string
}

export interface Photos {
    id: string,
    name: string,
    gallery?: string
}

export interface Videos {
    id: string,
    name: string,
    url?: string
}

export interface CaseStudies {
    id: string,
    name: string,
    link?: string
}

export interface threeSixty {
    id: string,
    name: string,
    link?: string
}

export interface SelectionGuide {
    id: string,
    name: string,
    link?: string
}

export interface Brochure {
    id: string,
    name: string,
    link?: string
}

export interface LoadMore {
    start: boolean,
    step: number,
    load: boolean,
    page: number,
    complete: boolean,
    result: number
}

export interface SiteContact {
    start: boolean,
    step: number,
    load: boolean,
    page: number,
    complete: boolean,
    result: number
}

export interface SiteAboutUs {
    start: boolean,
    step: number,
    load: boolean,
    page: number,
    complete: boolean,
    result: number
}

export interface SiteSupport {
    start: boolean,
    step: number,
    load: boolean,
    page: number,
    complete: boolean,
    result: number
}