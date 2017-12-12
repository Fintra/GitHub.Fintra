import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtercustomer',
  templateUrl: './filterCustomer.component.html',
  styleUrls: ['./filterCustomer.component.css', '../../../../stylesheets/custom.css']
})
export class FilterCustomerComponent implements OnInit {

  constructor(private CommonDataService: CommonDataService, private router: Router) {}

  customer = [];
  search = {};
  defaultPage = true;
  selectedItem = null;
  recordsPerPage = 3;
  noOfPages = 0;
  currentPage = 0;
  create = () => {
   this.defaultPage = false;
  }

  ngOnInit() {
      this.customer = this.CommonDataService.customerData();
  }

  numberOfPages() {
    return Math.ceil(this.CommonDataService.customerData().length / this.recordsPerPage);
  }

  open3 = function(item) {
      this.selectedItem = item.customerId;
  };

}
