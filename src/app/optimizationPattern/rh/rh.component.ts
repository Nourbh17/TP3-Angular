import {ChangeDetectionStrategy, Component, EventEmitter, NgZone, OnInit, Output} from '@angular/core';
import {User, UsersService} from "../users.service";
import * as ChartJs from 'chart.js/auto';
@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RhComponent implements OnInit {
  oddUsers: User[];
  evenUsers: User[];
  oddUser: User | null = null;
  evenUser: User | null = null;
  user: User | null = null ;
  
  chart: any;
  constructor(
    private userService: UsersService,
    private ngZone: NgZone) {
    this.oddUsers = this.userService.getOddOrEven(true);
    this.evenUsers = this.userService.getOddOrEven();
  }
 
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(()=>{
      this.createChart();
    })   
  }

  addUser(list: User[], newUser: string) {
    console.log("in rh add user event ")
    
     this.user= this.userService.addUser(list, newUser);
     
    if (this.user.age % 2 ==0)
    { 
      this.evenUser = this.user;
      this.oddUser = null;
      this.user=null;
    } 
    else {
      this.oddUser = this.user;
      this.evenUser = null;
      this.user=null;
    }
  }
  createChart(){
    const data = [
      { users: 'Workers', count: this.oddUsers.length },
      { users: 'Boss', count: this.evenUsers.length },
    ];
    this.chart = new ChartJs.Chart("MyChart",
    {
      type: 'bar',
        data: {
          labels: data.map(row => row.users),
        datasets: [
        {
          label: 'Entreprise stats',
          data: data.map(row => row.count)
        }
      ]
    }
    });
  }
}
