import axios from 'axios'

export default async function clientapi(type,search,paramname) {
    
    const token = new URLSearchParams(search).get(paramname)
    if(type == 'auth' && token === 'string')
    {
        const apiinstance = axios.create({
            baseURL: '/api/',
        })
                
        return apiinstance.get(`authenticate?token=${token}`)
    }

    return null;

}


