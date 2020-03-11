export const validateNewUser = ({ name, email, password }) => {
    return new Promise((resolve) => {
        resolve((name.trim() !== "" && email.trim() !== "" && password.trim() !== ""));
    });
};

export const validateLoginUser = ({ role, email, password }) => {
    return new Promise((resolve) => {
        resolve((role.trim() !== "" && email.trim() !== "" && password.trim() !== ""));
    });
};

export const saveJwtLocalStorage = ({ token, user, is_admin }) => {
    try {
        const serializedData = JSON.stringify({ token, user, is_admin });
        localStorage.setItem('data', serializedData);
        return true;
    } catch (e) {
        return false;
    }
};

export const loadJwtLocalStorage = () => {
    try {
        const serializedData = localStorage.getItem('data');
        return (serializedData === null) ? undefined : JSON.parse(serializedData);
    } catch (error) {
        return undefined;
    }
};

export const deleteJwtLocalStorage = () => {
    try {
        localStorage.removeItem('data');
        return true;
    } catch (error) {
        return false;
    }
};
