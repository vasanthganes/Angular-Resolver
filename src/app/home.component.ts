import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
   <h3> {{name}} Component Rendered based on canActivate guard promise</h3>
   <p>Data is rendered based on resolver</p>
   <pre> {{data | json }} </pre>
  `
})
export class HomeComponent implements OnInit {
  name = 'Home';
  data:any
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.data = this.router.snapshot.data;
  }
}
