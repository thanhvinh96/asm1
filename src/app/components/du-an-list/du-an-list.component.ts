import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IDuAn } from '../../idu-an';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-du-an-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './du-an-list.component.html',
  styleUrl: './du-an-list.component.css'
})
export class DuAnListComponent implements OnInit {
  search = '';
  du_an: IDuAn[] = [];
  searchSP():void{
    this.du_an = this.list_du_an.filter(
      item =>item.ten_du_an.toLowerCase().includes(this.search.toLocaleLowerCase())
    )
  }
  list_du_an:IDuAn[] = [];
  ngOnInit(): void {
    fetch (`http://localhost:3000/du_an`).then(res=>res.json()).then(data=>{
      this.list_du_an = data as IDuAn[];
    })
    this.list_du_an = this.du_an
  }
}
