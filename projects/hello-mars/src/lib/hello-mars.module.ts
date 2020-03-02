import { NgModule } from '@angular/core';
import { HelloMarsComponent } from './hello-mars.component';
import { HelloMarsHomeComponent } from './components/hello-mars-home/hello-mars-home.component';

@NgModule({
  declarations: [HelloMarsComponent, HelloMarsHomeComponent],
  imports: [
  ],
  exports: [HelloMarsComponent, HelloMarsHomeComponent]
})
export class HelloMarsModule { }
