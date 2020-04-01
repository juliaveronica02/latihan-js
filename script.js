const phi =3.14
// const WEBSERVERGOOGLE ="8.8.8.8";//www.google.com
// let luasLingkaran = phi * dimater;
// phi = 6
// luasLingkaran = phi * diameter;

info="internet positif";
console.log('berisi informasi developer');
console.log("Berisi Informasi Developer");
console.log(`Berisi informasi developer`);
console.log(`berisi informasi ${info}`);

// memberikan pesan
// window.alert("pesan : login success");

//memberikan input
const name = window.prompt("who are you?", "Developer");
console.log(`Saya adalah ${name}`);

//konfirmasi
const namanyaBenar = window.confirm(`true ${name}?`)
debugger;//melihat eksekusi kemana saja
//kondisi
if (namanyaBenar){
    console.log("nice");
}
else{
    console.log("jika bukan ulang isi");
}

