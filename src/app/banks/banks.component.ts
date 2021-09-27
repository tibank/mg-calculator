import {Component, OnInit} from '@angular/core';

import {BanksService} from '../banks.service';
import {Bank} from "../bank";

@Component({
  selector: 'elf-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  constructor(private banksService: BanksService) {
  }

  banks: Bank[] = [];

  ngOnInit(): void {
     this.getBanks()
  }

  getBanks(): void {
    this.banksService.getAll().subscribe(banks => this.banks = banks)
  }

  removeBank(bank: Bank): void {
    this.banks = this.banks.filter(b => b !== bank)
    this.banksService.removeBank(bank.id).subscribe();
  }


}
