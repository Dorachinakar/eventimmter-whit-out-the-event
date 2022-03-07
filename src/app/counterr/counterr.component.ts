import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterr',
  templateUrl: './counterr.component.html',
  styleUrls: ['./counterr.component.scss']
})
export class CounterrComponent implements OnInit {
@Input() count = 0
@Input() limit = 10
@Output() goToMyFhter = new EventEmitter<object>()

onclikcinchiled(){
  this.goToMyFhter.emit({count:this.count,limit:this.limit})
}
  constructor() { }

  ngOnInit(): void {
  }

}
