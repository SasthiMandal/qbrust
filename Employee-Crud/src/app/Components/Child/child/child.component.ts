import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() greetEvent = new EventEmitter();

  name : string = 'Abdul Majid Alam';

  @Input() messageFromParent : string = '';

  greetFromChild(){
    this.greetEvent.emit(this.name);
  }
}
