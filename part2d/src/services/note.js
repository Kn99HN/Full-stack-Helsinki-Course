import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

//we no longer return promise but return the response data
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

//return an object that has three property
export default { getAll, create, update}