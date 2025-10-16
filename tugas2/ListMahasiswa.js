import Mahasiswa from './Mahasiswa.js';
class ListMahasiswa {
  constructor() {
    this.list = [];
  }

  add(mahasiswa) {
    if (mahasiswa instanceof Mahasiswa) {
      this.list.push(mahasiswa);
    } else {
      console.error("Data bukan instance dari Mahasiswa");
    }
  }

  show() {
    return this.list.map(m => m.show());
  }

  update(nim, data) {
    const mhs = this.list.find(m => m.nim === nim);
    if (mhs) mhs.update(data);
  }

  deleteById(nim) {
    this.list = this.list.filter(m => m.nim !== nim);
  }

  clear() {
    this.list = [];
  }

  jumlahMahasiswa() {
    return this.list.length;
  }

  sortByNIM() {
    this.list.sort((a, b) => a.nim.localeCompare(b.nim));
  }

  sortByStatus() {
    this.list.sort((a, b) => b.status - a.status);
  }

  jumlahAktifTidak() {
    const aktif = this.list.filter(m => m.status).length;
    const tidakAktif = this.list.length - aktif;
    return { aktif, tidakAktif };
  }

  clearArray() {
    this.clear();
  }
}

export default ListMahasiswa;