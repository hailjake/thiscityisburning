import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
      // console.debug("Scroll Event", document.body.scrollTop);
      // see András Szepesházi's comment below
      console.debug("Scroll Event", window.pageYOffset );
    }
}
