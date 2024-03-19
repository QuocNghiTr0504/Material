import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, computed, HostBinding, signal, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-responsive-sidenav';
  @HostBinding('class') className='';
  toggleControl = new FormControl(false);
  isActiveBG: boolean =false;
  darkMode= signal<boolean>(false);
  nameFooterMenu = document.querySelector('.footer-menu')
  @ViewChild('sidenav') sidenavs!:MatSidenav
  collapsed=signal(false);
  sideNavWidth= computed(()=>this.collapsed()?'55px': '170px');
  constructor(private themeService: ThemeService ) {}
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkModes';
      this.className = darkMode ? darkClassName : '';
      
    });
}

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
    
  }

}
