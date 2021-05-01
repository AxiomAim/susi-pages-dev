import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
  }

  addMetaTags() {
    this.titleService.setTitle('Home Page');
    this.metaTagService.addTags([
    { name: 'title', content: 'Home Page' },
    { name: 'description', content: 'This is Home Page Descrition'},
    { name: 'twitter:card', content: 'Home Page'},
    { name: 'og:url', content: '/home' },
    { name: 'og:title', content: 'Home Page' },
    { name: 'og:description', content: 'This is Home Page Descrition' },
    { name: 'og:image', content: '/assets/images/home-meta.jpg' }
    ]);
    }

}