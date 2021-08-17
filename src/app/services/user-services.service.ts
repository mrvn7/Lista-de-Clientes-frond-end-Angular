import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpService } from './http.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService extends HttpService {
  @Output()
  event: EventEmitter<any> = new EventEmitter<any>()

  constructor(private http: HttpClient) { super() }

  getAll() {
    return this.http.get("https://localhost:44378/api/TestModels", this.getHttpOptions())
      .pipe(tap((data: any) => { return data || {} }),
        catchError(error => {
          this.event.emit({ 'erro': error })
          return throwError(error)
        }))
  }

  getUser(_id: any) {
    let id = _id
    return this.http.get(`https://localhost:44378/api/TestModels/${id} `, this.getHttpOptions())
      .pipe(tap((data: any) => { return data || {} }),
        catchError(error => {
          this.event.emit({ 'erro': error })
          return throwError(error)
        }))
  }

  deleteUser(_id: any) {
    let id = _id
    return this.http.delete(`https://localhost:44378/api/TestModels/${id} `, this.getHttpOptions())

  }

  addUser(user: any){
    return this.http.post("https://localhost:44378/api/TestModels", user, this.getHttpOptions())
      .pipe(tap((data: any) => { return data || {} }),
        catchError(error => {
          this.event.emit({ 'erro': error })
          return throwError(error)
        }))
  }

  editUser(user: any){
    console.log(user)
    return this.http.put(`https://localhost:44378/api/TestModels/${user.id}`, user, this.getHttpOptions())
      .pipe(tap((data: any) => { return data || {} }),
        catchError(error => {
          this.event.emit({ 'erro': error })
          return throwError(error)
        }))
  }

}
