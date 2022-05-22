import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountsController.getAccountList'

export default class AccountList extends LightningElement {

    @track accountsArray = []


    @wire(getAccountList)
    handleAccountList(result) {

        if (result.data) {
            this.accountsArray = result.data // this data is read only and cannot be modified.
            console.log('gurjit ', JSON.stringify(this.accountsArray))
        } else if (result.error) {
            console.error('There is an error', result.error)
        }
    }
}