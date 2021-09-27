import { Component, OnInit } from '@angular/core';
import {Bank} from "../bank";
import {BanksService} from "../banks.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'elf-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css']
})
export class BankDetailComponent implements OnInit {

  bankForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    interestRate: [0, [Validators.min(0), Validators.max(100)]],
    maxLoan: [0, Validators.min(0)],
    minPayment: [0, Validators.min(0)],
    loanTerm: [0, [Validators.min(0), Validators.max(60)]],
  })
  bank?: Bank;

  constructor(private banksService: BanksService, private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }

}
