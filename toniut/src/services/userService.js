import uniqueId from 'lodash/uniqueId';

export default {
    users: [{
        id: uniqueId(),
        name: 'admin',
        password: '1234'
    }],
    login(name, pass) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.users.find((user => (user.name === name && user.password === pass)))) {
                    resolve({ token: Math.random() });
                } else {
                    reject();
                }
            }, 500 + Math.random() * 500);
        });
    },
    register(user) {
        return new Promise((resolve => {
            setTimeout(() => {
                const newUser = {
                    ...user,
                    id: uniqueId()
                };

                this.users.push(newUser);

                resolve();
            }, 1000 + Math.random() * 500);
        }));
    }
};
