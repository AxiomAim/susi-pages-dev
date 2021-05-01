import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-susi-customers',
  templateUrl: './susi-customers.component.html',
  styleUrls: ['./susi-customers.component.scss']
})
export class SusiCustomersComponent implements OnInit {
  public IOUs = [];
  public COOPs = [];
  public Industrial = [];
  public Colleges = [];
  public Government = [];
  public Municipals = [];

  constructor(
    private appService: AppService
  ) {
    this.IOUs = this.appService.getCustomersIOU();
    this.COOPs = this.appService.getCustomersCOOP();
    this.Industrial = this.appService.getCustomersIndustrial();
    this.Colleges = this.appService.getCustomersColleges();
    this.Government = this.appService.getCustomersGovernment();
    this.Municipals = this.appService.getCustomersMunicipals();

   }

  ngOnInit(): void {
  }

}
