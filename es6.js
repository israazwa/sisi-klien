const mahasiswa  = {
    nama : "Isra",
    nim : "A11.2023.15287",
    umur : 20,
    status : "true",
    hobby : ["turu", "membaca", "traveling"],
    //array
    matkul : [
        {matkulId : 4301,
        matkulnama : "Pemrograman sisi klien",
        sks : 3,
        nilai : 85
        },
        {matkulId : 4302,
        matkulnama : "Basis Data",
        sks : 3,
        nilai : 90
        },
    ]
};
//destructuring Object
console.log(mahasiswa);

// const nama = mahasiswa.nama;
// const nim = mahasiswa.ni

const { nama, nim, status, hobby, matkul } = mahasiswa;
console.log("Nama Saya  " + nama+" - "+nim);

//ES6 Destructuring Array
const [hobi1, hobi2] = hobby;
console.log("Hobi saya adalah " + hobi1 + " dan " + hobi2);

//ES6 - Template Literals
console.log(`Hobby sumber cuanku: ${hobi1} dan ${hobi2}`);

//ES6 - Spread Operator
const newHobby = "buzzer";
const updateHobby = [...hobby,newHobby, "Roblox"];
console.log(`Menginfo hobby 2025  ${updateHobby}`);

//ES6 - Function 
//lama
function sum(a,b){
    return a + b;
}
//baru
const sum2 = (a,b) => a + b;
console.log(`Hasil penjumlahan 5 + 10 = ${sum(5,10)}`);

//ES6 - logical operator
const statusMhs = status? "Aktif" : "Tidak Aktif";
console.log(`Statusku ${statusMhs}`);

const aktifMhs = mahasiswa.organisasi || "Tidak Aktif Organisasi";
console.log(`Status Organisasi : ${aktifMhs}`);