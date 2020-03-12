export const BASE_URL = `http://127.0.0.1:8000/api/v1/`;

export const getOption = (method = 'GET', body, token = '') => {
    const headerToken = token === '' ? {} : {
        'Authorization': `Bearer ${token}`
    };

    const requestBody = method === "GET" ? {} : {
        body: JSON.stringify(body)
    };

    return {
        method: method,
        ...requestBody,
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headerToken
        })
    };
};
