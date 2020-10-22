import axios from 'axios'

const StoreService = function () {

    const getAllClients = async function () {
        const clientData = await axios.get('http://localhost:3100/clients')
        return clientData.data
    }

    const postNewClient = async function (client) {
        const newClient = await axios.post('http://localhost:3100/client', { client })
        return newClient.data
    }

    const getTopOwners = async function () {
        const topOwners = await axios.get('http://localhost:3100/top')
        return topOwners.data
    }
    const getSalseByCountry = async function () {
        const salseByCountry = await axios.get('http://localhost:3100/sales')
        return salseByCountry.data
    }
    const getSalseByDate = async function () {
        const salseByDate = await axios.get('http://localhost:3100/date')
        return salseByDate.data
    }

    const updateClient = async function (clientName, property, value) {
        let updateClient
        if (property === 'emailType') {
            let prop = 'email_type'
             updateClient = await axios.put('http://localhost:3100/update', { clientName, prop, value })
        }
        updateClient = await axios.put('http://localhost:3100/update', { clientName, property, value })
        return updateClient.data
    }

    return { getAllClients, postNewClient, getTopOwners, getSalseByCountry, getSalseByDate, updateClient }
}

export default StoreService;