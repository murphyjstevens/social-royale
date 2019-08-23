import { Component, OnInit } from '@angular/core';

import { Post } from '../shared/models/post';
import { POSTS } from '../shared/mock-posts';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css']
})
export class MainFeedComponent implements OnInit {
  posts = POSTS.sort((a, b) => a.submittedDate.getTime() - b.submittedDate.getTime());

  constructor() { }

  ngOnInit() {
  }

}
