/* ============================================================================
   Galeri foto Desa Cantik Kukar.

   CARA MENAMBAH FOTO — tiga langkah, tanpa menyentuh kode lain:
     1. Taruh berkas fotonya di folder assets/foto/
     2. Tambahkan satu baris di daftar FOTO di bawah.
     3. Unggah keduanya ke GitHub.

   Saran teknis: sisi terpanjang sekitar 1600 piksel, format .jpg, ukuran di
   bawah 400 KB per foto supaya halaman tetap ringan dibuka dari HP di desa.
   Nama berkas tanpa spasi, huruf kecil semua, mis. batuah-pembinaan-2025.jpg

   Isian tiap baris:
     berkas   nama berkas di folder assets/foto/
     judul    keterangan singkat yang tampil di bawah foto
     tahun    "2022" … "2026" (dipakai untuk mengelompokkan)
     lebar    true bila foto ini layak tampil melebar satu baris penuh
   ========================================================================== */
window.FOTO = [
  /* Contoh penulisan — hapus tanda komentar dan ganti isinya bila fotonya sudah ada:
  { berkas: "sumber-sari-pembinaan-2026.jpg", judul: "Pendampingan agen statistik Desa Sumber Sari, 2026", tahun: "2026", lebar: true },
  { berkas: "batuah-penghargaan-2025.jpg",    judul: "Penyerahan penghargaan Desa Cantik terbaik Kaltim kepada Desa Batuah, 2025", tahun: "2025" },
  { berkas: "loa-duri-ilir-2024.jpg",         judul: "Kelas statistik perangkat Desa Loa Duri Ilir, 2024", tahun: "2024" },
  */
];

/* Kalimat yang tampil bila daftar di atas masih kosong. */
window.FOTO_KOSONG = "Foto kegiatan Desa Cantik Kukar akan ditampilkan di sini. Cara menambahkannya ada di assets/galeri.js.";
