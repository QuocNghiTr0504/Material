import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import{MatPaginatorModule} from '@angular/material/paginator'
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { SettingComponent } from './pages/setting/setting.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { RouterLink } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './models/product';



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
    MatPaginatorModule,
    AppRoutingModule,
    RouterLink,
    MatSlideToggleModule,
    CdkDrag,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
