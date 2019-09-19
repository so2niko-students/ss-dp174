export class ModelGame{
    constructor(contr){
        this.controller = contr;
        this.api = 'https://randomuser.me/api/';
        this.user = {
            info : {
                errors : 0,
                male : 0,
                female : 0
            }
        };
    }

    getUser(){
        fetch(this.api).then(d=>d.json()).then((dd)=>{
            this.user.gender = dd.results[0].gender;
            this.user.picture = dd.results[0].picture.large;
            
            this.controller.getUser(this.user);
        });
    }

    isRightGender(gender){
        if(gender === this.user.gender){
            this.user.info[gender]++;
        }else{
            this.user.info.errors++;
        }
    }
}