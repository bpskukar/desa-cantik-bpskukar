# Desa Cantik Kukar

Bagian keempat dari **PINTAR Kukar** — Pusat Informasi & Layanan Statistik Terpadu
BPS Kabupaten Kutai Kartanegara.

Situs ini memuat dua hal:

1. **Profil dan capaian Desa Cinta Statistik (Desa Cantik) Kutai Kartanegara** —
   apa itu Desa Cantik, siapa yang berperan, bagaimana pembinaannya berjalan,
   dan capaian desa binaan 2022–2026.
2. **Kelas Statistik Desa** — 15 modul belajar mandiri dengan 106 soal latihan,
   terbuka untuk siapa saja, tanpa pendaftaran.

Alamat: <https://bpskukar.github.io/desa-cantik-bpskukar/>

---

## Isi situs

| Berkas | Isi |
|---|---|
| `index.html` | Beranda: capaian, pengenalan Desa Cantik, proses pembinaan, galeri foto |
| `kelas.html` | Kelas Statistik Desa: daftar modul dan pembaca modul |
| `assets/dc.css` | Sistem tampilan (warna hijau desa, kartu, lini masa, kaki halaman) |
| `assets/kelas.css` | Tampilan khusus halaman kelas: kartu modul, pembaca, latihan |
| `assets/pintar.js` | Bilah PINTAR Kukar & penyelaras tema — **sama persis di keempat repositori** |
| `assets/capaian.js` | Data capaian: ringkasan, lini masa per tahun, syarat, tahapan pembinaan |
| `assets/galeri.js` | Daftar foto kegiatan (lihat "Menambah foto" di bawah) |
| `assets/kelas.js` | Mesin pembaca modul: penggambar isi, latihan, kemajuan belajar, rute |
| `assets/modul-baca.js` | Jalur 1 — 5 modul literasi angka (21 soal) |
| `assets/modul-desa.js` | Jalur 2 — 10 modul kurikulum Desa Cantik (85 soal) |

Situs ini **statis sepenuhnya**: tidak ada basis data, tidak ada akun, tidak ada
pengiriman data ke mana pun. Kemajuan belajar disimpan di `localStorage` peramban
pembaca sendiri dengan kunci `descan-kelas-v1`.

---

## Kelas Statistik Desa

### Jalur 1 · Baca Angka (5 modul, 21 soal)

Dasar literasi statistik. Diangkat dan diperdalam dari situs lama
`kelas-baca-angka`, dengan tambahan contoh yang relevan untuk desa.

1. Satuan menentukan arti
2. Persen, poin persen, dan laju
3. Indeks: angka tanpa satuan
4. Kemiskinan diukur tiga angka, bukan satu
5. Empat jebakan tafsir

### Jalur 2 · Statistik Desa (10 modul, 85 soal)

Mengikuti 12 materi kurikulum Pembinaan Desa Cantik 2026, dipadatkan menjadi
sepuluh modul belajar mandiri.

1. Mengenal Desa Cantik — program, dasar hukum, peran, output wajib
2. Satu siklus kegiatan statistik — GSBPM, metadata, Standar Data Statistik
3. Mengenali kebutuhan data desa — kuesioner identifikasi & pola empat pertanyaan
4. Mengumpulkan data — syarat data baik, teknik, perancangan
5. Mengolah data — empat tahap, validasi, praktik Excel
6. Manajemen kualitas data — delapan prinsip, sumber kesalahan, PDCA
7. Analisis data desa — ukuran, distribusi frekuensi, tabel, *disclosure control*
8. Menyajikan dan menyebarkan data — tabel, grafik, infografis, publikasi desa
9. Mengenal FASIH — peran, sinkronisasi, status, keamanan
10. DTSEN dan Sensus Ekonomi 2026 — desil, jalur usulan, tenggat, peran desa

### Sumber materi

Seluruh isi Jalur 2 disarikan dari materi **Pembinaan Desa Cantik 2026** BPS RI.
Angka, ketentuan, dan tenggat ditulis apa adanya dari materi; apa yang tidak ada
di materi tidak ditambahkan.

> **Catatan penting.** Materi pelatihan Desa Cantik 2026 **tidak memuat** bobot
> penilaian, jumlah indikator, skor, ambang kelulusan, maupun kategori/level
> (pratama–madya–utama). Karena itu hal-hal tersebut **tidak dicantumkan** di
> situs ini. Bila kelak tersedia sumber resminya, barulah ditambahkan.

Berkas PDF materi pelatihan **tidak diunggah** ke repositori ini dan tidak
disediakan untuk diunduh — hanya isinya yang disarikan menjadi modul.

---

## Menambah foto kegiatan

1. Letakkan berkas foto di folder `assets/foto/` (ukuran wajar, maksimal ±400 KB
   per foto agar halaman tetap ringan).
2. Buka `assets/galeri.js`, tambahkan satu baris di dalam `window.FOTO`:

   ```js
   { berkas: "batuah-pembinaan-2025.jpg", judul: "Pembinaan agen statistik Desa Batuah", tahun: "2025" },
   ```

   Tambahkan `lebar: true` bila foto ingin ditampilkan melebar dua kolom.
3. Unggah kedua perubahan itu. Galeri akan langsung terisi; selama `window.FOTO`
   masih kosong, halaman menampilkan kotak ajakan mengisi foto.

## Memperbarui capaian

Seluruh angka dan nama desa ada di `assets/capaian.js` — tidak ada angka yang
ditulis langsung di HTML. Untuk menambah tahun binaan berikutnya, tambahkan satu
objek di `linimasa` dan sesuaikan `ringkas`.

Kolom `nama` dan `kecamatan` yang masih kosong pada data 2022 dan 2026 menunggu
konfirmasi kantor, dan tidak ditampilkan selama masih kosong.

## Menambah atau menyunting modul

Cukup menambah satu objek di `assets/modul-baca.js` atau `assets/modul-desa.js`.
Bentuk blok isi yang tersedia dijelaskan di bagian atas masing-masing berkas:

```
["p", "paragraf"]            ["h", "subjudul"]
["daftar", [...]]            ["nomor", [...]]
["kotak", "judul", "html"]   ["hitung", "judul", ["baris", ...]]
["rumus", "rumus", "ket"]    ["tabel", [["kepala"...], ["baris"...]]]
["ingat", "..."]             ["salah", "..."]      ["sumber", "..."]
```

Bentuk soal: `{ t: pertanyaan, p: [4 pilihan], b: indeks jawaban benar, j: penjelasan }`.
Setiap soal wajib empat pilihan dan satu penjelasan — penjelasan ditampilkan
baik untuk jawaban benar maupun salah.

---

## Hubungan dengan repositori lain

Empat repositori, satu domain `bpskukar.github.io`:

| Repositori | Alamat |
|---|---|
| `bpskukar.github.io` | `/` — beranda PINTAR Kukar |
| `indikator-strategis-bpskukar` | `/indikator-strategis-bpskukar/` |
| `katalog-data-bpskukar` | `/katalog-data-bpskukar/` |
| `desa-cantik-bpskukar` | `/desa-cantik-bpskukar/` ← repositori ini |

`assets/pintar.js` **identik di keempat repositori**. Bila salah satu diubah,
ketiganya yang lain harus ikut diperbarui agar menu tetap selaras.

Situs ini juga memakai asisten **Tanya PST** dari repositori katalog
(`/katalog-data-bpskukar/assets/asisten.js`) — tidak ada salinannya di sini.

Situs lama `kelas-baca-angka` dialihkan ke `kelas.html` di repositori ini.

---

## Catatan

Halaman ini adalah bahan pembinaan dan informasi publik, **bukan publikasi resmi
BPS**. Untuk angka resmi, gunakan publikasi di <https://kukarkab.bps.go.id>.
