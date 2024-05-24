import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DuAnListComponent } from './components/du-an-list/du-an-list.component';
import { DuAnThemComponent } from './components/du-an-them/du-an-them.component';
import { DuAnSuaComponent } from './components/du-an-sua/du-an-sua.component';
import { NvListComponent } from './components/nv-list/nv-list.component';
import { NvThemComponent } from './components/nv-them/nv-them.component';
import { NvSuaComponent } from './components/nv-sua/nv-sua.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskThemComponent } from './components/task-them/task-them.component';
import { TaskSuaComponent } from './components/task-sua/task-sua.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"du_an",component:DuAnListComponent,title:"Danh Sách Dự Án"},
    {path:"du_an/them",component:DuAnThemComponent, title:"Thêm Dự Án Mới"},
    {path:"du_an/sua/:id",component:DuAnSuaComponent, title:"Sửa Dự Án"},
    {path:"nhan_vien",component:NvListComponent,title:"Danh Sách Nhân Viên"},
    {path:"nhan_vien/them",component:NvThemComponent,title:"Thêm Nhân Viên Mới"},
    {path:"nhan_vien/sua/:id",component:NvSuaComponent,title:"Sửa Nhân Viên"},
    {path:"task",component:TaskListComponent,title:"Danh Sách Task"},
    {path:"task/them",component:TaskThemComponent,title:"Thêm Task Mới"},
    {path:"task/sua/:id",component:TaskSuaComponent,title:"Sửa Task"},
    {path:"**",component:NotfoundComponent, title:"404"}
];
