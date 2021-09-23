import { Account } from './account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:3001/account"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Close',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  
}

create(account: Account): Observable<Account>{
  return this.http.post<Account>(this.baseUrl, account)
}

read(): Observable<Account[]>{
  return this.http.get<Account[]>(this.baseUrl)
}


}
