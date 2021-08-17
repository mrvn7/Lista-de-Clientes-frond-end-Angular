import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor( private user: UserServicesService, public dialogRef: MatDialogRef<AppComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onConfirm(){
    this.user.deleteUser(this.data.id).subscribe(res => {})
    this.dialogRef.close(true)
  }

  onCancel(){
    this.dialogRef.close(false)
  }
}