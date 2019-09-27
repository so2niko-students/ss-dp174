import {Templater} from '/components/Templater/Templater.js';

document.addEventListener('DOMContentLoaded', ()=>{
    const t = new Templater('t1.html');
    fetch('https://vderunov.github.io/pet_store/data/goods.json')
        .then(d=>d.json())
        .then(dd=>{
            dd.forEach(o=>{
                o.url = `https://vderunov.github.io/pet_store${o.url.slice(1)}`;
                t.load(o, document.body);
            });
        })
    
});

