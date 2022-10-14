export const getUsers = () => {
    if (localStorage.getItem('ent-lk') !== null) {
        return localStorage.getItem('ent-lk')
    } else {
        return []
    }
};

