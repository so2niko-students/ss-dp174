function render(){
    let str = ``;
    gg.pets.forEach(el=>{
        str += `<div>
            <h3>${translate(el.type)}</h3>
            <p>${translate(el.name)} : ${translate(el.gender)}</p>
        </div>`;
    });
    document.body.innerHTML = str;
}

function translate(name){
    return gg.voc.ru[name] || name;
}

const gg = {
    pets : [],
    voc : {},
};
getData();

function getData(){
    fetch('data/pets.json').then(d=>d.json()).then(dd => {
        gg.pets = dd;
        fetch('data/voc_ru.json').then(f=>f.json()).then(ff => gg.voc.ru = ff).then(d=> render());
    });
}