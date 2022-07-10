import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post-model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  img = './pictures/automobile-gfd613a919_1280.jpg';
  @Input() postsView: Array<Post> = [];
  constructor(private postsServ: PostsService) {
    this.postsServ.getPostListObs().subscribe((posts) => {
      this.postsView = posts;
    });
  }

  ngOnInit(): void {}
}
