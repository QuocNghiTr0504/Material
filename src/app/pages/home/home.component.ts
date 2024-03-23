import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { GetProductsService } from 'src/app/service/get-products.service';
import { Product } from 'src/app/models/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  export class HomeComponent implements OnInit {

  showMore:boolean = false;
  productList!: Product[];
  PageProduct: Product[] = [];
  dataSource: any;
  pageSize = 4;

  constructor( private httpProducts: GetProductsService){  
  }
  ngOnInit(): void {
      this.httpProducts.getProduct().subscribe((data:any) => {
      this.productList = data;
      this.UpdateRenderProduct(0);
    }); 
  }
  
  UpdateRenderProduct(pageIndex: number){
    const startPage = pageIndex * this.pageSize;
    const endPage = Math.min(startPage + this.pageSize, Number(this.productList.length))
    this.PageProduct = this.productList.slice(startPage, endPage);
  }
  pageChanged(event:any) {
    const pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.UpdateRenderProduct(pageIndex);
    console.log(event.pageSize); 
  }
    
  }
