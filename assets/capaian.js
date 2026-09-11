/* ============================================================================
   Capaian & data Desa Cantik Kabupaten Kutai Kartanegara.
   SATU-SATUNYA berkas yang perlu disunting saat ada desa binaan baru atau
   hasil penilaian baru. Semua halaman membaca dari sini.

   Bagian yang masih kosong ("") sengaja dibiarkan kosong — halaman otomatis
   menyembunyikannya, jadi tidak akan muncul tulisan menggantung. Isi bila
   datanya sudah pasti; jangan diisi kira-kira.
   ========================================================================== */
window.DESCAN = {

  /* -------- ringkasan yang tampil di beranda -------- */
  ringkas: {
    tahunMulai: 2022,
    totalDesa: 10,                 /* 5 (2022) + 1 (2024) + 1 (2025) + 3 (2026) */
    juaraKaltim: 3,                /* 2024, 2025, 2026 */
    capaianNasional: "6 besar nasional",
    catatan: "Angka pada halaman ini merangkum pembinaan Desa Cinta Statistik oleh BPS Kabupaten Kutai Kartanegara."
  },

  /* -------- lini masa pembinaan -------- */
  /* peringkat: "" | "kaltim" | "nasional"  → menentukan warna penanda lini masa */
  linimasa: [
    {
      tahun: "2022", jumlah: 5, judul: "Lima desa binaan pertama",
      isi: "Awal Desa Cinta Statistik di Kutai Kartanegara. Lima desa/kelurahan dibina sekaligus: pengenalan pengelolaan data desa, penunjukan agen statistik, dan penyusunan output statistik desa yang pertama.",
      desa: [],                    /* ← isi nama lima desanya bila sudah pasti */
      peringkat: "", prestasi: ""
    },
    {
      tahun: "2024", jumlah: 1, judul: "Desa Loa Duri Ilir",
      isi: "Pembinaan dipusatkan pada satu desa agar pendampingannya lebih dalam. Hasilnya Loa Duri Ilir menjadi Desa Cantik terbaik se-Kalimantan Timur.",
      desa: [{ nama: "Loa Duri Ilir", kecamatan: "", catatan: "" }],
      peringkat: "kaltim", prestasi: "Peringkat 1 Kalimantan Timur"
    },
    {
      tahun: "2025", jumlah: 1, judul: "Desa Batuah",
      isi: "Capaian tertinggi sejauh ini. Batuah tidak hanya terbaik se-Kalimantan Timur, tetapi juga menembus peringkat enam nasional — bukti bahwa pendampingan yang tekun di satu desa bisa berbicara di tingkat pusat.",
      desa: [{ nama: "Batuah", kecamatan: "", catatan: "" }],
      peringkat: "nasional", prestasi: "Peringkat 1 Kalimantan Timur · Peringkat 6 nasional"
    },
    {
      tahun: "2026", jumlah: 3, judul: "Tiga desa binaan, Sumber Sari melaju",
      isi: "Mengikuti sasaran nasional tiga desa/kelurahan per kabupaten/kota. Sumber Sari kembali membawa Kutai Kartanegara sebagai yang terbaik se-Kalimantan Timur dan kini masuk 15 besar nasional; penilaian akhir dan penganugerahan berlangsung September 2026.",
      desa: [
        { nama: "Sumber Sari", kecamatan: "", catatan: "Peringkat 1 Kaltim, 15 besar nasional" },
        { nama: "", kecamatan: "", catatan: "" },   /* ← desa binaan kedua 2026 */
        { nama: "", kecamatan: "", catatan: "" }    /* ← desa binaan ketiga 2026 */
      ],
      peringkat: "kaltim", prestasi: "Peringkat 1 Kalimantan Timur · 15 besar nasional",
      berjalan: true
    }
  ],

  /* -------- angka program tingkat nasional (materi pembinaan 2026) -------- */
  nasional: {
    dibina2125: "2.430",
    targetAkumulatif: [["2026", "3.618"], ["2027", "4.158"], ["2028", "4.698"], ["2029", "5.238"]],
    sasaran2026: "3 desa/kelurahan di setiap kabupaten/kota se-Indonesia",
    penganugerahan: "26 September 2026",
    sumber: "Materi Penjelasan Umum Program Desa Cantik 2026, BPS RI."
  },

  /* -------- syarat & output, dipakai bagian “proses pembinaan” -------- */
  syaratDesa: [
    "Belum pernah diajukan sebagai Desa Cantik, baik utama maupun tambahan.",
    "Diutamakan berada dalam satu kecamatan agar pembinaan lebih efisien.",
    "Tersedia fasilitas internet berkualitas sangat baik di kantor desa/kelurahan.",
    "Tersedia komputer atau laptop yang dapat dipakai khusus untuk mengelola data.",
    "Ada aparat desa/kelurahan yang mampu mengoperasikan komputer tersebut."
  ],
  outputWajib: [
    ["Monografi / profil desa", "Potret desa dalam angka: wilayah, penduduk, ekonomi, sarana. Menjadi rujukan pertama saat menyusun perencanaan."],
    ["Publikasi statistik desa", "Terbitan berkala berisi tabel dan analisis singkat, disusun sendiri oleh agen statistik desa."],
    ["Website berisi data desa", "Data yang sudah rapi dipublikasikan agar bisa dipakai warga, perangkat daerah, dan siapa pun."]
  ],
  syaratAgen: [
    "Aparat desa/kelurahan atau mitra statistik yang ditugaskan melalui SK Kepala Desa/Lurah.",
    "Bersedia mengikuti pembinaan statistik sampai selesai.",
    "Diutamakan pernah terlibat sensus, survei, atau pendataan lain.",
    "Diutamakan menguasai teknologi informasi.",
    "Jumlahnya lebih dari satu orang, dan minimal satu orang berasal dari aparat desa/kelurahan."
  ],

  /* -------- tahapan satu tahun pembinaan -------- */
  tahapan: [
    ["Pengusulan dan penetapan desa", "BPS Kabupaten/Kota mengusulkan desa yang memenuhi syarat lewat BPS Provinsi; penetapannya melalui Keputusan Kepala BPS."],
    ["Pelatihan pembina", "Pembina BPS Provinsi dilatih BPS Pusat, lalu melatih pembina BPS Kabupaten/Kota. Berjenjang, lewat LMS Pusdiklat BPS."],
    ["Sosialisasi ke perangkat desa", "Program diperkenalkan kepada kepala desa dan perangkatnya; desa menunjuk agen statistik lewat SK."],
    ["Pendampingan statistik", "Inti program: pendampingan bertahap mengikuti kurikulum — identifikasi kebutuhan, pengumpulan, pengolahan, analisis, penyajian, dan kualitas data."],
    ["Monitoring", "Kemajuan dilaporkan pada dasbor monitoring; pembina memastikan tiap tahap benar-benar dikerjakan desa, bukan dikerjakan BPS."],
    ["Penilaian berjenjang", "Penilaian mandiri oleh desa, verifikasi provinsi, evaluasi meja, evaluasi lapangan/daring, lalu pleno akhir."],
    ["Penganugerahan", "Penetapan predikat Desa Cantik dan pemilihan Desa Cantik Terbaik."],
    ["Keberlanjutan", "Desa berpredikat tetap menghasilkan output statistik dan mengirimkannya ke BPS — pembinaan tidak berhenti di seremoni."]
  ]
};
