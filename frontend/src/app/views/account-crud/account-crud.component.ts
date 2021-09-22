import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-account-crud',
  templateUrl: './account-crud.component.html',
  styleUrls: ['./account-crud.component.css']
})
export class AccountCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAccountCreate(): void{
    this.router.navigate(['/account/create'])
    console.log("Navegando ......")
  }

}
