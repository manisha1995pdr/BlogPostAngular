import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../widget.service"

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  blogs: object[];
  constructor( private request: WidgetService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(){
    this.request.loadData()
      .subscribe((data) => {
      this.blogs = data;
      })
  }
}
