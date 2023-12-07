import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserComponent {
  @Output() add = new EventEmitter<string>();
  
  userFullName: string = '';

  // constructor(
  //   private cdr: ChangeDetectorRef) {
   
  // }

  addUser() {
    console.log("in add user emitter ")
    this.add.emit(this.userFullName);
    this.userFullName = '';
    // this.cdr.detectChanges();

  }
}
