import {loadJwtLocalStorage} from "../utils/userUtils";
import {BASE_URL, getOption} from "./requestStructure";

export const getClients = async (searchParams) => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}clients?param=${searchParams}`, getOption('GET', null, token));
        return await response.json();
    } catch (e) {
        console.error(e)
    }
};

export const getClient = async (id) => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}clients/${id}`, getOption('GET', null, token));
        return await response.json();
    } catch (e) {
        console.error(e)
    }
};

export const createClient = async (client) => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}clients`, getOption('POST', client, token));
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export const updateClient = async (client) => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}clients/${client.id}`, getOption('PUT', client, token));
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export const deleteClient = async (id) => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}clients/${id}`, getOption('DELETE', null, token));
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};
