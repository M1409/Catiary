import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.sass']
})
export class SnackbarComponent implements OnInit {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

}
