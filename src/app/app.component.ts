import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-responsive-sidenav';
  // onSidenavOpen() {
  //   console.log('Đã mở Sidenav');
  // }
  sidebarOpened = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  toggleSidebar() {
    this.sidenav.toggle();
  }
  isMenuOpen: boolean = true;
  vertebrates:boolean=true;
  invertebrates:boolean=true;
}
