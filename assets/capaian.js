/* ============================================================================
   Capaian & data Desa Cantik Kabupaten Kutai Kartanegara.
   SATU-SATUNYA berkas yang perlu disunting saat ada desa binaan baru atau
   hasil penilaian baru. Semua halaman membaca dari sini.

   Bagian yang masih kosong ("") sengaja dibiarkan kosong — halaman otomatis
   menyembunyikannya, jadi tidak akan muncul tulisan menggantung. Isi bila
   datanya sudah pasti; jangan diisi kira-kira.

   Nama desa & capaian tiap tahun dirujuk dari pemberitaan resmi (lihat
   "rujukan" di tiap tahun). DUA HAL YANG PERLU DIPASTIKAN KANTOR:
   (a) kecamatan lima desa/kelurahan binaan 2022 — nama desanya bersumber dari
       berita Diskominfo Kaltim, tetapi kecamatannya dilengkapi dari rujukan
       wilayah, bukan dari berita itu sendiri;
   (b) apakah ada desa binaan tahun 2023 — tidak ditemukan pemberitaannya,
       sehingga tahun itu tidak ditampilkan di lini masa.
   ========================================================================== */
window.DESCAN = {

  /* -------- ringkasan yang tampil di beranda -------- */
  ringkas: {
    tahunMulai: 2022,
    totalDesa: 10,                 /* 5 (2022) + 1 (2024) + 1 (2025) + 3 (2026) */
    juaraKaltim: 3,                /* 2024, 2025, 2026 */
    capaianNasional: "6 besar nasional",
    catatan: "Angka pada halaman ini merangkum pembinaan Desa Cinta Statistik oleh BPS Kabupaten Kutai Kartanegara. Nama desa binaan dan capaiannya dirujuk dari pemberitaan resmi pemerintah daerah dan media kredibel — tautannya ada di tiap tahun."
  },

  /* -------- lini masa pembinaan -------- */
  /* peringkat: "" | "kaltim" | "nasional"  → menentukan warna penanda lini masa */
  linimasa: [
    {
      tahun: "2022", jumlah: 5, judul: "Lima desa binaan pertama",
      isi: "Awal Desa Cinta Statistik di Kutai Kartanegara. Lima desa/kelurahan dibina sekaligus: pengenalan pengelolaan data desa, penunjukan agen statistik, dan penyusunan output statistik desa yang pertama.",
      desa: [
        { nama: "Kelurahan Jawa",          kecamatan: "Sanga-Sanga", catatan: "" },
        { nama: "Kelurahan Loa Janan Ulu", kecamatan: "Loa Janan",   catatan: "" },
        { nama: "Kelurahan Maluhu",        kecamatan: "Tenggarong",  catatan: "" },
        { nama: "Sungai Payang",           kecamatan: "Loa Kulu",    catatan: "" },
        { nama: "Pela",                    kecamatan: "Kota Bangun", catatan: "" }
      ],
      peringkat: "", prestasi: "",
      rujukan: [
        { judul: "Tingkatkan Literasi Statistik Melalui Desa Cantik BPS", penerbit: "Diskominfo Kaltim", tanggal: "11 Oktober 2022",
          url: "https://diskominfo.kaltimprov.go.id/berita/tingkatkan-literasi-statistik-melalui-desa-cantik-bps" }
      ]
    },
    {
      tahun: "2024", jumlah: 1, judul: "Desa Loa Duri Ilir",
      isi: "Pembinaan dipusatkan pada satu desa agar pendampingannya lebih dalam. Hasilnya Loa Duri Ilir menjadi Desa Cantik terbaik se-Kalimantan Timur dan menempati peringkat ke-23 nasional dari 38 desa terbaik se-Indonesia.",
      desa: [{ nama: "Loa Duri Ilir", kecamatan: "Loa Janan", catatan: "" }],
      peringkat: "kaltim", prestasi: "Terbaik se-Kaltim · Peringkat 23 nasional",
      rujukan: [
        { judul: "Desa Loa Duri Ilir Duduki Peringkat ke-23 Desa Cantik Tingkat Nasional", penerbit: "Pemkab Kutai Kartanegara", tanggal: "Februari 2025",
          url: "https://www.kukarkab.go.id/berita/2119/Desa-Loa-Duri-Ilir-Duduki-Peringkat-ke-23-Desa-Cantik-Tingkat-Nasional" },
        { judul: "Terbaik di Kaltim, Loa Duri Ilir Duduki Peringkat 23 Desa Cantik Tingkat Nasional", penerbit: "Kaltim Today", tanggal: "26 Februari 2025",
          url: "https://kaltimtoday.co/terbaik-di-kaltim-loa-duri-ilir-duduki-peringkat-23-desa-cantik-tingkat-nasional" },
        { judul: "Desa Loa Duri Ilir Terpilih Desa Cantik Terbaik se-Kaltim Tahun 2024", penerbit: "Koran Kaltim", tanggal: "Februari 2025",
          url: "https://korankaltim.com/read/undefined/77569/desa-loa-duri-ilir-terpilih-desa-cantik-terbaik-se-kaltim-tahun-2024" }
      ]
    },
    {
      tahun: "2025", jumlah: 1, judul: "Desa Batuah",
      isi: "Capaian tertinggi sejauh ini. Batuah tidak hanya terbaik se-Kalimantan Timur, tetapi juga menembus peringkat enam nasional — bukti bahwa pendampingan yang tekun di satu desa bisa berbicara di tingkat pusat.",
      desa: [{ nama: "Batuah", kecamatan: "Loa Janan", catatan: "" }],
      peringkat: "nasional", prestasi: "Terbaik se-Kaltim · Peringkat 6 nasional",
      rujukan: [
        { judul: "Desa Batuah Kukar Buktikan Tata Kelola Data Terbaik, Raih Penghargaan Desa Cantik BPS RI", penerbit: "Berita Kaltim", tanggal: "29 Oktober 2025",
          url: "https://beritakaltim.co/2025/10/29/desa-batuah-kukar-buktikan-tata-kelola-data-terbaik-raih-penghargaan-desa-cantik-bps-ri/" },
        { judul: "Tim Field Evaluation BPS RI Lakukan Penilaian Tahap Akhir Desa Cantik 2025 di Desa Batuah", penerbit: "Pemkab Kutai Kartanegara", tanggal: "2025",
          url: "https://www.kukarkab.go.id/berita/2816/Tim-Field-Evaluation-BPS-RI-Lakukan-Penilaian-Tahap-Akhir-Desa-Cantik-2025-di-Desa-Batuah" },
        { judul: "Bupati Kukar sebut “Desa Cantik” permudah rancang pembangunan", penerbit: "ANTARA Kaltim", tanggal: "17 Mei 2025",
          url: "https://kaltim.antaranews.com/berita/238109/bupati-kukar-sebut-desa-cantik-permudah-rancang-pembangunan" },
        { judul: "Pencanangan dan Pembinaan Desa Cinta Statistik (Cantik) Tahun 2025 di Desa Batuah", penerbit: "Kecamatan Loa Janan", tanggal: "Mei 2025",
          url: "https://loajanan.kukarkab.go.id/2025/05/info-berita/berita-desa/1894/" }
      ]
    },
    {
      tahun: "2026", jumlah: 3, judul: "Tiga desa binaan, Sumber Sari melaju",
      isi: "Mengikuti sasaran nasional tiga desa/kelurahan per kabupaten/kota, dan ketiganya sengaja dipilih dari satu kecamatan — Loa Kulu — agar pendampingan lebih efisien. Dicanangkan Wakil Gubernur Kalimantan Timur pada 13 Mei 2026. Sumber Sari kini masuk 15 besar nasional, satu-satunya wakil Kalimantan Timur; penilaian akhir dan penganugerahan berlangsung September 2026.",
      desa: [
        { nama: "Sumber Sari",   kecamatan: "Loa Kulu", catatan: "15 besar nasional" },
        { nama: "Loa Kulu Kota", kecamatan: "Loa Kulu", catatan: "lokasi pencanangan" },
        { nama: "Ponoragan",     kecamatan: "Loa Kulu", catatan: "" }
      ],
      peringkat: "kaltim", prestasi: "Terbaik se-Kaltim · 15 besar nasional",
      berjalan: true,
      rujukan: [
        { judul: "Sumber Sari Masuk 15 Besar Nasional Desa Cantik", penerbit: "Berita Alternatif", tanggal: "9 September 2026",
          url: "https://www.beritaalternatif.com/sumber-sari-masuk-15-besar-nasional-desa-cantik/" },
        { judul: "Wagub Kaltim Canangkan Tiga Desa Cantik di Kukar, Perkuat Pembangunan Desa Berbasis Data Presisi", penerbit: "Pemprov Kalimantan Timur", tanggal: "17 Mei 2026",
          url: "https://www.kaltimprov.go.id/detailberita/wagub-kaltim-canangkan-tiga-desa-cantik-di-kukar-perkuat-pembangunan-desa-berbasis-data-presisi" },
        { judul: "Pencanangan Desa Cantik di Desa Loa Kulu Kota Berlangsung Meriah", penerbit: "Kecamatan Loa Kulu", tanggal: "13 Mei 2026",
          url: "https://loakulu.kukarkab.go.id/pencanangan-desa-cantik-di-desa-loa-kulu-kota-berlangsung-meriah-dihadiri-wakil-gubernur-kaltim-dan-bupati-kukar/" },
        { judul: "Desa Cantik perkuat data dan literasi statistik Kukar", penerbit: "ANTARA Kaltim", tanggal: "15 Mei 2026",
          url: "https://kaltim.antaranews.com/berita/261663/desa-cantik-perkuat-data-dan-literasi-statistik-kukar" },
        { judul: "3 Daerah di Kukar Wakili Program Desa Cantik 2026, Mengarah ke Mandiri dan Berkualitas", penerbit: "Tribun Kaltim", tanggal: "Mei 2026",
          url: "https://kaltim.tribunnews.com/tribun-etam/1148757/3-daerah-di-kukar-wakili-program-desa-cantik-2026-mengarah-ke-mandiri-dan-berkualitas" },
        { judul: "BPS Kukar Dorong Sumber Sari Jadi Desa Percontohan Berbasis Data", penerbit: "Berita Alternatif", tanggal: "2026",
          url: "https://www.beritaalternatif.com/bps-kukar-dorong-sumber-sari-jadi-desa-percontohan-berbasis-data/" }
      ]
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
