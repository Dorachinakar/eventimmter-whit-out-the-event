import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
  @Input() count = 0
  @Input() limit = 3
  imINtheFather(){
    console.log(this.count , this.limit);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
