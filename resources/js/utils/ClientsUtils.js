export const validateNewClient = (client) => {
    console.log('validateNewClient', client)
    const { name, email, password, address, age, telephone } = client;
    return new Promise((resolve) => {
        resolve((
            name.trim() !== "" &&
            email.trim() !== "" &&
            password.trim() !== "" &&
            address.trim() !== "" &&
            age > 0 &&
            telephone.trim() !== ""
        ));
    });
};
