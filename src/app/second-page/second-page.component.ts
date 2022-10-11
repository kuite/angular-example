import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StockDataService } from '../_services/stock-data.service';
import { UserService } from '../_services/user.service';
import {
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

    public basicData: any;
    public basicOptions: any;



    constructor(
        private stockDataService: StockDataService,
        private userService: UserService,
        private snackBar: MatSnackBar
    ) 
    {

    }

    ngOnInit() {
        this.basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5',
                    tension: .1
                }
            ]
        };

    }

    public getPopulationData()
    {
        var newData = [];
        var newLabels = [];
        
        this.stockDataService.getPopulation().subscribe(response => {
            let resultObject = JSON.parse(JSON.stringify(response));
            resultObject.data.forEach(x => {
                newData.push(x.Population);
                newLabels.push(x.Year);
            });
            newLabels = newLabels.sort((n1,n2) => n1 - n2);
            newData = newData.sort((n1,n2) => n1 - n2);
            this.basicData = {
                labels: newLabels,
                datasets: [
                    {
                        label: 'First Dataset',
                        data: newData,
                        fill: false,
                        borderColor: '#42A5F5',
                        tension: .1
                    }
                ]
            };
        });
        
    }


    public sendForm(name: string, job: string)
    {
        this.userService.createUser(name, job).subscribe(response => {
            let resultObject = JSON.parse(JSON.stringify(response));
            console.log(response);
            // open snackbar
            var verticalPos: MatSnackBarVerticalPosition = 'top';
            var snackBarConfig = 
            {
                duration: 5000,
                verticalPosition: verticalPos
            };
            this.snackBar.open(name + ' ' + job, 'Close', snackBarConfig);
        });
    }

    ngOnDestroy() {
        
    }

}
