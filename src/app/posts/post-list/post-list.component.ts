import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

 posts: Post[] = [];
 private postsSub: Subscription;

constructor(private ps: PostService) {
}

ngOnInit(): void {
  this.posts = this.ps.getPosts();
  this.postsSub = this.ps.getPostUpdatedListener().subscribe((posts: Post[]) => {
    this.posts = posts;
  });
}

ngOnDestroy(): void {
  this.postsSub.unsubscribe();
}

}
