import {deleteJwtLocalStorage, loadJwtLocalStorage} from "../utils/userUtils";

const BASE_URL = `http://127.0.0.1:8000/api/v1/`;

const getOption = (method = 'GET', body, token = '') => {
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

export const loginUser = async (user) => {
    try {
        const response = await fetch(`${BASE_URL}auth/login`, getOption('POST', user));
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export const logoutUser = async () => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}auth/expire`, getOption('POST', null, token));
        deleteJwtLocalStorage();
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export const getUsers = async () => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}users`, getOption('GET', null, token));
        return await response.json();
    } catch (e) {
        console.error(e)
    }
};

export const getUser = async (id) => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}users/${id}`, getOption('GET', null, token));
        return await response.json();
    } catch (e) {
        console.error(e)
    }
};

export const createUser = async (user) => {
    try {
        const response = await fetch(`${BASE_URL}auth/singup`, getOption('POST', user));
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export const updateUser = async (user) => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}users/${user.id}`, getOption('PUT', user, token));
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export const deleteUser = async (id) => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}users/${id}`, getOption('DELETE', null, token));
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};
