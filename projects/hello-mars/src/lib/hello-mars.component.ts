import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hello-mars',
  template: `
    <p>
      hello-mars works!
    </p>
  `,
  styles: []
})
export class HelloMarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
