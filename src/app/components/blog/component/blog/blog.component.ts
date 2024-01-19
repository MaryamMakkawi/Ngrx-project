import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBlogState, IBlogs } from '../../store/blogs/blog.interface';
import { Observable } from 'rxjs';
import { blogsSelect } from '../../store/blogs/blog.selector';
import { IAppState } from 'src/app/shared/AppState/AppState.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogBlogComponent } from '../dialog-blog/dialog-blog.component';
import {
  addBlog,
  deleteBlog,
  loadBlogs,
  updateBlog,
} from '../../store/blogs/blog.action';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogList$!: Observable<IBlogs>;
  constructor(
    private _store: Store<IAppState>,
    private _dialogBlog: MatDialog
  ) {}

  ngOnInit(): void {
    this.blogList$ = this._store.select(blogsSelect);
  }

  openDialog(type: 'add' | 'update', blog?: IBlogState) {
    this._dialogBlog
      .open(DialogBlogComponent, {
        data: { type: type, blog: blog },
      })
      .afterClosed()
      .subscribe((res) => {
        if (type === 'add') {
          this._store.dispatch(addBlog({ blog: res }));
        } else if (type === 'update') {
          this._store.dispatch(updateBlog({ blog: res }));
        }
      });
  }

  deleteBlog(blog: IBlogState) {
    this._store.dispatch(deleteBlog({ blogDelete: blog }));
  }
}
