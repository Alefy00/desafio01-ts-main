export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor( name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): any=> {
    if(this.validateStatus()){
      if ( valor > 0){
        this.balance += valor
        console.log(`O valor depositado foi de ${valor} o saldo atual é de ${this.balance}` )
      }

    }
  }

  withdraw = (saque: number): void => {
    if (this.validateStatus()){
      if( this.balance > 0 ){
        console.log(`O saldo na conta era de ${this.balance}`)
        this.balance -= saque
        console.log(`O valor sacado foi de ${saque},  SALDO ATUAL: ${this.balance}` )
      }
    }
  }

  getBalance = (): number => {
    return this.balance
    
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
