import { CompanyAccount } from './class/CompanyAccount'
import { DevAccount } from './class/DevAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

const devAccount: DevAccount = new DevAccount('Alefy', 25)

devAccount.depositoExtra(100)

companyAccount.deposit(10)
companyAccount.deposit(10)
companyAccount.withdraw(5)
companyAccount.getLoan(100)
