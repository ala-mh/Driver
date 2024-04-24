import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  sideNavStatus: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
