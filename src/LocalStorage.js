
export const getUsers = () => {
    if (localStorage.getItem('ent-lk') !== null) {
        return JSON.parse(localStorage.getItem('ent-lk'))
    } else {
        localStorage.setItem('ent-lk', JSON.stringify([]))
        return []
    }
};
export const createUser = (email, password) => {
    let users = getUsers();
    users.push({ email: email, password: password });
    localStorage.setItem('ent-lk', JSON.stringify(users));
}

export const checkUser = (email) => {
    let users = getUsers();
    let exists = false;
    users.forEach((user) => {
        user.email === email && (exists = true);
    })
    if (exists) {
        return true
    } else {
        return false
    }
}

export const logIn = () => {
    localStorage.setItem('ent-lk-log', 'logged')
}

export const logOut = () => {
    localStorage.setItem('ent-lk-log', 'logged')
}

export const checkLogin = () => {
    if(localStorage.getItem('ent-lk-log') === 'logged'){
        return true
    }else{
        return false
    }
}