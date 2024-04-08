let data="my secret data";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
        
    }
    viewData(){
        console.log("data=",data);
    }
    }
    class Admin extends user{
        constructor(name,email){
            super(name,email);
        }
        editData(){
           data="some new value";
        }
       }
    let student =new user("yogesh","abc@gmail.com");
    let student2 =new user("arpit","abc@gamil.com"); 
  let Admin1=new Admin("alau","sjdm@gamil.com");