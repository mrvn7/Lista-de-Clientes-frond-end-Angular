/**
    * @description      : 
    * @author           : danil
    * @group            : 
    * @created          : 13/08/2021 - 17:35:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/08/2021
    * - Author          : danil
    * - Modification    : 
**/
import { HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor () {}

  public getHttpOptions (): any {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })

    let httpOption: any = {}
    httpOption.headers = _headers
    httpOption.observe = 'response'

    return httpOption
  }
}
