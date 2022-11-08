import { Component } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { EMPTY, Observable, windowCount } from 'rxjs';
import { QuotesService } from './services/quotes/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-ng';

  gameId = 0;
  gameTitle = 'First Game';
  
  gameLoaderText = 'Your game is starting';

  constructor(private quoteService: QuotesService) {
  }

  ngOnInit() {
  }

  activeGame(gameId: number): void {
    this.gameId = gameId;
    // this.setScreenChanges(gameId);
  }

  setScreenChanges(gameId: number) {
    switch(gameId) {
      case 1 : {
        this.gameTitle = 'First Game';
        this.gameLoaderText = 'Your game is starting';
        window.location.reload();
        break;
      }
      case 2 : {
        this.gameTitle = 'Second Game';
        this.gameLoaderText = 'Your game is starting';
        break;
      }
      case 3 : {
        this.gameTitle = 'Third Game';
        this.gameLoaderText = 'Your game is starting';
        break;
      }
      default : {
        this.gameTitle = 'First Game';
        this.gameLoaderText = 'Your game is starting';
        break;
      }
    }

  }

}
