import { Component, inject, signal, Signal,Input} from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  iconmenu=[
    {id:1,name:'Home',icon:'home',route:'home'},
    {id:2,name:'Comments',icon:'comments',route:'comments'},
    {id:3,name:'Setting',icon:'settings',route:'settings'},
    {id:4,name:'Translate',icon:'g_translate',route:'translate'},
  ]
    constructor(){

    }
}
