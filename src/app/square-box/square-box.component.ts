import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-square-box',
  templateUrl: './square-box.component.html',
  styleUrls: ['./square-box.component.css']
})
export class SquareBoxComponent implements OnInit, OnChanges {

  @Input() boxIndex = [];
  @Input() randomBox = [];
  @Output() emitClickedValue = new EventEmitter<number[]>();
  boxColor = 'grey';

  constructor() { }

  ngOnChanges(oChanges: SimpleChanges){
    //console.log(oChanges['randomBox'].currentValue);

      if(oChanges['randomBox'].currentValue[0] === this.boxIndex[0] && oChanges['randomBox'].currentValue[1] === this.boxIndex[1]){
        this.boxColor = 'green';
        console.log(oChanges['randomBox'].currentValue);
      }
      else
        this.boxColor = 'grey';

  }

  ngOnInit(): void {
  }

  onBoxClick(){
    this.emitClickedValue.emit(this.boxIndex);
    //console.log(this.boxIndex)
  }

}
