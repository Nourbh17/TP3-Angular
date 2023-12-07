import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserComponent {
  @Output() add = new EventEmitter<string>();

  userFullName: string = '';
  addUser() {
    console.log("in add user emitter ")
    this.add.emit(this.userFullName);
    this.userFullName = '';
  }
}
