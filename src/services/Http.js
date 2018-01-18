import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://0.0.0.0:3000'
})

instance.defaults.headers.common['STUFF'] = 'stuff'

export default instance
