//const urlApi = "http://localhost:8088";

//pod(service) kubernates(minikube)
const urlApiPut = "http://localhost/user";
const urlApiCreate = "http://localhost/create";
const urlApi = "http://localhost/users";

class UserService {

    static classInstance = null;
    static getUserServiceInstance() {
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


    insertUser(vm){

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: vm
        };

        return fetch(urlApiCreate, requestOptions)
        .then(response => response.json())
        .then(item => { return item })
        .catch(err => console.log(err))
    }

    updateUser(vm){

          const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: vm
          };
  
         return fetch(urlApiPut, requestOptions)
            .then(response => response.json())
            .then(item => { return item; })
            .catch(err => console.log(err))
    }
}

export default UserService;