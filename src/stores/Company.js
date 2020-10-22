import { observable, action, computed, makeObservable } from 'mobx'
import StoreService from '../Services/StoreService'
import moment from 'moment'
import Client from './Client'

export default class company {

    clients = [];

    constructor() {
        makeObservable(this, {
            clients: observable,
            allOwners: computed,
            allEmailTypes: computed,
            newClients: computed,
            emailsSent: computed,
            outstandingClients: computed,
            hottestCountry: computed,
            topOwners: action,
            salesByCountry: action,
            salesByDate: action,
            loadData: action,
            changeSold: action,
            addClient: action,
            updateClient: action
        })
    }

    _idMaker = () => '_' + Math.random().toString(36).substr(2, 9)

    get allOwners() {
        const owners = {}
        this.clients.map(c => c.owner ? owners[c.owner] = 1 : null)
        return Object.keys(owners).sort()
    }

    get allEmailTypes() {
        const emails = {}
        this.clients.map(c => c.emailType ? emails[c.emailType] = 1 : null)
        return Object.keys(emails).sort()
    }
    get newClients() {
        let counter = 0
        const d = new Date()
        for (let c of this.clients) {
            const firstContact = new Date(c.firstContact)
            if (firstContact.getMonth() === d.getMonth()
                && firstContact.getFullYear() === d.getFullYear()
            ) {
                counter++
            }
        }
        return counter
    }

    get emailsSent() {
        let emailsCounter = 0
        this.clients.forEach(c => { c.emailType && emailsCounter++ })
        return emailsCounter
    }
    get outstandingClients() {
        let outstandingCounter = 0
        this.clients.forEach(c => { !c.sold && outstandingCounter++ })
        return outstandingCounter
    }

    get hottestCountry() {
        let countries = {}
        let hotCountry = 0
        let returndCountry
        this.clients.forEach(c => {
            if (!countries[c.country]) {
                countries[c.country] = 1
            } else {
                countries[c.country]++
            }
            if (countries[c.country] > hotCountry) {
                hotCountry = countries[c.country]
                returndCountry = c.country
            }
        })

        return returndCountry;
    }
    topOwners = async () => {
        const topOwners = await StoreService().getTopOwners()
        return topOwners
    }
    salesByCountry = async () => {
        const topCountries = await StoreService().getSalseByCountry()
        return topCountries
    }
    salesByDate = async () => {
        const sealsByDate = await StoreService().getSalseByDate()
        return sealsByDate
    }
    loadData = async () => {
        const clientsData = await StoreService().getAllClients()
        const newData = clientsData.map(c => {
            if (c.sold === 1) {
                c.sold = true
            }
            else if (c.sold === 0) {
                c.sold = false
            }
            return new Client(c.id, c.name, c.email, c.firstContact, c.emailType, c.sold, c.owner, c.country)
        }
        )
        this.clients = newData
    }

    changeSold = (id) => {
        const client = this.clients.find(c => c.id === id)
        client.sold = !client.sold
    }

    addClient(client) {
        const id = this._idMaker()
        const firstContact = moment().format('YYYY-MM-DD HH:mm:ss')
        const { firstName, surName } = client
        const name = `${firstName} ${surName}`
        const newClient = new Client(id, name, client.email, firstContact, null, false, client.owner, client.country)
        this.clients.push(newClient)
        StoreService().postNewClient(newClient)
    }

    updateClient = async (clientName, property, value) => {
         await StoreService().updateClient(clientName,property,value)
        const client = this.clients.find(c => c.name === clientName)
        client[property] = value
    }

}