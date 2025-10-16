import Mahasiswa from './Mahasiswa.js';
import ListMahasiswa from './ListMahasiswa.js';

const daftar = new ListMahasiswa();

const m1 = new Mahasiswa("22001", "Isra", 80, 85, 90);
const m2 = new Mahasiswa("22002", "Saqiba", 70, 75, 80, false);
const m3 = new Mahasiswa("22003", "Alya", 60, 65, 70);
const m4 = new Mahasiswa("22004", "Rizky", 90, 95, 100);
daftar.add(m1);
daftar.add(m2);
daftar.add(m3);
daftar.add(m4);

// Tampilkan semua
console.log(" Semua Mahasiswa:");
console.table(daftar.show());

// Update data
daftar.update("22002", { nama: "Saqiba Azwa", tugas: 78 });

// Hapus mahasiswa
daftar.deleteById("22001");

// Statistik
console.log(" Jumlah Mahasiswa:", daftar.jumlahMahasiswa());
console.log(" Jumlah Aktif/Tidak:", daftar.jumlahAktifTidak());

// Sorting
daftar.sortByNIM();
console.log(" Setelah Sort NIM:");
console.table(daftar.show());

// IPS dan Kategori
console.log(" IPS Saqiba:", m2.IPS());
console.log(" Kategori Nilai Saqiba:", m2.kategoriNilai());