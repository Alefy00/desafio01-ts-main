import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private statusEmprestimo: boolean = true

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (emprestimo: number): void => {
    if (this.validacaoEmprestimo()){
     let valor =  this.getBalance()
     valor += emprestimo
     console.log(valor)
    }

  }

  private validacaoEmprestimo = (): boolean => {
     if(this.statusEmprestimo){
      return this.statusEmprestimo
     }
     throw new Error('Conta inválida')
  }
}
