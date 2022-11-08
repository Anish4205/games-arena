import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private url = 'https://famous-quotes4.p.rapidapi.com/random';
  private url1 = 'https://www.stands4.com/services/v2/quotes.php?uid=1001&tokenid=tk324324324&format=json';

  httpOptions = {
    params: {category: 'all', count: '2'},
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '64c408d188mshba39bf7ebb3b06cp14ad4bjsncb7ed7b6f567',
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getQuote() {
      return this.httpClient.get(this.url, this.httpOptions);
  }
  
}
