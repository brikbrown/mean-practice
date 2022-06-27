import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Post } from '../../services/interface.service';
import { PostService } from '../../services/post.service';
import { PostDeleteComponent } from '../delete/post-delete.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private ps: PostService, private dl: MatDialog) {}

  ngOnInit(): void {
    this.ps.getPosts();
    this.postsSub = this.ps.getPostUpdatedListener().subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  confirmDelete(id: string): void {
    const dialogRef = this.dl.open(PostDeleteComponent, {
      width: '250px',
      data: id,
    });
  }

  editPost(id: string): void {
    
  }
}
