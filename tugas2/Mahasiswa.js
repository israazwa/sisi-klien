class Mahasiswa {
  constructor(nim, nama, tugas, uts, uas, status = true) {
    this.nim = nim;
    this.nama = nama;
    this.tugas = tugas;
    this.uts = uts;
    this.uas = uas;
    this.status = status; // true = aktif, false = tidak aktif
  }

  show() {
    return {
      NIM: this.nim,
      Nama: this.nama,
      Tugas: this.tugas,
      UTS: this.uts,
      UAS: this.uas,
      Status: this.status ? "Aktif" : "Tidak Aktif"
    };
  }

  update(data) {
    Object.assign(this, data);
  }

  totalNilai() {
    return this.tugas + this.uts + this.uas;
  }

  kategoriNilai() {
    const total = this.totalNilai();
    if (total >= 85) return "A";
    if (total >= 75) return "B";
    if (total >= 65) return "C";
    if (total >= 50) return "D";
    return "E";
  }

  IPS() {
    return (this.totalNilai() / 3).toFixed(2);
  }
}

export default Mahasiswa;