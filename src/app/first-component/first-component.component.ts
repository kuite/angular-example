import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit 
{

  constructor(private snackBar: MatSnackBar) 
  {
  }

  ngOnInit(): void 
  {
  }

  showToast(imie: string, ksywka: string)
  {
    var pozycjaSnackBara: MatSnackBarVerticalPosition = 'bottom';
    var snackBarConfig = 
    {
      duration: 5000,
      verticalPosition: pozycjaSnackBara
    };

    var message = `Witaj ${imie}, a może powinienem powiedzieć...${ksywka}?`
    this.snackBar.open(message, 'Close', snackBarConfig);
  }


}
