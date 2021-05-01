export class Series {
    constructor(
        public id: number,
        public productType: string, 
        public productStatus: string[], 
        public commercial: boolean,
        public industrial: boolean,
        public utility: boolean,
        public universities: boolean,
        public title: string, 
        public desc: string,
        public manufacturer: string,
        public type: string,
        public gallery: Gallery[],
        public link: string
            ){ }
}
export class Product {
    constructor(public id: number,
                public title: string, 
                public desc: string,
                public type: string,
                public manufacturer: string,
                public propertyType: string,
                public productType: string[], 
                public city: string,
                public zipCode: string[],
                public neighborhood: string[],
                public street: string[],
                public spin: string,
                public location: Location,
                public formattedAddress: string,
                public features: string[],
                public featured: boolean,
                public priceDollar: Price,
                public priceEuro: Price,
                public bedrooms: number,
                public bathrooms: number,
                public garages: number,
                public area: Area,
                public yearBuilt: number,
                public ratingsCount: number,
                public ratingsValue: number,
                public additionalFeatures: AdditionalFeature[],
                public gallery: Gallery[],
                public plans: Plan[],
                public videos: Video[],
                public published: string,
                public lastUpdate: string,
                public views: number){ }
}

export class Property {
    constructor(public id: number,
                public title: string, 
                public desc: string,
                public type: string,
                public manufacturer: string,
                public propertyType: string,
                public propertyStatus: string[], 
                public city: string,
                public zipCode: string[],
                public neighborhood: string[],
                public street: string[],
                public spin: string,
                public location: Location,
                public formattedAddress: string,
                public features: string[],
                public featured: boolean,
                public priceDollar: Price,
                public priceEuro: Price,
                public bedrooms: number,
                public bathrooms: number,
                public garages: number,
                public area: Area,
                public yearBuilt: number,
                public ratingsCount: number,
                public ratingsValue: number,
                public additionalFeatures: AdditionalFeature[],
                public gallery: Gallery[],
                public plans: Plan[],
                public videos: Video[],
                public published: string,
                public lastUpdate: string,
                public views: number){ }
}

export class Picture {
    constructor(public id: number,
                public name: string, 
                public pictures: Image[]
                ){ }
}

export class Image {
    constructor(
                public src: string, 
                public thumb: string
                ){ }
}

// export class Property {
//     public id: number;
//     public title: string; 
//     public desc: string;
//     public propertyType: string;
//     public propertyStatus: string[];
//     public city: string;
//     public zipCode: string;
//     public neighborhood: string[];
//     public street: string[];
//     public location: Location;
//     public formattedAddress: string;
//     public features: string[];
//     public featured: boolean;
//     public priceDollar: Price;
//     public priceEuro: Price;
//     public bedrooms: number;
//     public bathrooms: number;
//     public garages: number;
//     public area: Area;
//     public yearBuilt: number;
//     public ratingsCount: number;
//     public ratingsValue: number;
//     public additionalFeatures: AdditionalFeature[];
//     public gallery: Gallery[];
//     public plans: Plan[];
//     public videos: Video[];
//     public published: string;
//     public lastUpdate: string;
//     public views: number
// }


export class Area {
    constructor(public id: number, 
                public value: number,
                public unit: string){ }
}

export class AdditionalFeature {
    constructor(public id: number, 
                public name: string,
                public value: string){ }
}

export class Location {
    constructor(public id: number, 
                public lat: number,
                public lng: number){ }
}

export class Price {
    public sale: number;
    public rent: number;
}


export class Gallery {
    constructor(public id: number, 
                public small: string,
                public medium: string,
                public big: string){ }
}

export class Plan {
    constructor(public id: number, 
                public name: string,
                public desc: string,
                public area: Area,
                public rooms: number,
                public baths: number,
                public image: string){ }
}

export class Video {
    constructor(public id: number, 
                public name: string,
                public link: string){ }
}

export class Pagination {
    constructor(public page: number,
                public perPage: number,
                public prePage: number,
                public nextPage: number,
                public total: number,
                public totalPages: number){ }
}

