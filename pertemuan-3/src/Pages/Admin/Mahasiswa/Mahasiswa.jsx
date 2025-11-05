import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  confirmDelete,
  confirmUpdate,
} from "@/Utils/Helpers/SwalHelpers";
import { toastSuccess, toastError } from "@/Utils/Helpers/ToastHelpers";
import Card from "@/Pages/Layouts/Components/Card";
import Heading from "@/Pages/Layouts/Components/Heading";
import Button from "@/Pages/Layouts/Components/Button";
import TableMahasiswa from "./TableMahasiswa";
import ModalMahasiswa from "./ModalMahasiswa";
import { mahasiswaList as initialMahasiswaList } from "@/Data/Dummy";

const Mahasiswa = () => {
  const navigate = useNavigate();

  // Add missing state variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState({});
  const [mahasiswa, setMahasiswa] = useState(initialMahasiswaList);
  
  const handleEdit = (mhs) => {
    setIsEdit(true);
    setIsModalOpen(true);
    setForm({ nim: mhs.nim, nama: mhs.nama });
  };

  const handleDelete = (nim) => {
    confirmDelete(() => {
      setMahasiswa(mahasiswa.filter((m) => m.nim !== nim));
      toastSuccess("Data berhasil dihapus");
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nim || !form.nama) {
      toastError("NIM dan Nama wajib diisi");
      return;
    }

    if (isEdit) {
      confirmUpdate(() => {
        setMahasiswa(mahasiswa.map((m) => (m.nim === form.nim ? form : m)));
        toastSuccess("Data berhasil diperbarui");
        setForm({ nim: "", nama: "" });
        setIsEdit(false);
        setIsModalOpen(false);
      });
    } else {
      const exists = mahasiswa.find((m) => m.nim === form.nim);
      if (exists) {
        toastError("NIM sudah terdaftar!");
        return;
      }
      setMahasiswa([...mahasiswa, form]);
      toastSuccess("Data berhasil ditambahkan");
      setForm({ nim: "", nama: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Heading as="h1">Mahasiswa</Heading>
        <Button onClick={() => setIsModalOpen(true)}>Tambah Mahasiswa</Button>
      </div>
      <TableMahasiswa
        data={mahasiswa}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDetail={(nim) => navigate(`/admin/mahasiswa/${nim}`)}
      />
      <ModalMahasiswa
        isOpen={isModalOpen}
        isEdit={isEdit}
        form={form}
        onChange={handleChange}
        onClose={() => {
          setIsModalOpen(false);
          setIsEdit(false);
          setForm({});
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Mahasiswa;