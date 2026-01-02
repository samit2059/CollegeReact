// Create a button click example (even if simulated)
//  where calling a method loses this, 
// then fix it using .bind(this)

let user = {
    UserName:"json",
    id: 10008,
    displayBtn: function(){
        console.log("User name is :", this.UserName);
    }
}
console.log(user);
user.displayBtn();

let ram = user.displayBtn.(user);
ram();