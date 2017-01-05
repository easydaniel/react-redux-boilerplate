import fetch from 'isomorphic-fetch'
import querystring from 'querystring'

export const get = (data) => fetch(`url?${querystring.stringify(data)}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}).then(res => res.json())

export const post = (data) => fetch(`url`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => res.json())
