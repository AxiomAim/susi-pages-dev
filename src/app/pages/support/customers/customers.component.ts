import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
public customers: any;

  constructor(
    private appService: AppService
  ) {

   }

  ngOnInit(): void {
    this.customers = this.appService.getCustomers();
  }

}
