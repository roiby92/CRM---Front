import { action, observable } from 'mobx'
import Client from './Client'

export default class Company {
    @observable companyName
    @observable clients = []
    constructor(name) {
        this.name = name
    }
    
    @action loadDataFromFile = (data)=>{
        data.forEach(c=>{
            this.clients.push(new Client(
                c._id,c.name,
                c.email,
                c.firstContact,
                c.emailType,
                c.sold,
                c.owner,
                c.country
                ))
        })
    }
}