import { Component, OnInit } from '@angular/core';
import {WeddingServicesSet} from '../../model/wedding-services-set';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  results: WeddingServicesSet[];
  numberOfSet: number;

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('results'));
    this.results = JSON.parse(localStorage.getItem('results'));
    this.numberOfSet = 0;
  }
  onNextSet(){
    this.numberOfSet += 1;
  }
  onPreviousSet(){
    this.numberOfSet -= 1;
  }

}
