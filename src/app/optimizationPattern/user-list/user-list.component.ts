import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy,ChangeDetectorRef} from '@angular/core';
import {User} from "../users.service";



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() users: User[] = [];
  

  
}



