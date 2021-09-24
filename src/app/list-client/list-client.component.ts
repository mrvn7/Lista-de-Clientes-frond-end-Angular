import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserServicesService } from '../services/user-services.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { EmailValidator, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit, AfterViewInit {

  panelOpenState = false;
  users: any = []
  displayedColumns = ['id', 'nome', 'sobrenome', 'email', 'acoes'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  background: ThemePalette = 'primary'
 

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(
    private user: UserServicesService, 
    public dialog: MatDialog, 
    public snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(){
    this.refresh()
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  filter(event: Event){
    const filterValue = (event?.target as HTMLInputElement).value 
    this.dataSource.filter = filterValue.trim().toLowerCase()
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  deleteUser(id: any){
    let item = {confirm: 'Sim', cancel: 'Não', id: id} 
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: item
    })
    dialogRef.disableClose = false
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        setTimeout(() => {
          this.refresh()
        }, 500);
        this.snackBar.open("Removido!", "", {duration: 2000} )
      }
    })
  }

  refresh(){
    this.user.getAll().subscribe(item => {this.dataSource =  new MatTableDataSource(item.body || {})})
  }

  register(){
    this.router.navigate(['/register'])
  }
}
