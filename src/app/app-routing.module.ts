import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingComponent } from './pages/setting/setting.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes:Routes=[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
 
  {
    path:'home',
    component: HomeComponent
  }
  ,
  {
    path:'comments',
    component: CommentsComponent
  },
  {
    path:'settings',
    component: SettingComponent
  }
  ,
  {
    path:'translate',
    component: TranslateComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
