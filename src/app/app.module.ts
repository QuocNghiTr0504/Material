import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { SettingComponent } from './pages/setting/setting.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    CommentsComponent,
    SettingComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    RouterLink

  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }