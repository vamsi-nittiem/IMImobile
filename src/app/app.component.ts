import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arr = [];
  arr3 = [1,2,3];
  arr4 = [1,2,3,4];
  arr6 = [1,2,3,4,5,6];
  randomRow = -1;
  randomCol = -1;
  intervalVar: any;
  oTimer = 120;
  score = 0;
  isDisabled = false;
  highestScore = 0;

  ngOnInit(){
    console.log(localStorage.getItem('highestScore'));
    this.highestScore = parseInt(localStorage.getItem('highestScore'));
   }

  levelClicked(arrSelected: number){
    if(arrSelected === 3)
      this.arr = this.arr3;
    else if(arrSelected === 4)
      this.arr = this.arr4;
    else if(arrSelected === 6)
      this.arr = this.arr6;

      this.intervalVar = setInterval(()=>{
        this.randomRow = Math.round(Math.random()*(this.arr.length - 1) + 1);
        this.randomCol = Math.round(Math.random()*(this.arr.length - 1) + 1);
        this.oTimer--;
        if(this.oTimer === 0){
          clearInterval(this.intervalVar);
          if(this.score > this.highestScore)
            this.highestScore = this.score;

          localStorage.setItem('highestScore', this.highestScore.toLocaleString())
          if(confirm("Game Over !!!")){
            this.restartGame();
          }
        }
        //console.log(`[${this.randomRow}, ${this.randomCol}]`);
      }, 1000);

      this.isDisabled = true;
  }

  restartGame(){
    clearInterval(this.intervalVar);
    this.isDisabled = false;
    this.arr = [];
    this.oTimer = 120;
    this.score = 0;
  }

  getClickedValue(event: Event){
    console.log(event);
    if(event[0] === this.randomRow && event[1] === this.randomCol)
     this.score++;
    else
     this.score--;

  }
}
