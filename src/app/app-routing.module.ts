import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterClientComponent } from './alter-client/alter-client.component';
import { AppComponent } from './app.component';
import { ListClientComponent } from './list-client/list-client.component';
import { RegisterClientComponent } from './register-client/register-client.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ListClientComponent},
  // {path: 'register', component: RegisterClientComponent},
  // {path: 'edit/:id', component: AlterClientComponent},
  // {path: 'edit', component: AlterClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
