import axios from 'axios'

const API_URL = 'http://localhost/personal/'

async function getDashboard() {
    let res = await axios.get(API_URL)
    return res.data
}

let listingService = {
    getDashboard
}

export default listingService