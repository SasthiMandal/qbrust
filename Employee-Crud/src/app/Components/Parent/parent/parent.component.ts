import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  messageToChild:string='Sending msg to child component using @Input Decorator !'

  greetParent(name:string){
    alert('Hello Mr => '+name)
  }
}
