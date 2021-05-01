import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { AppService } from '../../app.service';
import { Series, Product, Property, Pagination } from '../../app.models';

import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout'; 
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, tap, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public literatureLinks = []
  watcher: Subscription;
  activeMediaQuery = ''; 

  public slides = [];
  public seriesList: Series[];
  public products: Product[];
  public properties: Property[];
  public viewType: string = 'grid';
  public viewCol: number = 25;
  public count: number = 8;
  public sort: string;
  public searchFields: any;
  public removedSearchField: string;
  public pagination:Pagination = new Pagination(1, 8, null, 2, 0, 0); 
  public message:string;
  public featuredProperties: Property[];

  public settings: SUSIPartnerDto;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(
    public appSettings: AppSettings, 
    public appService: AppService, 
    public mediaObserver: MediaObserver
    ) {
    this.watcher = this.mediaObserver.media$.pipe(tap((change: MediaChange) => {
            // console.log(change)
            if(change.mqAlias == 'xs') {
              this.viewCol = 100;
            }
            else if(change.mqAlias == 'sm'){
              this.viewCol = 50;
            }
            else if(change.mqAlias == 'md'){
              this.viewCol = 33.3;
            }
            else{
              this.viewCol = 25;
            }
      
            // this.settings = this.appSettings.settings;
            this.appSettings.settings$.pipe(tap(settings => {
              this.settings = settings;
            })).subscribe();
      
    })).subscribe();

    // this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
    //   // console.log(change)
    //   if(change.mqAlias == 'xs') {
    //     this.viewCol = 100;
    //   }
    //   else if(change.mqAlias == 'sm'){
    //     this.viewCol = 50;
    //   }
    //   else if(change.mqAlias == 'md'){
    //     this.viewCol = 33.3;
    //   }
    //   else{
    //     this.viewCol = 25;
    //   }

    //   // this.settings = this.appSettings.settings;
    //   this.appSettings.settings$.pipe(tap(settings => {
    //     this.settings = settings;
    //   })).subscribe();
  
    // });

  }

  ngOnInit() {  
    this.getSlides();
    // this.getProducts(); 
    this.getSeries(); 
    // this.getProperties(); 
    // if (this.mediaObserver.isActive('xs')) {
    //    console.log('mobile version -XS')
    // }
    this.getFeaturedProperties();

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngDoCheck(){
    if(this.settings.loadMore.load){     
      this.settings.loadMore.load = false;     
      // this.getProperties();  
    }
  }

  ngOnDestroy(){
    this.resetLoadMore();
    this.watcher.unsubscribe();
  }

  public getSlides(){
    this.appService.getHomeCarouselSlides().subscribe(res=>{
      this.slides = res;
      // console.log(`slides: ${JSON.stringify(this.slides, null, 2)}`);
    })
  }

  public getSeries(){  
    //console.log('get properties by : ', this.searchFields);  
    this.appService.getSeries().subscribe(data => {      
      if(this.seriesList && this.seriesList.length > 0){  
        this.settings.loadMore.page++;
        this.pagination.page = this.settings.loadMore.page; 
      }
      let result = this.filterData(data); 
      if(result.data.length == 0){
        this.seriesList.length = 0;
        this.pagination = new Pagination(1, this.count, null, 2, 0, 0);  
        this.message = 'No Results Found';
        return false;
      } 
      if(this.seriesList && this.seriesList.length > 0){  
        this.seriesList = this.seriesList.concat(result.data);          
      }
      else{
        this.seriesList = result.data;  
      }
      this.pagination = result.pagination;
      this.message = null;

      if(this.seriesList.length == this.pagination.total){
        this.settings.loadMore.complete = true;
        this.settings.loadMore.result = this.seriesList.length;
      }
      else{
        this.settings.loadMore.complete = false;
      }
    })
  }

  // public getProducts(){  
  //   //console.log('get properties by : ', this.searchFields);  
  //   this.appService.getProducts().subscribe(data => {      
  //     if(this.products && this.products.length > 0){  
  //       this.settings.loadMore.page++;
  //       this.pagination.page = this.settings.loadMore.page; 
  //     }
  //     let result = this.filterData(data); 
  //     if(result.data.length == 0){
  //       this.products.length = 0;
  //       this.pagination = new Pagination(1, this.count, null, 2, 0, 0);  
  //       this.message = 'No Results Found';
  //       return false;
  //     } 
  //     if(this.products && this.products.length > 0){  
  //       this.products = this.products.concat(result.data);          
  //     }
  //     else{
  //       this.products = result.data;  
  //     }
  //     this.pagination = result.pagination;
  //     this.message = null;

  //     if(this.products.length == this.pagination.total){
  //       this.settings.loadMore.complete = true;
  //       this.settings.loadMore.result = this.products.length;
  //     }
  //     else{
  //       this.settings.loadMore.complete = false;
  //     }
  //   })
  // }

  // public getProperties(){  
  //   //console.log('get properties by : ', this.searchFields);  
  //   this.appService.getProperties().subscribe(data => {      
  //     if(this.properties && this.properties.length > 0){  
  //       this.settings.loadMore.page++;
  //       this.pagination.page = this.settings.loadMore.page; 
  //     }
  //     let result = this.filterData(data); 
  //     if(result.data.length == 0){
  //       this.properties.length = 0;
  //       this.pagination = new Pagination(1, this.count, null, 2, 0, 0);  
  //       this.message = 'No Results Found';
  //       return false;
  //     } 
  //     if(this.properties && this.properties.length > 0){  
  //       this.properties = this.properties.concat(result.data);          
  //     }
  //     else{
  //       this.properties = result.data;  
  //     }
  //     this.pagination = result.pagination;
  //     this.message = null;

  //     if(this.properties.length == this.pagination.total){
  //       this.settings.loadMore.complete = true;
  //       this.settings.loadMore.result = this.properties.length;
  //     }
  //     else{
  //       this.settings.loadMore.complete = false;
  //     }
  //   })
  // }

  public resetLoadMore(){
    this.settings.loadMore.complete = false;
    this.settings.loadMore.start = false;
    this.settings.loadMore.page = 1;
    this.pagination = new Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
  }

  public filterData(data){
    return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
  }

  public searchClicked(){ 
    this.properties.length = 0;
    // this.getProperties(); 
  }
  public searchChanged(event){    
    event.valueChanges.subscribe(() => {
      this.resetLoadMore();
      this.searchFields = event.value;
      setTimeout(() => {      
        this.removedSearchField = null;
      });
      if(!this.settings.searchOnBtnClick){     
        this.properties.length = 0;  
      }            
    }); 
    event.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => { 
      if(!this.settings.searchOnBtnClick){     
        // this.getProperties(); 
      }
    });       
  } 
  public removeSearchField(field){ 
    this.message = null;   
    this.removedSearchField = field; 
  } 
 


  public changeCount(count){
    this.count = count;
    this.resetLoadMore();   
    this.properties.length = 0;
    // this.getProperties();

  }
  public changeSorting(sort){    
    this.sort = sort;
    this.resetLoadMore(); 
    this.properties.length = 0;
    // this.getProperties();
  }
  public changeViewType(obj){ 
    this.viewType = obj.viewType;
    this.viewCol = obj.viewCol; 
  }


  public getFeaturedProperties(){
    this.appService.getFeaturedProperties().subscribe(properties=>{
      this.featuredProperties = properties;
    })
  } 

}
