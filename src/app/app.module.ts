import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs'
import { CdkTreeModule } from '@angular/cdk/tree'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { UserServicesService } from './services/user-services.service';
import { RegisterClientComponent } from './register-client/register-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AlterClientComponent } from './alter-client/alter-client.component';
import { ListClientComponent } from './list-client/list-client.component'

@NgModule({
  declarations: [AppComponent, DialogDeleteComponent, RegisterClientComponent, AlterClientComponent, ListClientComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    CdkTreeModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule, 
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [RegisterClientComponent, AlterClientComponent, ListClientComponent],
  providers: [
    HttpClient,
    UserServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}