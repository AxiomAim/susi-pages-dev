import { UUID } from 'angular2-uuid';
import { BaseDatabaseModel, BaseDto } from './base-dto.model';

export class AppSettingsModel extends BaseDatabaseModel {

    constructor(
        id: string, 
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
        mainToolbarFixed:boolean,
        contentOffsetToTop:boolean,                
        headerBgImage: boolean,
        facebookURL: string,
        twitterURL: string,
        linkedInURL: string,
        googlePlusURL: string,
        loadMore: LoadMore
        ) {
        super();
        this.id = id;
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
        this.facebookURL = facebookURL;
        this.twitterURL = twitterURL;
        this.linkedInURL = linkedInURL;
        this.googlePlusURL = googlePlusURL;
        this.loadMore = loadMore;
    }
    public id:string;
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
    public facebookURL: string;
    public twitterURL: string;
    public linkedInURL: string;
    public googlePlusURL: string;
    public loadMore: LoadMore;

    public static fromDto(appSettings: AppSettingsDto): AppSettingsModel {
        return new AppSettingsModel(
            appSettings.id, 
            appSettings.name, 
            appSettings.tagline, 
            appSettings.logo, 
            appSettings.theme, 
            appSettings.toolbar, 
            appSettings.stickyMenuToolbar, 
            appSettings.header, 
            appSettings.rtl, 
            appSettings.searchPanelVariant, 
            appSettings.searchOnBtnClick, 
            appSettings.currency, 
            appSettings.mainToolbarFixed, 
            appSettings.contentOffsetToTop,
            appSettings.headerBgImage,
            appSettings.facebookURL,
            appSettings.twitterURL,
            appSettings.linkedInURL,
            appSettings.googlePlusURL,
            appSettings.loadMore,
            );
    }

    public static emptyDto(): AppSettingsDto {
        const datetime = new Date().toISOString();
        return {
            id: '1',
            name: 'SUSI Adapters',                              // theme name
            tagline: 'Any Meter for Any Panel',                 // theme tagline
            logo: 'assets/images/brands/susi_adapters.png',     // theme logo
            theme: 'susi',                                      // susi, blue, green, red, pink, purple, grey, orange-dark
            toolbar: 1,                                         // 1 or 2  
            stickyMenuToolbar: true,                            // true = sticky, false = not sticky
            header: 'image',                                    // default, image, carousel
            rtl: false,                                         // true = ltr, false = rtl
            searchPanelVariant: 1,                              //  1, 2  or 3
            searchOnBtnClick: false,                            //  true = search on button click
            currency: 'USD',                                    // USD, EUR
            mainToolbarFixed: false,
            contentOffsetToTop: false,        
            headerBgImage: false,
            facebookURL: 'https://www.facebook.com/susiadapters/',
            twitterURL: 'https://twitter.com/susiadapters',
            linkedInURL: 'https://www.linkedin.com/company/susi-adapters/',
            googlePlusURL: '',
            loadMore: {            
                start: false,
                step: 1,
                load: false,
                page: 1,
                complete: false,
                result: 0
            }  
            
        }
    }

    public toDto(): AppSettingsDto {
        return {
            id: this.id,
            name: this.name,
            tagline: this.tagline,
            logo: this.logo,
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
            facebookURL: this.facebookURL,
            twitterURL: this.twitterURL,
            linkedInURL: this.linkedInURL,
            googlePlusURL: this.googlePlusURL,
            loadMore: this.loadMore,
        };
    }
}

export interface AppSettingsDto extends BaseDto {
    id: string, 
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
    mainToolbarFixed:boolean,
    contentOffsetToTop:boolean,                
    headerBgImage: boolean,
    facebookURL: string,
    twitterURL: string,
    linkedInURL: string,
    googlePlusURL: string,
    loadMore: LoadMore
}

export interface LoadMore {
    start: boolean,
    step: number,
    load: boolean,
    page: number,
    complete: boolean,
    result: number
}