import { AccountService } from './../account.service';
import { Account } from './../account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-read',
  templateUrl: './account-read.component.html',
  styleUrls: ['./account-read.component.css']
})
export class AccountReadComponent implements OnInit {
  
  accounts!: Account[]
  displayedColumns = ['id','name','price']

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.read().subscribe(accounts => {
      this.accounts = accounts
      console.log(accounts)
    })
  }

}
