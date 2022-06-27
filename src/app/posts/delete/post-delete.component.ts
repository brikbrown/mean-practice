import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.scss']
})
export class PostDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: string,
              private ps: PostService) { }

  ngOnInit(): void {
  }

  confirmDelete(): void {
    this.ps.deletePost(this.data);
  }

}
