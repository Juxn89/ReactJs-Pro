const BASE_URL = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {
    const URL = `${BASE_URL}/${endpoint}`;

    if(method === 'GET') {
        return fetch(URL);
    }
    else {
        return fetch(URL, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

const fetchConToken = (endpoint, data, method = 'GET') => {
    const URL = `${BASE_URL}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    // console.log(token);
    if(method === 'GET') {
        return fetch(URL, {
            method,
            headers: {
                'x-token': token
            }
        });
    }
    else {
        return fetch(URL, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    }
}

export {
    fetchSinToken,
    fetchConToken
}