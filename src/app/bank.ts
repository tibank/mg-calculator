export interface Bank {
  id: number;
  name: string;
  interestRate: number;
  maxLoan: number;
  minDownPayment: number;
  loanTerm: number;
}
