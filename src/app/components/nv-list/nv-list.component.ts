import { CommonModule, formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { INhanVien } from '../../inhan-vien';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-nv-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './nv-list.component.html',
  styleUrl: './nv-list.component.css'
})
export class NvListComponent implements OnInit {
  search = '';
  nhan_vien: INhanVien[] = [];
  searchSP():void{
    this.nhan_vien = this.list_nv.filter(
      item => item.ten.toLowerCase().includes(this.search.toLocaleLowerCase())
    )
  }
  list_nv: INhanVien[] = [];
  ngOnInit(): void {
    fetch(`http://localhost:3000/nhan_vien`)
    .then(res=>res.json())
    .then(data =>{
      this.list_nv = data;
    })
    this.nhan_vien = this.list_nv
  }
}
