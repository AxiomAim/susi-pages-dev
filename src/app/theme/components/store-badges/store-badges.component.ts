import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-badges',
  templateUrl: './store-badges.component.html',
  styleUrls: ['./store-badges.component.scss']
})
export class StoreBadgesComponent implements OnInit {
  @Input() iconSize:string = '';
  @Input() iconColor:string = '';
  public socialLinks: any;

  constructor() { }

  ngOnInit(): void {
  }

}
