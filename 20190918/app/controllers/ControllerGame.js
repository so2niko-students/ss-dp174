import {ViewGame} from '/app/views/ViewGame.js';
import {ModelGame} from '/app/models/ModelGame.js';

export class ControllerGame{
    constructor(){
        this.model = new ModelGame(this);
        this.view = new ViewGame(this);
        this.actionGetUser();
    }

    actionGetUser(){
        this.model.getUser();
    }
    getUser(user){
        this.view.render(user);
    }
    chooseGender(ev){
        if(ev.target.classList.contains('btns')){
            this.model.isRightGender(ev.target.classList.contains('btnM')? 'male': 'female');
        }
        this.actionGetUser();
    }

}