import { DioAccount } from "./DioAccount";

export class DevAccount extends DioAccount{

    depositoExtra = (extra:number): void=>{
        let valor = this.getBalance()
        valor = extra + 10
        console.log(`o  valor depositado foi de ${extra} o saldo final é de ${valor}`)
    }
}