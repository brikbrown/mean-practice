import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.scss']
})
export class PostDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: number,
              private ps: PostService) { }

  ngOnInit(): void {
  }

  deletePost(): void {
    console.log(this.data);
    this.ps.deletePost(this.data);
  }

}
