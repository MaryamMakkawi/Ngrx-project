import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-blog',
  templateUrl: './dialog-blog.component.html',
  styleUrls: ['./dialog-blog.component.scss'],
})
export class DialogBlogComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private _dialog: MatDialogRef<DialogBlogComponent>,
    @Inject(MAT_DIALOG_DATA) public editBlog: any,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initialForm();
    if (this.editBlog.type === 'update') {
      this.form.patchValue({
        id: this.editBlog.blog.id,
        title: this.editBlog.blog.title,
        description: this.editBlog.blog.description,
      });
    }
  }

  initialForm() {
    this.form = this._fb.group({
      id: [null],
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  actionBlog(type: 'save' | 'cancel') {
    type === 'save'
      ? this._dialog.close({
          ...this.form.value,
          id:
            this.editBlog.type === 'update'
              ? this.editBlog.blog.id
              : crypto.randomUUID(),
        })
      : this._dialog.close(null);
  }
}
