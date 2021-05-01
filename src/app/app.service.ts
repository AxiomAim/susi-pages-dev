import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Series, Product, Property, Location } from './app.models';
import { AppSettings } from './app.settings';

export class Data {
  constructor(public products: Product[],
    public properties: Property[],
    public compareList: Property[],
    public favorites: Property[],
    public locations: Location[]) { }
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public Data = new Data(
    [], // products
    [], // properties
    [], // compareList
    [], // favorites
    []  // locations
  )
  public url = "assets/data/";
  public apiKey = 'AIzaSyAir4tXhx3X-wcdZnhe8TLlo9J2m_AKx6w';

  constructor(public http: HttpClient,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar,
    public appSettings: AppSettings) { }

  public getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.url + 'susi-series.json');
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'products.json');
  }

  public getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + 'properties.json');
  }

  public getPropertyById(id): Observable<Property> {
    return this.http.get<Property>(this.url + 'property-' + id + '.json');
  }

  public getFeaturedProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + 'featured-properties.json');
  }

  public getRelatedProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + 'related-properties.json');
  }

  public getPropertiesByAgentId(agentId): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + 'properties-agentid-' + agentId + '.json');
  }

  public getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.url + 'locations.json');
  }

  public getAddress(lat = 40.714224, lng = -73.961452) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey);
  }

  public getLatLng(address) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=' + this.apiKey + '&address=' + address);
  }

  public getFullAddress(lat = 40.714224, lng = -73.961452) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey).subscribe(data => {
      return data['results'][0]['formatted_address'];
    });
  }

  public addToCompare(property: Property, component, direction) {
    if (!this.Data.compareList.filter(item => item.id == property.id)[0]) {
      this.Data.compareList.push(property);
      this.bottomSheet.open(component, {
        direction: direction
      }).afterDismissed().subscribe(isRedirect => {
        if (isRedirect) {
          window.scrollTo(0, 0);
        }
      });
    }
  }

  public addToFavorites(property: Property, direction) {
    if (!this.Data.favorites.filter(item => item.id == property.id)[0]) {
      this.Data.favorites.push(property);
      this.snackBar.open('The property "' + property.title + '" has been added to favorites.', '×', {
        verticalPosition: 'top',
        duration: 3000,
        direction: direction
      });
    }
  }

  public getPropertyTypes() {
    return [
      { id: 1, name: 'Office' },
      { id: 2, name: 'House' },
      { id: 3, name: 'Apartment' }
    ]
  }

  public getPropertyStatuses() {
    return [
      { id: 1, name: 'For Sale' },
      { id: 2, name: 'For Rent' },
      { id: 3, name: 'Open House' },
      { id: 4, name: 'No Fees' },
      { id: 5, name: 'Hot Offer' },
      { id: 6, name: 'Sold' }
    ]
  }

  public getCities() {
    return [
      { id: 1, name: 'New York' },
      { id: 2, name: 'Chicago' },
      { id: 3, name: 'Los Angeles' },
      { id: 4, name: 'Seattle' }
    ]
  }

  public getNeighborhoods() {
    return [
      { id: 1, name: 'Astoria', cityId: 1 },
      { id: 2, name: 'Midtown', cityId: 1 },
      { id: 3, name: 'Chinatown', cityId: 1 },
      { id: 4, name: 'Austin', cityId: 2 },
      { id: 5, name: 'Englewood', cityId: 2 },
      { id: 6, name: 'Riverdale', cityId: 2 },
      { id: 7, name: 'Hollywood', cityId: 3 },
      { id: 8, name: 'Sherman Oaks', cityId: 3 },
      { id: 9, name: 'Highland Park', cityId: 3 },
      { id: 10, name: 'Belltown', cityId: 4 },
      { id: 11, name: 'Queen Anne', cityId: 4 },
      { id: 12, name: 'Green Lake', cityId: 4 }
    ]
  }

  public getStreets() {
    return [
      { id: 1, name: 'Astoria Street #1', cityId: 1, neighborhoodId: 1 },
      { id: 2, name: 'Astoria Street #2', cityId: 1, neighborhoodId: 1 },
      { id: 3, name: 'Midtown Street #1', cityId: 1, neighborhoodId: 2 },
      { id: 4, name: 'Midtown Street #2', cityId: 1, neighborhoodId: 2 },
      { id: 5, name: 'Chinatown Street #1', cityId: 1, neighborhoodId: 3 },
      { id: 6, name: 'Chinatown Street #2', cityId: 1, neighborhoodId: 3 },
      { id: 7, name: 'Austin Street #1', cityId: 2, neighborhoodId: 4 },
      { id: 8, name: 'Austin Street #2', cityId: 2, neighborhoodId: 4 },
      { id: 9, name: 'Englewood Street #1', cityId: 2, neighborhoodId: 5 },
      { id: 10, name: 'Englewood Street #2', cityId: 2, neighborhoodId: 5 },
      { id: 11, name: 'Riverdale Street #1', cityId: 2, neighborhoodId: 6 },
      { id: 12, name: 'Riverdale Street #2', cityId: 2, neighborhoodId: 6 },
      { id: 13, name: 'Hollywood Street #1', cityId: 3, neighborhoodId: 7 },
      { id: 14, name: 'Hollywood Street #2', cityId: 3, neighborhoodId: 7 },
      { id: 15, name: 'Sherman Oaks Street #1', cityId: 3, neighborhoodId: 8 },
      { id: 16, name: 'Sherman Oaks Street #2', cityId: 3, neighborhoodId: 8 },
      { id: 17, name: 'Highland Park Street #1', cityId: 3, neighborhoodId: 9 },
      { id: 18, name: 'Highland Park Street #2', cityId: 3, neighborhoodId: 9 },
      { id: 19, name: 'Belltown Street #1', cityId: 4, neighborhoodId: 10 },
      { id: 20, name: 'Belltown Street #2', cityId: 4, neighborhoodId: 10 },
      { id: 21, name: 'Queen Anne Street #1', cityId: 4, neighborhoodId: 11 },
      { id: 22, name: 'Queen Anne Street #2', cityId: 4, neighborhoodId: 11 },
      { id: 23, name: 'Green Lake Street #1', cityId: 4, neighborhoodId: 12 },
      { id: 24, name: 'Green Lake Street #2', cityId: 4, neighborhoodId: 12 }
    ]
  }

  public getFeatures() {
    return [
      { id: 1, name: 'Air Conditioning', selected: false },
      { id: 2, name: 'Barbeque', selected: false },
      { id: 3, name: 'Dryer', selected: false },
      { id: 4, name: 'Microwave', selected: false },
      { id: 5, name: 'Refrigerator', selected: false },
      { id: 6, name: 'TV Cable', selected: false },
      { id: 7, name: 'Sauna', selected: false },
      { id: 8, name: 'WiFi', selected: false },
      { id: 9, name: 'Fireplace', selected: false },
      { id: 10, name: 'Swimming Pool', selected: false },
      { id: 11, name: 'Gym', selected: false },
    ]
  }


  public getHomeCarouselSlides() {
    return this.http.get<any[]>(this.url + 'slides.json');
  }


  public filterData(data, params: any, sort?, page?, perPage?) {


    if (params) {

      if (params.propertyType) {
        data = data.filter(property => property.propertyType == params.propertyType.name)
      }

      if (params.propertyStatus && params.propertyStatus.length) {
        let statuses = [];
        params.propertyStatus.forEach(status => { statuses.push(status.name) });
        let properties = [];
        data.filter(property =>
          property.propertyStatus.forEach(status => {
            if (statuses.indexOf(status) > -1) {
              if (!properties.includes(property)) {
                properties.push(property);
              }
            }
          })
        );
        data = properties;
      }

      if (params.price) {
        if (this.appSettings.settings.currency == 'USD') {
          if (params.price.from) {
            data = data.filter(property => {
              if (property.priceDollar.sale && property.priceDollar.sale >= params.price.from) {
                return true;
              }
              if (property.priceDollar.rent && property.priceDollar.rent >= params.price.from) {
                return true;
              }
              return false;
            });
          }
          if (params.price.to) {
            data = data.filter(property => {
              if (property.priceDollar.sale && property.priceDollar.sale <= params.price.to) {
                return true;
              }
              if (property.priceDollar.rent && property.priceDollar.rent <= params.price.to) {
                return true;
              }
              return false;
            });
          }
        }
        if (this.appSettings.settings.currency == 'EUR') {
          if (params.price.from) {
            data = data.filter(property => {
              if (property.priceEuro.sale && property.priceEuro.sale >= params.price.from) {
                return true;
              }
              if (property.priceEuro.rent && property.priceEuro.rent >= params.price.from) {
                return true;
              }
              return false;
            });

          }
          if (params.price.to) {
            data = data.filter(property => {
              if (property.priceEuro.sale && property.priceEuro.sale <= params.price.to) {
                return true;
              }
              if (property.priceEuro.rent && property.priceEuro.rent <= params.price.to) {
                return true;
              }
              return false;
            });
          }
        }
      }

      if (params.utility) {
        data = data.filter(series => series.utility == true)
      }

      if (params.industrial) {
        data = data.filter(series => series.industrial == true)
      }

      if (params.commercial) {
        data = data.filter(series => series.commercial == true)
      }

      if (params.universities) {
        data = data.filter(series => series.universities == true)
      }

      if (params.city) {
        data = data.filter(property => property.city == params.city.name)
      }

      if (params.zipCode) {
        data = data.filter(property => property.zipCode == params.zipCode)
      }

      if (params.neighborhood && params.neighborhood.length) {
        let neighborhoods = [];
        params.neighborhood.forEach(item => { neighborhoods.push(item.name) });
        let properties = [];
        data.filter(property =>
          property.neighborhood.forEach(item => {
            if (neighborhoods.indexOf(item) > -1) {
              if (!properties.includes(property)) {
                properties.push(property);
              }
            }
          })
        );
        data = properties;
      }

      if (params.street && params.street.length) {
        let streets = [];
        params.street.forEach(item => { streets.push(item.name) });
        let properties = [];
        data.filter(property =>
          property.street.forEach(item => {
            if (streets.indexOf(item) > -1) {
              if (!properties.includes(property)) {
                properties.push(property);
              }
            }
          })
        );
        data = properties;
      }

      if (params.bedrooms) {
        if (params.bedrooms.from) {
          data = data.filter(property => property.bedrooms >= params.bedrooms.from)
        }
        if (params.bedrooms.to) {
          data = data.filter(property => property.bedrooms <= params.bedrooms.to)
        }
      }

      if (params.bathrooms) {
        if (params.bathrooms.from) {
          data = data.filter(property => property.bathrooms >= params.bathrooms.from)
        }
        if (params.bathrooms.to) {
          data = data.filter(property => property.bathrooms <= params.bathrooms.to)
        }
      }

      if (params.garages) {
        if (params.garages.from) {
          data = data.filter(property => property.garages >= params.garages.from)
        }
        if (params.garages.to) {
          data = data.filter(property => property.garages <= params.garages.to)
        }
      }

      if (params.area) {
        if (params.area.from) {
          data = data.filter(property => property.area.value >= params.area.from)
        }
        if (params.area.to) {
          data = data.filter(property => property.area.value <= params.area.to)
        }
      }

      if (params.yearBuilt) {
        if (params.yearBuilt.from) {
          data = data.filter(property => property.yearBuilt >= params.yearBuilt.from)
        }
        if (params.yearBuilt.to) {
          data = data.filter(property => property.yearBuilt <= params.yearBuilt.to)
        }
      }

      if (params.features) {
        let arr = [];
        params.features.forEach(feature => {
          if (feature.selected)
            arr.push(feature.name);
        });
        if (arr.length > 0) {
          let properties = [];
          data.filter(property =>
            property.features.forEach(feature => {
              if (arr.indexOf(feature) > -1) {
                if (!properties.includes(property)) {
                  properties.push(property);
                }
              }
            })
          );
          data = properties;
        }

      }

    }

    // console.log(data)

    //for show more properties mock data 
    for (var index = 0; index < 2; index++) {
      data = data.concat(data);
    }

    this.sortData(sort, data);
    return this.paginator(data, page, perPage)
  }

  public sortData(sort, data) {
    if (sort) {
      switch (sort) {
        case 'Newest':
          data = data.sort((a, b) => { return <any>new Date(b.published) - <any>new Date(a.published) });
          break;
        case 'Oldest':
          data = data.sort((a, b) => { return <any>new Date(a.published) - <any>new Date(b.published) });
          break;
        case 'Popular':
          data = data.sort((a, b) => {
            if (a.ratingsValue / a.ratingsCount < b.ratingsValue / b.ratingsCount) {
              return 1;
            }
            if (a.ratingsValue / a.ratingsCount > b.ratingsValue / b.ratingsCount) {
              return -1;
            }
            return 0;
          });
          break;
        case 'Price (Low to High)':
          if (this.appSettings.settings.currency == 'USD') {
            data = data.sort((a, b) => {
              if ((a.priceDollar.sale || a.priceDollar.rent) > (b.priceDollar.sale || b.priceDollar.rent)) {
                return 1;
              }
              if ((a.priceDollar.sale || a.priceDollar.rent) < (b.priceDollar.sale || b.priceDollar.rent)) {
                return -1;
              }
              return 0;
            })
          }
          if (this.appSettings.settings.currency == 'EUR') {
            data = data.sort((a, b) => {
              if ((a.priceEuro.sale || a.priceEuro.rent) > (b.priceEuro.sale || b.v.rent)) {
                return 1;
              }
              if ((a.priceEuro.sale || a.priceEuro.rent) < (b.priceEuro.sale || b.priceEuro.rent)) {
                return -1;
              }
              return 0;
            })
          }
          break;
        case 'Price (High to Low)':
          if (this.appSettings.settings.currency == 'USD') {
            data = data.sort((a, b) => {
              if ((a.priceDollar.sale || a.priceDollar.rent) < (b.priceDollar.sale || b.priceDollar.rent)) {
                return 1;
              }
              if ((a.priceDollar.sale || a.priceDollar.rent) > (b.priceDollar.sale || b.priceDollar.rent)) {
                return -1;
              }
              return 0;
            })
          }
          if (this.appSettings.settings.currency == 'EUR') {
            data = data.sort((a, b) => {
              if ((a.priceEuro.sale || a.priceEuro.rent) < (b.priceEuro.sale || b.v.rent)) {
                return 1;
              }
              if ((a.priceEuro.sale || a.priceEuro.rent) > (b.priceEuro.sale || b.priceEuro.rent)) {
                return -1;
              }
              return 0;
            })
          }
          break;
        default:
          break;
      }
    }
    return data;
  }

  public paginator(items, page?, perPage?) {
    var page = page || 1,
      perPage = perPage || 4,
      offset = (page - 1) * perPage,
      paginatedItems = items.slice(offset).slice(0, perPage),
      totalPages = Math.ceil(items.length / perPage);
    return {
      data: paginatedItems,
      pagination: {
        page: page,
        perPage: perPage,
        prePage: page - 1 ? page - 1 : null,
        nextPage: (totalPages > page) ? page + 1 : null,
        total: items.length,
        totalPages: totalPages,
      }
    };
  }



  public getTestimonials() {
    return [
      {
        text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
        author: 'Mr. Adam Sandler',
        position: 'Schneider Electric',
        image: 'assets/images/brands/susi_schneider.png'
      },
      {
        text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
        author: 'Ashley Ahlberg',
        position: 'Eaton',
        image: 'assets/images/brands/susi_eaton.png'
      },
      {
        text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
        author: 'Bruno Vespa',
        position: 'Blogger',
        image: 'assets/images/brands/susi_itron.png'
      },
      {
        text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
        author: 'Mrs. Julia Aniston',
        position: 'Marketing Manager',
        image: 'assets/images/brands/susi_aclara.png'
      }
    ];
  }



  public getAgents() {
    return [
      {
        id: 1,
        fullName: 'Chris Matthews',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'SUSI Adapters',
        title: 'CEO',
        email: 'chris@susiadapters.com',
        phone: '(770) 448-6810',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: 'https://susiadapters.com'
        },
        ratingsCount: 6,
        ratingsValue: 480,
        image: 'assets/images/agents/a-2.jpg'
      },
      {
        id: 2,
        fullName: 'Mary Matthews',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'SUSI Adapters',
        title: 'Operations',
        email: 'mary@susiadapters.com',
        phone: '(770) 448-6810',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: ''
        },
        ratingsCount: 4,
        ratingsValue: 400,
        image: 'assets/images/agents/a-1.jpg'
      },
      {
        id: 3,
        fullName: 'JD Rutledge',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'SUSI Adapters',
        title: 'Sales',
        email: 'sales@susiadapters.com',
        phone: '(770) 448-6810',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: ''
        },
        ratingsCount: 4,
        ratingsValue: 380,
        image: 'assets/images/agents/a-4.jpg'
      },
      {
        id: 4,
        fullName: 'Brent Hendrickson',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'SUSI Adapters',
        title: 'Sales',
        email: 'sales@susiadapters.com',
        phone: '(770) 448-6810',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: ''
        },
        ratingsCount: 6,
        ratingsValue: 480,
        image: 'assets/images/agents/a-4.jpg'
      },
      {
        id: 5,
        fullName: 'Alice Powell',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'SUSI Adapters',
        title: 'Accountant',
        email: 'accounting@susiadapters.com',
        phone: '(770) 448-6810',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: ''
        },
        ratingsCount: 6,
        ratingsValue: 480,
        image: 'assets/images/agents/a-5.jpg'
      }
    ];
  }

  public getApplications() {
    return [
      {
        id: 1,
        name: 'Utility',
        image: 'assets/images/susi/susi_solutions/utility.jpg',
        link: 'applications-utility'
      },
      {
        id: 2,
        name: 'Industrial',
        image: 'assets/images/susi/susi_solutions/industrial.jpg',
        link: 'applications-industrial'
      },
      {
        id: 3,
        name: 'Commercial',
        image: 'assets/images/susi/susi_solutions/commercial.jpg',
        link: 'applications-commercial'
      },
      {
        id: 4,
        name: 'Universities',
        image: 'assets/images/susi/susi_solutions/universities.jpg',
        link: 'applications-universities'
      }
    ];
  }

  public getBenefits() {
    return [
      {
        id: 1,
        title: 'SUSI Adapters',
        description: 'Any Meter on Any Panel with SUSI Adapters',
        icon: 'susi'
        // title: 'MMGA',
        // description: 'Make Metering Great Again',
        // icon: 'lightbulb',
      },
      {
        id: 2,
        title: 'Save Money',
        description: 'Lowest cost upgrade path (Retrofit or New)',
        icon: 'monetization_on',
      },
      {
        id: 3,
        title: 'Trusted Quality',
        description: 'Since 1995 with patented solutions',
        icon: 'verified_user',
      },
      {
        id: 4,
        title: 'No Power Outage or Re-wiring',
        description: 'Easy Installation',
        icon: 'thumb_up',
      },
      {
        id: 5,
        title: 'Install in Minutes',
        description: 'Socket and Panel meters install in minutes NOT hours',
        icon: 'alarm',
      },
      {
        id: 6,
        title: 'Future Interchangeability',
        description: 'Lower cost Meter Maintenance, Repair and Upgrade',
        icon: 'build_circle',
      }
    ];
  }

  public getReps() {
    return [
      {
        id: 1,
        fullName: 'Leidy Engineering',
        desc: '127 South Main St., North Canton, OH 44720',
        organization: 'Leidy Engineering Sales, Inc.',
        title: 'SUSI Representative',
        email: 'office@leidysales.com',
        phone: '(330) 497-9585',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: 'https://www.leidysales.com'
        },
        ratingsCount: 6,
        ratingsValue: 480,
        image: 'assets/images/susi/reps/rep-1.jpg',
        logo: 'assets/images/manufacturer_reps/rep_leidy.png'
      },
      {
        id: 2,
        fullName: 'McAvoy And Markham',
        desc: '16 Technology Dr #113, Irvine, CA 92618',
        organization: 'McAvoy And Markham Engineering & Sales',
        title: 'SUSI Representative',
        email: 'sales@mcavoy-markham.com',
        phone: '(949) 727-3966',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: 'https://www.mcavoy-markham.com'
        },
        ratingsCount: 4,
        ratingsValue: 400,
        image: 'assets/images/susi/reps/rep-2.jpg',
        logo: 'assets/images/manufacturer_reps/rep_mcavaoy-markham.png'

      },
    ];
  }
  //////SUSI ADAPTERS///////////////////////////////////////////////////////

  public getProductTypeList() {
    return [
      { id: "LB", name: 'LB - Load Boxes' },
      { id: "P", name: 'P - Plates' },
      { id: "PS", name: 'PS - Panel Socket' },
      { id: "SWA", name: 'SWA - Flush Mount Adapters' },
      { id: "SWB", name: 'SWB - Surface Mount Adapters' },
      { id: "SWC", name: 'SWC - Cases' },
      { id: "SWD", name: 'SWD - Retrofit Panel Adapters' },
      { id: "SWF", name: 'SWF - Non Case Adapters' },
      { id: "SWII", name: 'SWII - Integrated ION Adapters' },
      { id: "SWIE", name: 'SWIE - Integrated EM920 Adapters' },
      { id: "SWIN", name: 'SWIN - Integrated NEXUS Adapters' },
      { id: "SWL", name: 'SWL - Relay Adapters' },
      { id: "SWR", name: 'SWR - Retrofit Socket Adapters' },
      { id: "SWS", name: 'SWS - Swocket Socket Adapters' }
    ]
  }

  public getOldMeterList() {
    return [
      { id: "GE", name: 'GE - General Electric' },
      { id: "WH", name: 'WH - Westinghouse' },
      { id: "AO", name: 'AO - All Others' }
    ]
  }

  public getCustomers() {
    return [
      {
        id: 1, name: 'IOUs',
        items: [
          { id: 1, name: 'AEP' },
          { id: 2, name: 'Alliant Energy' },
          { id: 3, name: 'Cinergy' },
          { id: 4, name: 'Duke Electric Corporation' },
          { id: 5, name: 'Louisville Gas & Electric' },
          { id: 6, name: 'Maine Public Service Company' },
          { id: 7, name: 'Minnesota Power' },
          { id: 8, name: 'PGE' },
          { id: 9, name: 'Progress Energy' },
          { id: 10, name: 'Southern Company' },
          { id: 11, name: 'Utah Power' }
        ],
      },
      {
        id: 2, name: 'Meter Manufacturers',
        item: [
          { id: 1, name: 'Ametek Power Instruments' },
          { id: 2, name: 'Electro Industries' },
          { id: 3, name: 'General Electric' },
          { id: 4, name: 'Itron' },
          { id: 5, name: 'Landis + Gyr' },
          { id: 6, name: 'SATEC' },
          { id: 7, name: 'Schnieder Electric' },
          { id: 8, name: 'Schweitzer Engineering Lab' },
          { id: 9, name: 'Sensus Meters' },
          { id: 10, name: 'Siemens' }
        ]
      },
      {
        id: 3, name: 'COOPs',
        item: [
          { id: 1, name: 'Arkansas Electric COOP, Inc.' },
          { id: 2, name: 'Big Bend Electric COOP, Inc.' },
          { id: 3, name: 'Florida Keys Electric COOP' },
          { id: 4, name: 'Midstate Electric COOP' },
          { id: 5, name: 'Minnkota Power COOP' },
          { id: 6, name: 'South Plains Electric COOP' },
          { id: 7, name: 'Texas Electric COOP' },
          { id: 8, name: 'Union Power COOP' }
        ]
      },
      {
        id: 4, name: 'Industrial',
        item: [
          { id: 1, name: 'ArcelorMittal Dofasco Steel' },
          { id: 2, name: 'Birmingham Control Systems' },
          { id: 3, name: 'Cisco Systems' },
          { id: 4, name: 'Gautier Steel' },
          { id: 5, name: 'General Motors' },
          { id: 6, name: 'International Paper' },
          { id: 7, name: 'Johnston Controls, Inc.' },
          { id: 8, name: 'Reedy Creek Energy Services' },
          { id: 9, name: 'Wake Forest University' },
          { id: 10, name: 'Baptist Medical Center' }
        ]
      },
      {
        id: 5, name: 'Colleges & Universities',
        item: [
          { id: 1, name: 'Catholic University' },
          { id: 2, name: 'Dartmouth University' },
          { id: 3, name: 'Emory University' },
          { id: 4, name: 'Harvard University' },
          { id: 5, name: 'Indiana University' },
          { id: 6, name: 'University of Central Florida' },
          { id: 7, name: 'University of Maryland' },
          { id: 8, name: 'Princeton University' },
          { id: 9, name: 'University of Texas' },
          { id: 10, name: 'Virginia Tech' }
        ]
      },
      {
        id: 6, name: 'Government & International',
        item: [
          { id: 1, name: 'Arabia Electric Company' },
          { id: 2, name: 'Bangladesh Electric Company' },
          { id: 3, name: 'Bonneville Power Authority' },
          { id: 4, name: 'Columbus Air Force Base' },
          { id: 5, name: 'Glen Canyon National Recreation Area' },
          { id: 6, name: 'Langley (VA) Air Force Base' },
          { id: 7, name: 'Naval Base San Diego (CA)' },
          { id: 8, name: 'Oak Ridge National Laboratory' },
          { id: 9, name: 'Tennesee Valley Authority' },
          { id: 10, name: 'TIEPCO/Saudi Arabia' },
          { id: 10, name: 'Trinidad & Tobago Electric Company' }
        ]
      },
      {
        id: 7, name: 'Municipals',
        item: [
          { id: 1, name: 'Alameda (CA) Power & Telecom' },
          { id: 2, name: 'American Municipal Power (OH)' },
          { id: 3, name: 'City of Burbank, Ca' },
          { id: 4, name: 'City of Idaho Falls, Ia.' },
          { id: 5, name: 'City of Kalamazoo, Mi.' },
          { id: 6, name: 'Memphis Light, Gas & Power' },
          { id: 7, name: 'San Diego Gas/Electric' },
          { id: 8, name: 'Tacoma Power' },
          { id: 9, name: 'City of Tallahasse, Fl.' },
          { id: 10, name: 'Wallingford Electric, Co.' },
          { id: 10, name: 'City of Wilson, NC' },
          { id: 10, name: 'Wilton Light/Power, Ia.' }
        ]
      }
    ]
  }
  public getCustomersIOU() {
    return [
      { id: 1, name: 'AEP' },
      { id: 2, name: 'Alliant Energy' },
      { id: 3, name: 'Cinergy' },
      { id: 4, name: 'Duke Electric Corporation' },
      { id: 5, name: 'Louisville Gas & Electric' },
      { id: 6, name: 'Maine Public Service Company' },
      { id: 7, name: 'Minnesota Power' },
      { id: 8, name: 'PGE' },
      { id: 9, name: 'Progress Energy' },
      { id: 10, name: 'Southern Company' },
      { id: 11, name: 'Utah Power' }
    ]
  }


  public getCustomersCOOP() {
    return [
      { id: 1, name: 'Arkansas Electric COOP, Inc.' },
      { id: 2, name: 'Big Bend Electric COOP, Inc.' },
      { id: 3, name: 'Florida Keys Electric COOP' },
      { id: 4, name: 'Midstate Electric COOP' },
      { id: 5, name: 'Minnkota Power COOP' },
      { id: 6, name: 'South Plains Electric COOP' },
      { id: 7, name: 'Texas Electric COOP' },
      { id: 8, name: 'Union Power COOP' }
    ]
  }

  public getCustomersIndustrial() {
    return [
      { id: 1, name: 'ArcelorMittal Dofasco Steel' },
      { id: 2, name: 'Birmingham Control Systems' },
      { id: 3, name: 'Cisco Systems' },
      { id: 4, name: 'Gautier Steel' },
      { id: 5, name: 'General Motors' },
      { id: 6, name: 'International Paper' },
      { id: 7, name: 'Johnston Controls, Inc.' },
      { id: 8, name: 'Reedy Creek Energy Services' },
      { id: 9, name: 'Wake Forest University' },
      { id: 10, name: 'Baptist Medical Center' }
    ]
  }

  public getCustomersColleges() {
    return [
      { id: 1, name: 'Catholic University' },
      { id: 2, name: 'Dartmouth University' },
      { id: 3, name: 'Emory University' },
      { id: 4, name: 'Harvard University' },
      { id: 5, name: 'Indiana University' },
      { id: 6, name: 'University of Central Florida' },
      { id: 7, name: 'University of Maryland' },
      { id: 8, name: 'Princeton University' },
      { id: 9, name: 'University of Texas' },
      { id: 10, name: 'Virginia Tech' }
    ]
  }

  public getCustomersGovernment() {
    return [
      { id: 1, name: 'Arabia Electric Company' },
      { id: 2, name: 'Bangladesh Electric Company' },
      { id: 3, name: 'Bonneville Power Authority' },
      { id: 4, name: 'Columbus Air Force Base' },
      { id: 5, name: 'Glen Canyon National Recreation Area' },
      { id: 6, name: 'Langley (VA) Air Force Base' },
      { id: 7, name: 'Naval Base San Diego (CA)' },
      { id: 8, name: 'Oak Ridge National Laboratory' },
      { id: 9, name: 'Tennesee Valley Authority' },
      { id: 10, name: 'TIEPCO/Saudi Arabia' },
      { id: 10, name: 'Trinidad & Tobago Electric Company' }
    ]
  }

  public getCustomersMunicipals() {
    return [
      { id: 1, name: 'Alameda (CA) Power & Telecom' },
      { id: 2, name: 'American Municipal Power (OH)' },
      { id: 3, name: 'City of Burbank, Ca' },
      { id: 4, name: 'City of Idaho Falls, Ia.' },
      { id: 5, name: 'City of Kalamazoo, Mi.' },
      { id: 6, name: 'Memphis Light, Gas & Power' },
      { id: 7, name: 'San Diego Gas/Electric' },
      { id: 8, name: 'Tacoma Power' },
      { id: 9, name: 'City of Tallahasse, Fl.' },
      { id: 10, name: 'Wallingford Electric, Co.' },
      { id: 10, name: 'City of Wilson, NC' },
      { id: 10, name: 'Wilton Light/Power, Ia.' }
    ]
  }

  public getNewBrandList() {
    return [
      { id: "AC", name: 'AC - Aclara' },
      { id: "AE", name: 'AE - AccuEnergy' },
      { id: "AM", name: 'AM - Ametek' },
      { id: "BI", name: 'BI - Bitronics' },
      { id: "CR", name: 'CR - Crompton' },
      { id: "EA", name: 'EA - Eaton' },
      { id: "EI", name: 'EI - Electro Ind.' },
      { id: "GE", name: 'GE - General Electric' },
      { id: "HW", name: 'HW - Honeywell' },
      { id: "IT", name: 'IT - Itron' },
      { id: "JA", name: 'JA - Janitza' },
      { id: "LG", name: 'LG - Landis+Gyr' },
      { id: "RA", name: 'RA - Rockwell Automation' },
      { id: "SA", name: 'SA - SATEC' },
      { id: "SC", name: 'SC - Schneider' },
      { id: "SI", name: 'SI - Siemens' },
      { id: "SU", name: 'SU - SUSI' }
    ]
  }

  public getProductPartner() {
    return [
      { id: "AC", name: 'AC - Aclara' },
      { id: "AE", name: 'AE - AccuEnergy' },
      { id: "AM", name: 'AM - Ametek' },
      { id: "BI", name: 'BI - Bitronics' },
      { id: "CR", name: 'CR - Crompton' },
      { id: "EA", name: 'EA - Eaton' },
      { id: "EI", name: 'EI - Electro Ind.' },
      { id: "GE", name: 'GE - General Electric' },
      { id: "HW", name: 'HW - Honeywell' },
      { id: "IT", name: 'IT - Itron' },
      { id: "JA", name: 'JA - Janitza' },
      { id: "LG", name: 'LG - Landis+Gyr' },
      { id: "RA", name: 'RA - Rockwell Automation' },
      { id: "SA", name: 'SA - SATEC' },
      { id: "SC", name: 'SC - Schneider' },
      { id: "SI", name: 'SI - Siemens' },
      { id: "SU", name: 'SU - SUSI' }
    ]
  }

  public getPartners() {
    return [
      { id: "AE", name: 'AccuEnergy', image: 'assets/images/brands/susi_accuenergy.png', url: 'https://accuenergyadapters.com/' },
      { id: "AC", name: 'Aclara', image: 'assets/images/brands/susi_aclara.png', url: 'http://aclaraadapters.com/' },
      { id: "AM", name: 'Ametek', image: 'assets/images/brands/susi_ametek.png', url: 'http://ametekadapters.com' },
      { id: "BI", name: 'Bitronics', image: 'assets/images/brands/susi_bitronics.png', url: 'http://bitronicsadapters.com' },
      { id: "CR", name: 'Crompton', image: 'assets/images/brands/susi_crompton.png', url: 'http://cromptonadapters.com' },
      { id: "EA", name: 'Eaton', image: 'assets/images/brands/susi_eaton.png', url: 'http://eatonadapters.com' },
      { id: "EI", name: 'Electro Ind.', image: 'assets/images/brands/susi_electro.png', url: 'http://electroindadapters.com/' },
      { id: "EL", name: 'Elster', image: 'assets/images/brands/susi_elster.png', url: 'http://elsteradapters.com' },
      { id: "GE", name: 'General Electric', image: 'assets/images/brands/susi_ge.png', url: 'http://geadapters.com' },
      { id: "IT", name: 'Itron', image: 'assets/images/brands/susi_itron.png', url: 'http://itronadapters.com' },
      { id: "LG", name: 'Landis+Gyr', image: 'assets/images/brands/susi_landis.png', url: 'http://landisgyradapters.com' },
      { id: "RA", name: 'Rockwell Automation', image: 'assets/images/brands/susi_ra.png', url: 'http://raadapters.com' },
      { id: "SA", name: 'SATEC', image: 'assets/images/brands/susi_satec.png', url: 'http://satecadapters.com' },
      { id: "SC", name: 'Schneider', image: 'assets/images/brands/susi_schneider.png', url: 'http://schneideradapters.com' },
      { id: "SI", name: 'Siemens', image: 'assets/images/brands/susi_siemens.png', url: 'http://siemensadapters.com' }
    ];
  }

  public getDistributors() {
    return [
      { 
        id: 1, 
        name: 'Anixter', 
        image: 'assets/images/distributors/dist_anixter.png', 
        url: 'https://www.anixter.com/en_us/about-us/contact-us.html'
       },
      { id: 2, name: 'Border States', image: 'assets/images/distributors/dist_border-states.png', url: 'https://solutions.borderstates.com/locations/' },
      { id: 3, name: 'Champion Charter', image: 'assets/images/distributors/dist_champion-charter.png', url: 'http://www.champion-charter.com/company/our-locations' },
      { 
        id: 4, 
        name: 'DCS Morgan', 
        image: 'assets/images/distributors/dist_dcs_morgan.png', 
        url: null,
        address: '11 East Rustle Way Grapeview, WA 98546',
        phone: '503-266-8077',
        mobile: '206-818-8005',
        email: 'hunters@DCS-Morgan.com'
      },
      { id: 4, name: 'Fletcher=Reinhardt', image: 'assets/images/distributors/dist_fletcher-reinhardt.png', url: 'https://www.fr-electric.com/index.jsp?path=locations' },
      { id: 5, name: 'Gexpro', image: 'assets/images/distributors/dist_gexpro.png', url: 'https://www.gexpro.com/usg/store-finder' },
      { id: 6, name: 'General Pacific', image: 'assets/images/distributors/dist_general-pacific.png', url: 'https://www.generalpacific.com/' },
      { id: 7, name: 'HD Supply', image: 'assets/images/distributors/dist_hd-supply.png', url: 'https://hdsupply.com/locations/' },
      { id: 8, name: 'Hotline Elec Sales', image: 'assets/images/distributors/dist_hotline.png', url: 'http://www.hotlineelectrical.com/' },
      { id: 9, name: 'Hughes', image: 'assets/images/distributors/dist_hughes.png', url: 'https://hughessupply.com/' },
      { id: 10, name: 'IRBY', image: 'assets/images/distributors/dist_irby.png', url: 'https://www.irby.com/about/locations' },
      { id: 12, name: 'Power Line Supply Co.', image: 'assets/images/distributors/dist_power_line.png', url: 'http://u-s-c-co.com/' },
      { id: 13, name: 'Rumsey', image: 'assets/images/distributors/dist_rumsey.png', url: 'https://www.rumsey.com/' },
      { id: 14, name: 'Texas Meter & Device', image: 'assets/images/distributors/dist_tmd.png', url: 'http://texasmeter.com/' },
      { id: 15, name: 'Van Wert', image: 'assets/images/distributors/dist_vw.png', url: 'http://vanwertinc.com' },
      { id: 16, name: 'Walters Wholesale', image: 'assets/images/distributors/dist_walters.png', url: 'https://www.walterswholesale.com/' },
      { id: 17, name: 'WESCOM', image: 'assets/images/distributors/dist_wesco.png', url: 'https://www.wesco.com/' },
      { id: 18, name: 'WIE', image: 'assets/images/distributors/dist_wie.png', url: 'https://www.wieinc.com/' },
    ];
  }
  public setPartners() {
    return [
      {
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
        photos: [
          {
            id: 1,
            name: '',
            gallery: [
              {
                link: '',
                preview: ''
              },
              {
                link: '',
                preview: ''
              }
            ]
          }
        ],
        videos: [
          {
            id: 1,
            name: '',
            url: ''
          }
        ],
        slideShows: [
          {
            id: 1,
            name: '',
            url: ''
          }
        ],
        caseStudies: [
          {
            id: 1,
            name: '',
            url: ''
          }
        ],
        wiringDiagrams: [],
        customerDrawings: [],
        brochures: [],
        selectionGuides: []
      }

    ];
  }

  public getPictures(): Observable<any> {
    const pictures = [
      {
        id: 1,
        name: 'LB-300',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348182/susi_2020_website/pictures/LB-300/LB-300.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348182/susi_2020_website/pictures/LB-300/LB-300.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348182/susi_2020_website/pictures/LB-300/LB-300_90.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348182/susi_2020_website/pictures/LB-300/LB-300_90.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348182/susi_2020_website/pictures/LB-300/LB-300_180.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348182/susi_2020_website/pictures/LB-300/LB-300_180.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348182/susi_2020_website/pictures/LB-300/LB-300_270.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348182/susi_2020_website/pictures/LB-300/LB-300_270.jpg'
          },
        ],
      },
      {
        id: 2,
        name: 'LB-50',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348147/susi_2020_website/pictures/LB-50/LB-50_0.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348147/susi_2020_website/pictures/LB-50/LB-50_0.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348147/susi_2020_website/pictures/LB-50/LB-50_90.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348147/susi_2020_website/pictures/LB-50/LB-50_90.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348147/susi_2020_website/pictures/LB-50/LB-50_180.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348147/susi_2020_website/pictures/LB-50/LB-50_180.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348147/susi_2020_website/pictures/LB-50/LB-50_ISO.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348147/susi_2020_website/pictures/LB-50/LB-50_ISO.jpg'
          },
        ],
      },
      {
        id: 3,
        name: 'PGSSQ-TS',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348196/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS_0.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348196/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS_0.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348196/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS_90.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348196/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS_90.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348197/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS_180.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348197/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS_180.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348195/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS_270.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348195/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS_270.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348196/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348196/susi_2020_website/pictures/PGSSQ-TS/PGSSQ-TS.jpg'
          },
        ],
      },
      {
        id: 4,
        name: 'PS9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 5,
        name: 'SWAAF9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9_0.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9_0.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9_90.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9_90.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9_180.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9_180.jpg'
          },
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9_270.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348212/susi_2020_website/pictures/SWAAF9/SWAAF9_270.jpg'
          },
        ],
      },
      {
        id: 6,
        name: 'SWBXS9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 7,
        name: 'SWDGS9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 8,
        name: 'SWDJL9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 9,
        name: 'SWDWM9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 10,
        name: 'SWFXS9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 11,
        name: 'SWRGL9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 12,
        name: 'SWRGS6',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 13,
        name: 'SWRJL5',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 14,
        name: 'SWRWL9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 15,
        name: 'SWRWS9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 16,
        name: 'SWSGL9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      },
      {
        id: 17,
        name: 'SWSWS9',
        pictures: [
          {
            src: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg',
            thumb: 'https://res.cloudinary.com/susiadapters-com/image/upload/v1597348203/susi_2020_website/pictures/PS9/PS9.jpg'
          },
        ],
      }
    ];

    return new Observable((observer) => {
      observer.next(pictures);
      observer.complete();
    });
  }

  public getYouTubes() {
    return [
      { src: "tttuDGLmQx4" },
      { src: "BSjHRbSGsTw" },
      { src: "jBfpqRod6n4" },
      { src: "ky8GQv8O2l0" },
      { src: "j3KYUtTnoHw" },
      { src: "L1DGAduB2Oc" },
      { src: "IDQj3g1vBKI" },
      { src: "9ywmhuF-D2M" },
      { src: "apNBjAjipNc" },
      { src: "DG5LWByJNnI" },
      { src: "9T8kpiOCbac" },
      { src: "OGVn1fCNYuQ" },
      { src: "rtP0G_E-Tu0" },
      { src: "dtvLOjEeQy4" },
      { src: "-6jDSIt8IQw" },
      { src: "OJi4PdPAsXc" },
      { src: "ZxcO2_wtz08" },
      { src: "O5bkzENuds8" },
      { src: "ymCWajymYGI" },
      { src: "1QhXC9JLKwA" },
      { src: "ODOJ4GtZs0s" },
      { src: "nqXie89oZJY" },
    ];
  }


  public getThemes() {
    return [
      { id: "SU-light", name: 'SUSI Light' },
      { id: "SU-dark", name: 'SUSI Dark' },
      { id: "AC-light", name: 'Aclara Light' },
      { id: "AC-dark", name: 'Aclara Dark' },
      { id: "AE-light", name: 'AccuEnergy Light' },
      { id: "AE-dark", name: 'AccuEnergy Dark' },
      { id: "AM-light", name: 'Ametek Light' },
      { id: "AM-dark", name: 'Ametek Dark' },
      { id: "BI-light", name: 'Bitronics Light' },
      { id: "BI-dark", name: 'Bitronics Dark' },
      { id: "CR-light", name: 'Crompton Light' },
      { id: "CR-dark", name: 'Crompton Dark' },
      { id: "EA-light", name: 'Eaton Light' },
      { id: "EA-dark", name: 'Eaton Dark' },
      { id: "EI-light", name: 'Electro Ind. Light' },
      { id: "EI-dark", name: 'Electro Ind. Dark' },
      { id: "EL-light", name: 'Elster Light' },
      { id: "EL-dark", name: 'Elster Dark' },
      { id: "GE-light", name: 'General Electric Light' },
      { id: "GE-dark", name: 'General Electric Dark' },
      { id: "HW-light", name: 'Honeywell Light' },
      { id: "HW-dark", name: 'Honeywell Dark' },
      { id: "IT-light", name: 'Itron Light' },
      { id: "IT-dark", name: 'Itron Dark' },
      { id: "JA-light", name: 'Janitza Light' },
      { id: "JA-dark", name: 'Janitza Dark' },
      { id: "LG-light", name: 'Landis+Gyr Light' },
      { id: "LG-dark", name: 'Landis+Gyr Dark' },
      { id: "RA-light", name: 'Rockwell Automation Light' },
      { id: "RA-dark", name: 'Rockwell Automation Dark' },
      { id: "SA-light", name: 'SATEC Light' },
      { id: "SA-dark", name: 'SATEC Dark' },
      { id: "SC-light", name: 'Schneider Light' },
      { id: "SC-dark", name: 'Schneider Dark' },
      { id: "SI-light", name: 'Siemens Light' },
      { id: "SI-dark", name: 'Siemens Dark' },
    ];
  }

}
