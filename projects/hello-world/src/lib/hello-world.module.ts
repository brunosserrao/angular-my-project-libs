import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';
import { HelloWorldHomeComponent } from './components/hello-world-home/hello-world-home.component';



@NgModule({
  declarations: [HelloWorldComponent, HelloWorldHomeComponent],
  imports: [
  ],
  exports: [HelloWorldComponent, HelloWorldHomeComponent]
})
export class HelloWorldModule { }
