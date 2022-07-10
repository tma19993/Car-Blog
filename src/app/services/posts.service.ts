import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post-model';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsList: Array<Post>;
  private postsListObs = new BehaviorSubject<Array<Post>>([]);
  constructor() {
    this.postsList = [
      {
        title: 'Mystery',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aut, necessitatibus ipsum nihil explicabo a iure temporibus? In quisquam, assumenda optio eius neque minus eaque odio expedita cumque vel fuga!',
        addition_date: new Date().toLocaleString(),
      },
      {
        title: 'Blend',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aut, necessitatibus ipsum nihil explicabo a iure temporibus? In quisquam, assumenda optio eius neque minus eaque odio expedita cumque vel fuga!',
        addition_date: new Date().toLocaleString(),
      },
      {
        title: 'Spirit',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aut, necessitatibus ipsum nihil explicabo a iure temporibus? In quisquam, assumenda optio eius neque minus eaque odio expedita cumque vel fuga!',
        addition_date: new Date().toLocaleString(),
      },
      {
        title: 'Paragon',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aut, necessitatibus ipsum nihil explicabo a iure temporibus? In quisquam, assumenda optio eius neque minus eaque odio expedita cumque vel fuga!',
        addition_date: new Date().toLocaleString(),
      },
    ];
    this.postsListObs.next(this.postsList);
  }
  addPost(post: Post) {
    this.postsList.push(post);
    this.postsListObs.next(this.postsList);
  }
  getPostListObs(): Observable<Array<Post>> {
    return this.postsListObs.asObservable();
  }
}
