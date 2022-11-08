import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { timer } from 'rxjs';

@Component({
  selector: 'app-hit-target',
  templateUrl: './hit-target.component.html',
  styleUrls: ['./hit-target.component.scss'],
  providers: [MessageService]
})
export class HitTargetComponent implements OnInit {

  started = false;
  currentRow = 0;
  currentColumn = 0;
  max = 2;
  min = 0;
  point = 0;
  secondsElapsed = 0;

  timeOutIntervalId: any;
  targetIntervalId: any

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  startGame() {
    this.messageService.clear();
    this.started = true;
    this.point = 0;
    this.secondsElapsed = 0;
    
    this.targetIntervalId = setInterval(() => {
      this.changeTargetPosition();
    }, 500);
    
    this.timeOutIntervalId = setInterval(() => {
      this.secondsElapsed++;
      if(this.secondsElapsed == 60) {
        this.timeOutGame();
      }
    }, 1000);

  }

  timeOutGame() {
    this.messageService.add({severity:'warn', summary:'Time out'});
    this.started = false;
    clearInterval(this.timeOutIntervalId);
    clearInterval(this.targetIntervalId);
  }

  changeTargetPosition() {
    this.currentRow = Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
    this.currentColumn = Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
  }

  onHit(row: number, column: number) {

    if (row == this.currentRow) {
      if (column == this.currentColumn) {
        this.point++;
      }
    }

    if (this.point == 10) {
      this.messageService.add({severity:'success', summary:'You win'});
      this.started = false;
    }

  }


}
