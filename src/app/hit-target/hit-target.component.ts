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

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  startGame() {
    this.messageService.clear();
    this.started = true;
    this.point = 0;
    this.secondsElapsed = 0;
    
    setInterval(() => {
      this.changeTargetPosition();
    }, 500);
    
    let timerIntervalId = setInterval(() => {
      this.secondsElapsed++;
    }, 1000);

    let timeoutIntervalId = setInterval(() => {
      this.messageService.add({severity:'warn', summary:'Time out'});
      this.started = false;
      clearInterval(timeoutIntervalId);
    }, 5000);

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

    if (this.point == 1) {
      this.messageService.add({severity:'success', summary:'You win'});
      this.started = false;
    }

  }


}
