import { Account } from './../account.model';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  account: Account = {
    name: '',
    price: null
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createAccount(): void{
    this.accountService.create(this.account).subscribe(() => {
      this.accountService.showMessage("Operação executada com sucesso!!")
      this.router.navigate(['/account'])
    })
    
  }

  cancel(): void{

    this.router.navigate(['/account'])

  }

}
