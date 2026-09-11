# Folder foto Desa Cantik

Letakkan berkas foto kegiatan di folder ini, lalu daftarkan di `assets/galeri.js`.

## Tiga langkah

1. **Unggah fotonya ke folder ini.** Beri nama yang jelas dan tanpa spasi,
   misalnya `batuah-pembinaan-2025.jpg`. Usahakan ukurannya di bawah 400 KB
   per foto agar halaman tetap ringan dibuka dari HP.

2. **Tambahkan satu baris di `assets/galeri.js`,** di dalam `window.FOTO`:

   ```js
   { berkas: "batuah-pembinaan-2025.jpg", judul: "Pembinaan agen statistik Desa Batuah", tahun: "2025" },
   ```

   Tambahkan `lebar: true` bila foto ingin melebar dua kolom:

   ```js
   { berkas: "penganugerahan-2025.jpg", judul: "Penganugerahan Desa Cantik Terbaik", tahun: "2025", lebar: true },
   ```

3. **Unggah kedua perubahan itu.** Galeri di beranda akan langsung terisi.
   Selama `window.FOTO` masih kosong, halaman menampilkan kotak ajakan
   mengisi foto — bukan galeri kosong yang rusak.

## Yang perlu diperhatikan

- Foto yang memuat wajah warga sebaiknya seizin yang bersangkutan.
- Jangan memuat foto yang menampilkan data pribadi warga (nama, NIK, alamat,
  daftar penerima bantuan) — termasuk tangkapan layar aplikasi berisi data itu.
- Urutan foto di halaman mengikuti urutan barisnya di `assets/galeri.js`.
