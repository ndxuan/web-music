class User {
    id;
    name;
    username;
    email;
    password;
    avatar;
    role;
    status;


    constructor(id,name, username, email, password, avatar, role, status) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.role = 'User';
        this.status = status;
    }
}