/* ============================================================================
   Galeri Desa Cantik Kukar.

   CARA MENAMBAH FOTO — tiga langkah, tanpa menyentuh kode lain:
     1. Taruh berkas fotonya di folder assets/foto/
     2. Tambahkan satu baris di daftar FOTO di bawah.
     3. Unggah keduanya ke GitHub.

   Saran teknis: sisi terpanjang sekitar 1600 piksel, format .jpg, ukuran di
   bawah 400 KB per berkas supaya halaman tetap ringan dibuka dari HP di desa.
   Nama berkas tanpa spasi, huruf kecil semua, mis. batuah-pembinaan-2025.jpg

   Isian tiap baris:
     berkas     nama berkas di folder assets/foto/
     judul      keterangan yang tampil di bawah gambar
     tahun      tahun kejadiannya (tampil di samping keterangan)
     kelompok   "penghargaan" | "pembinaan" | "profil"  → menentukan bagiannya
     lebar      true bila foto layak tampil melebar satu baris penuh
     utuh       true untuk infografis — ditampilkan penuh tanpa dipotong,
                dan bisa diklik untuk membuka ukuran aslinya
   ========================================================================== */
window.FOTO = [

  /* ---------------- penghargaan ---------------- */
  { berkas: "penghargaan-loa-duri-ilir.jpg", kelompok: "penghargaan", tahun: "2024",
    judul: "Penyerahan penghargaan Desa Cantik kepada Desa Loa Duri Ilir — terbaik se-Kalimantan Timur" },
  { berkas: "penghargaan-batuah-bps-ri.jpg", kelompok: "penghargaan", tahun: "2025",
    judul: "Delegasi Desa Batuah di kantor BPS RI, Jakarta — penerimaan penghargaan peringkat 6 nasional" },

  /* ---------------- monitoring & pembinaan ---------------- */
  { berkas: "monev-2024-perjalanan-sungai.jpg", kelompok: "pembinaan", tahun: "2024",
    judul: "Menuju desa binaan lewat Sungai Mahakam" },
  { berkas: "monev-2024-pertemuan-kantor-desa.jpg", kelompok: "pembinaan", tahun: "2024",
    judul: "Pertemuan monitoring dan evaluasi di kantor desa" },
  { berkas: "monev-2024-diskusi-aparat-desa.jpg", kelompok: "pembinaan", tahun: "2024",
    judul: "Diskusi kebutuhan data bersama aparat desa", lebar: true },
  { berkas: "monev-2024-pendampingan.jpg", kelompok: "pembinaan", tahun: "2024",
    judul: "Pendampingan pengelolaan data desa" },
  { berkas: "monev-2024-sosialisasi-warga.jpg", kelompok: "pembinaan", tahun: "2024",
    judul: "Sosialisasi Desa Cinta Statistik kepada warga" },
  { berkas: "monev-2024-papan-statistik-desa.jpg", kelompok: "pembinaan", tahun: "2024",
    judul: "Papan statistik kependudukan yang disusun desa sendiri" },
  { berkas: "monev-2024-tim-pembina.jpg", kelompok: "pembinaan", tahun: "2024",
    judul: "Tim pembina Desa Cantik BPS Kutai Kartanegara di lapangan" },
  { berkas: "monev-2024-foto-bersama.jpg", kelompok: "pembinaan", tahun: "2024",
    judul: "Foto bersama pembina dan perangkat desa seusai pendampingan" },

  /* ---------------- profil desa binaan dalam angka ---------------- */
  { berkas: "infografis-batuah.jpg", kelompok: "profil", tahun: "binaan 2025", utuh: true,
    judul: "Desa Batuah, Kecamatan Loa Janan — sarana pendidikan terlengkap di antara desa binaan" },
  { berkas: "infografis-loa-duri-ilir.jpg", kelompok: "profil", tahun: "binaan 2024", utuh: true,
    judul: "Desa Loa Duri Ilir, Kecamatan Loa Janan — desa peternakan dengan BUMDes terbesar" },
  { berkas: "infografis-loa-janan-ulu.jpg", kelompok: "profil", tahun: "binaan 2022", utuh: true,
    judul: "Desa Loa Janan Ulu, Kecamatan Loa Janan — pusat layanan kecamatan" },
  { berkas: "infografis-jawa.jpg", kelompok: "profil", tahun: "binaan 2022", utuh: true,
    judul: "Kelurahan Jawa, Kecamatan Sanga-Sanga — seluruh keluarga berlistrik PLN" },
  { berkas: "infografis-maluhu.jpg", kelompok: "profil", tahun: "binaan 2022", utuh: true,
    judul: "Kelurahan Maluhu, Kecamatan Tenggarong — musyawarah kelurahan terbanyak, 15 kali setahun" },
  { berkas: "infografis-sungai-payang.jpg", kelompok: "profil", tahun: "binaan 2022", utuh: true,
    judul: "Desa Sungai Payang, Kecamatan Loa Kulu — potensi wisata yang terus berkembang" },
  { berkas: "infografis-pela.jpg", kelompok: "profil", tahun: "binaan 2022", utuh: true,
    judul: "Desa Pela, Kecamatan Kota Bangun — desa wisata pesut Mahakam" }
];

/* Judul tiap bagian galeri, berurutan. Kelompok yang tidak punya isi otomatis
   tidak ditampilkan, jadi daftar ini aman dibiarkan apa adanya. */
window.FOTO_KELOMPOK = [
  ["penghargaan", "Penghargaan", "Capaian yang dibawa pulang desa binaan Kutai Kartanegara."],
  ["pembinaan",   "Monitoring dan pembinaan", "Pendampingan Desa Cinta Statistik di lapangan — dari perjalanan menyusuri sungai sampai papan statistik yang disusun desa sendiri."],
  ["profil",      "Desa binaan dalam angka", "Profil singkat tiap desa dan kelurahan binaan, disusun dari data yang mereka kelola sendiri. Klik untuk membuka ukuran penuh."]
];

/* Kalimat yang tampil bila daftar di atas masih kosong. Ditulis untuk pembaca
   umum — petunjuk teknisnya ada di komentar atas dan assets/foto/BACA-DULU.md. */
window.FOTO_KOSONG = "Dokumentasi kegiatan pembinaan Desa Cantik Kutai Kartanegara akan ditampilkan di sini.";
