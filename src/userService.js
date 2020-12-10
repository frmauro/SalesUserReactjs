const urlApi = "http://localhost:8088";

class UserService {

    static classInstance = null;
    static getAPIServiceInstance() {
        if (UserService.classInstance === null) {
            UserService.classInstance = new UserService();
        }
        return this.classInstance;
    }


    getUsers(){
        let arrUsers = [];

        return fetch(urlApi)
        .then(response =>  response.json())
        .then(items =>  {
             arrUsers = items;
             return arrUsers; 
            })
        .catch(err => console.log(err))
    }
}

export default UserService;