export class Templater{
    constructor(link){
        fetch(link).then(l=>l.text()).then(t=>{this.template = t;});
    }
    load(obj, dom){
        let answ = this.template;
        for(let el in obj){
            answ = answ.replace(`{{${el}}}`, obj[el]);
        }
        dom.innerHTML += answ;
    }
}