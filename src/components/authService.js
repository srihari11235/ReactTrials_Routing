const users =
[
     {
         username: "Sri",
         password: "pass",
     },
     {
          username: 'Srihari112',
          password: 'password'
     }
 ];


const authService = {

    isAuthenticated: false,
    authenticate(email,password) {
        const detail = users.find(user => {
            return user.username === email;
    });

    if(detail && detail.password === password)
        this.isAuthenticated = true;
    }
}

export default authService;