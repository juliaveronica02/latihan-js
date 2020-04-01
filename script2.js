let bigCompany = ['google', 'facebook', 'apple'];

let human = {
    name: 'julia',
    height: 10,
    weight: 50,
    live: 'Tanjung Pinang',
    job: ['facebook', 'twitter', {
        name: 'apple',
        location: 'kepri'
    }],
    pet: {
        name: 'blacky',
        height: 20,
        weight: 29,
        live: 'brazil',
    },
    printNameAndDogName: function () {
        const myName = this.name
        const dogName = this.pet.name
        debugger;
        console.log(`my name is ${myName}& my dog name is ${dogName}`)
    },
    printJob: (urutan) => {
        console.log('parameter')
        const job = human.job[0]
        console.log(`my job is ${job}`);
    }
}

console.log(human.name);
console.log(human.live[1]);
let petName = human.pet.name

let building = {
    name: 'batam pos',
    floor: 21,
    printNameAndFloor: function () {
        const name = this.name;
        const floor = this.floor;
        console.log(`${name} building have ${floor}`)
    },
    printOther: otherInfo => console.log(otherInfo),
    printSecond:(otherInfo)=>{
        console.log(otherInfo)
        console.error('danger')
    }
}
//json.stringify membuat JSON(javascript object notation)/ javascript object ke string
let jsonString = JSON.stringify(building)
//hasilnya =>"{"name":"Batam Pos", "Floor":21};
//yang diambil adalah value yang string, integer, boolean dan float

//JSON.Parse membuat JSON berbentuk string kembali ke asalnya/ke object
let jsonParse = JSON.parse(jsonString)
console.log(jsonParse)
//hasilnya
/*
{
    "name":"Batam Pos",
    "floor": "21"
}
*/

