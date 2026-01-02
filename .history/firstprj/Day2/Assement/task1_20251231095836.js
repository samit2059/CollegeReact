class User{
    constructor(Name){
        this.Name = Name;
    }
    login(){
        console.log('UserName = ', this.Name)
    }
}

const user1 = new User()