import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './component/blog/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogBlogComponent } from './component/dialog-blog/dialog-blog.component';


@NgModule({
  declarations: [
    BlogComponent,
    DialogBlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
