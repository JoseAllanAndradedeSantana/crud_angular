import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    
  }

  createAccount(): void{
    this.accountService.showMessage("Operação executada com sucesso!!")
  }

}
