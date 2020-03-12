import {deleteJwtLocalStorage, loadJwtLocalStorage} from "../utils/userUtils";
import {BASE_URL, getOption} from "./requestStructure";

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

export const getUsers = async (searchParam) => {
    try {
        const token = loadJwtLocalStorage().token;
        const response = await fetch(`${BASE_URL}users?param=${searchParam}`, getOption('GET', null, token));
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
