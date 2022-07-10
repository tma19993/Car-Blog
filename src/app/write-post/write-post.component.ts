import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css'],
})
export class WritePostComponent implements OnInit {
  title: string = '';
  body: string = '';

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}
  add() {
    this.postsService.addPost({
      title: this.title,
      body: this.body,
      addition_date: new Date().toLocaleString(),
    });
    console.log(this.body);
    this.title = '';
    this.body = '';
  }
}
