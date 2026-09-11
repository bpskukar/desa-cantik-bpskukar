/* ============================================================================
   Jalur 1 — Baca Angka. Lima modul dasar literasi statistik.
   Seluruh contoh memakai angka Kabupaten Kutai Kartanegara yang sudah terbit
   (Booklet Indikator Strategis BPS Kukar), bukan angka rekaan.

   Bentuk tiap blok isi:
     ["p", "paragraf, boleh <b>tebal</b> dan <i>miring</i>"]
     ["h", "subjudul"]
     ["kotak", "judul", "isi html"]        kotak contoh
     ["hitung", "judul", ["baris", ...]]   perhitungan, huruf lebar tetap
     ["rumus", "rumus", "keterangan"]
     ["daftar"/"nomor", ["butir", ...]]
     ["tabel", [["kepala"...], ["baris"...]]]
     ["ingat", "kalimat yang perlu diingat"]
     ["salah", "kekeliruan yang sering terjadi"]
   Soal: { t: pertanyaan, p: [4 pilihan], b: indeks jawaban benar, j: penjelasan }
   ========================================================================== */
window.MODUL_BACA = [
{
  id: "satuan", jalur: "baca", menit: 4,
  judul: "Satuan menentukan arti",
  ringkas: "Angka yang sama bisa ditulis dengan beberapa cara. Yang membedakan hanya satuannya — dan di situ kesalahan paling dasar terjadi.",
  isi: [
    ["p", "Kesalahan paling sering dalam membaca statistik bukan salah hitung, melainkan <b>melewatkan satuan di kepala tabel</b>. Angkanya benar, tafsirnya meleset jauh."],
    ["kotak", "Contoh · Jumlah penduduk Kukar 2025", "<p style=\"margin:0 0 8px\">Tiga tulisan berikut menyatakan jumlah yang persis sama:</p><pre>845.621 jiwa  =  845,62 ribu jiwa  =  0,85 juta jiwa</pre>"],
    ["p", "Dalam penulisan Indonesia, <b>titik memisahkan ribuan</b> dan <b>koma menandai desimal</b> — kebalikan dari penulisan Inggris. Jadi 845.621 dibaca delapan ratus empat puluh lima ribu, bukan delapan ratus koma sekian. Kekeliruan ini sering muncul saat angka disalin dari sumber berbahasa Inggris ke laporan berbahasa Indonesia."],
    ["p", "Satuan juga menentukan skala. PDRB Kukar 2025 tercatat 210.653,44 <b>miliar rupiah</b>. Kalau satuannya terlewat, angka itu bisa dikira dua ratus ribu rupiah — padahal nilainya sekitar Rp210,65 triliun."],
    ["h", "Di tingkat desa, satuannya lebih beragam"],
    ["p", "Data desa mencampur banyak satuan sekaligus: jiwa, kepala keluarga, rumah tangga, bidang, hektare, unit, dan rupiah. Dua angka yang kelihatan sebanding sering menghitung hal yang berbeda."],
    ["tabel", [["Ditulis", "Satuannya", "Artinya"],
      ["1.245", "KK", "banyaknya kepala keluarga, bukan banyaknya orang"],
      ["1.245", "jiwa", "banyaknya orang"],
      ["1.245", "rumah tangga", "banyaknya rumah tangga — bisa berbeda dari jumlah KK"]]],
    ["p", "Satu rumah tangga bisa memuat lebih dari satu kepala keluarga, dan satu kepala keluarga bisa terdiri atas beberapa jiwa. Menjumlahkan bantuan per KK memakai angka jiwa akan salah besar."],
    ["ingat", "Sebelum membaca isi tabel, baca dulu judul, satuan, dan tahunnya. Tiga baris itu yang menentukan arti seluruh angka di bawahnya."],
    ["sumber", "Angka Kukar: Booklet Indikator Strategis Kabupaten Kutai Kartanegara, BPS Kabupaten Kutai Kartanegara."]
  ],
  soal: [
    { t: "PDRB per kapita Kukar tercatat 249,11 juta rupiah. Berapa nilainya dalam rupiah penuh?",
      p: ["Rp249.110", "Rp2.491.100", "Rp249.110.000", "Rp249.110.000.000"], b: 2,
      j: "249,11 juta berarti 249,11 × 1.000.000 = Rp249.110.000. Pilihan terakhir keliru sebesar seribu kali lipat." },
    { t: "Sebuah tabel desa menulis “Jumlah penduduk: 1.245”. Tanpa satuan, apa yang harus dilakukan?",
      p: ["Anggap saja jiwa, karena biasanya begitu", "Cari kepala tabel atau sumbernya untuk memastikan satuannya", "Kalikan empat karena rata-rata satu KK empat orang", "Abaikan angkanya"], b: 1,
      j: "Menganggap satuan berdasarkan kebiasaan adalah sumber kesalahan yang paling sering. Satuan harus dipastikan, bukan ditebak — apalagi 1.245 KK dan 1.245 jiwa berbeda jauh." },
    { t: "Dalam penulisan Indonesia, angka 7.892,50 berarti…",
      p: ["Tujuh koma delapan sembilan dua", "Tujuh ribu delapan ratus sembilan puluh dua koma lima", "Tujuh juta delapan ratus sembilan puluh dua ribu", "Tujuh ribu delapan ratus sembilan puluh dua ribu lima ratus"], b: 1,
      j: "Titik memisahkan ribuan, koma menandai desimal. Jadi 7.892,50 = tujuh ribu delapan ratus sembilan puluh dua setengah." },
    { t: "Desa mencatat 320 rumah tangga dan 355 kepala keluarga. Mana kesimpulan yang benar?",
      p: ["Datanya pasti salah, keduanya harus sama", "Ada rumah tangga yang memuat lebih dari satu kepala keluarga", "Ada 35 orang yang tidak punya rumah", "Jumlah penduduknya 675"], b: 1,
      j: "Rumah tangga dan kepala keluarga adalah dua unit pencatatan yang berbeda. Selisih 35 wajar: beberapa rumah tangga memuat lebih dari satu KK, misalnya anak yang sudah berkeluarga dan tinggal serumah." }
  ],
  sumber: "Modul Pengumpulan Data dan Penyajian Data, Pembinaan Desa Cantik 2026, BPS RI."
},
{
  id: "persen", jalur: "baca", menit: 5,
  judul: "Persen, poin persen, dan laju",
  ringkas: "Kesalahan yang paling sering muncul di berita dan laporan — termasuk dari orang yang sudah terbiasa dengan angka.",
  isi: [
    ["p", "Kalau sebuah persentase berubah, <b>selisihnya bukan persen, melainkan poin persen</b>. Dua-duanya angka yang benar, tetapi mengukur hal yang berbeda, dan menukarnya membuat pembaca menyimpulkan hal yang keliru."],
    ["p", "Persentase penduduk miskin Kukar turun dari 7,28 persen pada 2024 menjadi 6,72 persen pada 2025."],
    ["hitung", "Dua cara membaca penurunan yang sama", ["7,28% − 6,72%  =  turun 0,56 poin persen", "0,56 ÷ 7,28    =  turun 7,7 persen (relatif)"]],
    ["salah", "Menulis “kemiskinan turun 0,56 persen” itu keliru. Yang turun 0,56 adalah <b>poin persen</b>-nya. Kalau memang ingin menyebut persen, angkanya 7,7 persen — selisih yang dibagi angka awalnya."],
    ["h", "Melambat bukan berarti menyusut"],
    ["p", "Pertumbuhan ekonomi Kukar melambat dari 5,61 persen pada 2024 menjadi 3,43 persen pada 2025. Ekonominya <b>tetap membesar</b>, hanya tambahannya lebih kecil dari tahun sebelumnya. Ekonomi baru menyusut kalau angkanya negatif."],
    ["h", "Di desa, persen dari angka kecil mudah menipu"],
    ["p", "Populasi desa kecil, jadi perubahan satu-dua kejadian bisa terlihat dramatis dalam persen. Misalnya jumlah kasus di suatu desa naik dari 1 menjadi 2."],
    ["hitung", "Kenaikan 100 persen yang sebenarnya dua kasus", ["2016: 1 kasus  →  2017: 2 kasus", "Kenaikan relatif  =  (2 − 1) ÷ 1  =  100 persen"]],
    ["p", "Secara hitungan benar, tetapi menulis “kasus melonjak 100 persen” tanpa menyebut angka aslinya menyesatkan. Untuk angka kecil, <b>sebutkan jumlah sebenarnya lebih dulu</b>, persennya belakangan — atau jangan pakai persen sama sekali."],
    ["ingat", "Selisih dua persentase = poin persen. Perubahan relatif = persen. Untuk kejadian yang jumlahnya sedikit, sebut jumlahnya, bukan persennya."]
  ],
  soal: [
    { t: "Tingkat Pengangguran Terbuka Kukar 4,40 persen. Andai tahun depan menjadi 4,00 persen, bagaimana menulisnya dengan benar?",
      p: ["Pengangguran turun 0,40 persen", "Pengangguran turun 0,40 poin persen", "Pengangguran turun 40 persen", "Pengangguran turun 4 persen"], b: 1,
      j: "Selisih dua angka persentase dinyatakan dalam poin persen. Kalau mau memakai satuan persen, hitungannya 0,40 ÷ 4,40 = turun sekitar 9,1 persen." },
    { t: "Pertumbuhan ekonomi Kukar 5,61 persen (2024) lalu 3,43 persen (2025). Mana kesimpulan yang benar?",
      p: ["Ekonomi Kukar menyusut pada 2025", "Ekonomi Kukar tetap tumbuh, tetapi lebih lambat", "Ekonomi Kukar berhenti tumbuh", "Ekonomi Kukar kehilangan 2,18 persen nilainya"], b: 1,
      j: "Angka 3,43 persen masih positif, artinya ekonominya bertambah besar — hanya tambahannya lebih kecil dibanding tahun sebelumnya. Menyusut baru terjadi bila angkanya negatif." },
    { t: "Cakupan rumah tangga berjamban sehat di sebuah desa naik dari 62 persen menjadi 68 persen. Penulisan yang tepat adalah…",
      p: ["Naik 6 persen", "Naik 6 poin persen", "Naik 68 persen", "Naik 9,7 poin persen"], b: 1,
      j: "68 − 62 = 6 poin persen. Kalau ingin menyatakannya sebagai persen, hitungannya 6 ÷ 62 = naik sekitar 9,7 persen — dua ukuran yang berbeda." },
    { t: "Sebuah desa melaporkan “kasus stunting melonjak 200 persen” padahal jumlahnya berubah dari 1 anak menjadi 3 anak. Apa masalah penulisan itu?",
      p: ["Hitungannya salah, seharusnya 300 persen", "Hitungannya benar tetapi menyesatkan karena jumlahnya sangat kecil; sebutkan angka sebenarnya", "Tidak ada masalah, itu cara baku", "Seharusnya ditulis naik 2 poin persen"], b: 1,
      j: "Hitungannya benar — (3 − 1) ÷ 1 = 200 persen — tetapi pada angka yang sangat kecil, persentase melebih-lebihkan perubahan. Tulislah “dari 1 menjadi 3 anak”, baru sebutkan persennya bila perlu." }
  ]
},
{
  id: "indeks", jalur: "baca", menit: 5,
  judul: "Indeks: angka tanpa satuan",
  ringkas: "Sebagian indikator berbentuk indeks — ringkasan tanpa satuan yang hanya berarti bila kita tahu skalanya dan arah mana yang baik.",
  isi: [
    ["p", "Indeks adalah angka ringkasan yang tidak punya satuan. Ia hanya berarti bila kita tahu dua hal: <b>skalanya sampai berapa</b>, dan <b>arah mana yang berarti membaik</b>. Yang paling sering tertukar justru yang kedua."],
    ["tabel", [["Indeks", "Skala", "Arah baik", "Kukar"],
      ["IPM — Indeks Pembangunan Manusia", "0–100", "makin tinggi makin baik", "77,25"],
      ["Gini Ratio", "0–1", "makin rendah makin merata", "0,285"],
      ["IKG — Indeks Ketimpangan Gender", "0–1", "makin rendah makin setara", "0,349"]]],
    ["p", "Kategori IPM menurut BPS: rendah di bawah 60, sedang 60–70, tinggi 70–80, dan sangat tinggi 80 ke atas. Dengan 77,25 Kukar berada di kategori <b>tinggi</b>."],
    ["p", "Gini mengukur ketimpangan pengeluaran. Nol berarti semua orang persis sama, satu berarti seluruh kue dikuasai satu orang. IKG mengukur ketimpangan antara laki-laki dan perempuan pada kesehatan reproduksi, pemberdayaan, dan pasar kerja."],
    ["salah", "IPM naik berarti membaik, tetapi Gini naik berarti <b>memburuk</b>. Menyamakan arah keduanya — “semua indeks naik, berarti semua membaik” — adalah kekeliruan yang sering muncul dalam paparan."],
    ["h", "Indeks yang sering ditemui perangkat desa"],
    ["p", "Selain indeks BPS di atas, desa sering berhadapan dengan Indeks Desa Membangun (IDM) dari Kementerian Desa, yang menggolongkan desa menjadi mandiri, maju, berkembang, tertinggal, dan sangat tertinggal. Aturan membacanya sama: pastikan skalanya, pastikan arah baiknya, dan pastikan tahun serta sumbernya sebelum dibandingkan dengan desa lain."],
    ["ingat", "Tiga pertanyaan sebelum memakai indeks apa pun: skalanya berapa sampai berapa, arah mana yang baik, dan tahun berapa angkanya."]
  ],
  soal: [
    { t: "Gini Kukar 0,285, sedangkan sebuah kabupaten lain 0,340. Mana yang benar?",
      p: ["Kukar lebih timpang karena angkanya lebih kecil", "Pengeluaran di Kukar lebih merata", "Penduduk Kukar lebih kaya", "Tidak bisa dibandingkan karena satuannya berbeda"], b: 1,
      j: "Pada Gini, makin rendah makin merata. Angka 0,285 lebih rendah dari 0,340, jadi pengeluaran di Kukar lebih merata. Ini tidak berarti penduduknya lebih kaya — Gini mengukur pembagian, bukan tingkat." },
    { t: "Sebuah daerah melaporkan IPM naik dan Gini juga naik. Apa artinya?",
      p: ["Semuanya membaik", "Semuanya memburuk", "Pembangunan manusia membaik, tetapi ketimpangan melebar", "Datanya pasti salah, keduanya tidak mungkin naik bersamaan"], b: 2,
      j: "Arah baik kedua indeks berlawanan. IPM naik berarti membaik; Gini naik berarti pembagiannya makin timpang. Keduanya bisa terjadi bersamaan, dan justru itu temuan yang penting dilaporkan." },
    { t: "IPM sebuah kabupaten 68,4. Menurut kategori BPS, termasuk apa?",
      p: ["Rendah", "Sedang", "Tinggi", "Sangat tinggi"], b: 1,
      j: "Kategorinya: rendah di bawah 60, sedang 60–70, tinggi 70–80, sangat tinggi 80 ke atas. Angka 68,4 berada di kategori sedang." },
    { t: "Seorang perangkat desa membandingkan IDM desanya tahun 2023 dengan IDM desa tetangga tahun 2026. Apa masalahnya?",
      p: ["Tidak ada masalah, keduanya IDM", "Tahun pembandingnya berbeda, jadi bukan perbandingan yang adil", "IDM tidak boleh dibandingkan antar desa", "Seharusnya memakai IPM"], b: 1,
      j: "Membandingkan dua indeks dari tahun berbeda mencampur perbedaan antar-desa dengan perubahan antar-waktu. Perbandingan yang adil memakai tahun yang sama." }
  ]
},
{
  id: "kemiskinan", jalur: "baca", menit: 6,
  judul: "Kemiskinan diukur tiga angka, bukan satu",
  ringkas: "Menyebut “angka kemiskinan” saja sering menyembunyikan setengah ceritanya. BPS mengukurnya dengan tiga indikator yang menjawab pertanyaan berbeda.",
  isi: [
    ["tabel", [["Ukuran", "Menjawab pertanyaan", "Kukar 2025"],
      ["P0 — persentase penduduk miskin", "Berapa <b>banyak</b> orang yang berada di bawah garis kemiskinan?", "6,72 persen"],
      ["P1 — indeks kedalaman", "Seberapa <b>jauh</b> rata-rata pengeluaran mereka di bawah garis itu?", "0,79"],
      ["P2 — indeks keparahan", "Seberapa <b>timpang</b> keadaan di antara sesama penduduk miskin?", "0,15"]]],
    ["p", "Garis kemiskinan Kukar 2025 adalah <b>Rp705.397 per kapita per bulan</b>. Penduduk yang pengeluaran per orang per bulannya di bawah angka itu dihitung sebagai miskin. Garis ini berubah tiap tahun mengikuti harga kebutuhan pokok, jadi membandingkan garis antartahun tanpa memperhatikan kenaikan harga juga keliru."],
    ["kotak", "Kasus nyata · Kukar 2024 ke 2025", "<pre>P0  7,28 → 6,72   turun\nP1  0,65 → 0,79   naik\nP2  0,10 → 0,15   naik</pre><p style=\"margin:10px 0 0\">Jumlah penduduk miskin berkurang, tetapi yang masih miskin justru berada makin jauh di bawah garis, dan jaraknya antar sesama mereka melebar. Kalau hanya P0 yang dilaporkan, kabar buruk ini hilang sama sekali.</p>"],
    ["h", "Pertanyaan desa berbeda dengan yang diukur BPS"],
    ["p", "Perangkat desa hampir selalu ditanya <b>siapa</b> yang miskin — untuk menyalurkan bantuan. Yang diukur BPS lewat P0/P1/P2 adalah <b>berapa banyak</b>, dari survei sampel, dan hanya sahih sampai tingkat kabupaten. Dua pertanyaan yang berbeda, dan keduanya sah."],
    ["p", "Untuk pertanyaan “siapa”, rujukannya adalah data <i>by name by address</i> seperti DTSEN yang memeringkat keluarga ke dalam desil kesejahteraan. Modul DTSEN di jalur Statistik Desa membahasnya tersendiri."],
    ["salah", "Menghitung jumlah penduduk miskin desa dengan mengalikan P0 kabupaten ke jumlah penduduk desa. Itu tidak sah: P0 berasal dari survei sampel yang tidak dirancang mewakili desa, dan tingkat kemiskinan antardesa jauh berbeda."],
    ["ingat", "P0 menjawab berapa banyak, P1 seberapa dalam, P2 seberapa timpang. Laporkan ketiganya — atau setidaknya sebutkan bahwa yang dilaporkan baru satu di antaranya."]
  ],
  soal: [
    { t: "P0 turun tetapi P1 dan P2 naik. Mana penafsiran yang paling tepat?",
      p: ["Kemiskinan membaik sepenuhnya", "Jumlah orang miskin berkurang, tetapi yang tersisa makin dalam kemiskinannya", "Garis kemiskinan pasti diturunkan", "Jumlah orang miskin bertambah"], b: 1,
      j: "P0 turun berarti jumlahnya berkurang; P1 naik berarti rata-rata mereka makin jauh di bawah garis; P2 naik berarti jarak antar sesama penduduk miskin melebar. Membaik di satu sisi, memburuk di sisi lain." },
    { t: "Sebuah rumah tangga di Kukar berpengeluaran Rp650.000 per orang per bulan pada 2025. Bagaimana statusnya?",
      p: ["Tidak miskin, karena di atas Rp500.000", "Miskin, karena di bawah garis Rp705.397", "Rentan miskin, bukan miskin", "Tidak bisa ditentukan tanpa data pendapatan"], b: 1,
      j: "Garis kemiskinan Kukar 2025 adalah Rp705.397 per kapita per bulan, dan ukuran yang dipakai adalah pengeluaran, bukan pendapatan. Rp650.000 berada di bawah garis itu." },
    { t: "Kepala desa meminta angka “jumlah penduduk miskin desa kami” dengan mengalikan P0 kabupaten 6,72 persen ke 2.000 penduduk desa. Bagaimana sebaiknya ditanggapi?",
      p: ["Kerjakan saja, hasilnya 134 orang", "Jelaskan bahwa P0 dari survei sampel tidak sahih dipakai sampai tingkat desa, dan tawarkan rujukan yang tepat", "Tolak tanpa penjelasan", "Pakai angka provinsi supaya lebih aman"], b: 1,
      j: "Mengalikan angka kabupaten ke desa menghasilkan angka yang tampak meyakinkan tetapi tidak punya dasar. Yang benar adalah menjelaskan keterbatasannya dan mengarahkan ke data yang memang dirancang per keluarga." },
    { t: "Apa yang diukur garis kemiskinan BPS?",
      p: ["Pendapatan per bulan seluruh rumah tangga", "Batas pengeluaran per kapita per bulan untuk memenuhi kebutuhan minimum", "Upah minimum kabupaten", "Nilai bantuan sosial per keluarga"], b: 1,
      j: "Garis kemiskinan adalah batas pengeluaran per kapita per bulan; penduduk dengan pengeluaran di bawahnya digolongkan miskin. Ia bukan upah minimum dan bukan besaran bantuan." }
  ]
},
{
  id: "jebakan", jalur: "baca", menit: 6,
  judul: "Empat jebakan tafsir",
  ringkas: "Angka yang benar masih bisa dibaca keliru. Empat jebakan ini yang paling sering menjerat penulis laporan.",
  isi: [
    ["h", "Pertama, nominal bukan riil"],
    ["p", "PDRB Kukar 2025 tercatat Rp210.653 miliar atas dasar harga berlaku, tetapi Rp147.909 miliar atas dasar harga konstan. Selisihnya adalah pengaruh kenaikan harga. Untuk mengukur pertumbuhan, yang dipakai <b>selalu harga konstan</b> — kalau tidak, kita ikut menghitung inflasi sebagai pertumbuhan."],
    ["h", "Kedua, pastikan pembandingnya sama"],
    ["p", "Pada triwulan I 2026, ekonomi Kukar tumbuh 2,20 persen dibanding triwulan yang sama tahun sebelumnya, tetapi terkontraksi 4,56 persen dibanding triwulan sebelumnya."],
    ["hitung", "Dua pembanding untuk satu triwulan", ["y-on-y   TW I 2026 vs TW I 2025    +2,20%", "q-to-q   TW I 2026 vs TW IV 2025   −4,56%"]],
    ["p", "Dua-duanya benar dan tidak bertentangan, karena pembandingnya berbeda. Menyandingkan keduanya tanpa menyebut pembandingnya membuat pembaca menyimpulkan hal yang keliru."],
    ["h", "Ketiga, angka besar tidak berarti sejahtera"],
    ["p", "PDRB per kapita Kukar sekitar Rp249 juta per tahun, tetapi pengeluaran riil per kapita hanya sekitar Rp13,4 juta per tahun. PDRB per kapita adalah <b>nilai produksi wilayah dibagi jumlah penduduk</b>, bukan penghasilan yang diterima penduduk. Di daerah dengan sektor ekstraktif besar, jarak antara keduanya memang lebar."],
    ["h", "Keempat, angka yang tidak bisa dibandingkan"],
    ["p", "Dua angka boleh dibandingkan hanya bila konsep, cakupan, dan waktunya sama. Jumlah penduduk hasil proyeksi berbeda dengan hasil pencatatan administrasi kependudukan; keduanya benar menurut definisinya masing-masing dan tidak perlu dipaksa sama. Begitu juga data desa hasil pendataan sendiri tidak otomatis sebanding dengan angka BPS yang memakai konsep dan periode berbeda."],
    ["ingat", "Sebelum menyimpulkan: harga berlaku atau konstan, dibandingkan dengan apa, mengukur siapa, dan apakah konsepnya memang sama."]
  ],
  soal: [
    { t: "Untuk menghitung pertumbuhan ekonomi, PDRB mana yang dipakai?",
      p: ["Atas dasar harga berlaku, karena nilainya lebih besar", "Atas dasar harga konstan, karena pengaruh harga sudah dikeluarkan", "Rata-rata keduanya", "Yang mana saja, hasilnya sama"], b: 1,
      j: "Harga konstan menilai produksi dengan harga tahun dasar, sehingga yang tersisa hanya perubahan jumlah barang dan jasa. Memakai harga berlaku berarti menghitung inflasi sebagai pertumbuhan." },
    { t: "PDRB per kapita Kukar Rp249 juta per tahun. Mana kesimpulan yang keliru?",
      p: ["Nilai produksi wilayah per penduduk tergolong tinggi", "Rata-rata penduduk Kukar berpenghasilan Rp249 juta per tahun", "Skala ekonomi wilayahnya besar dibanding jumlah penduduknya", "Angka ini tidak menggambarkan pembagiannya ke penduduk"], b: 1,
      j: "PDRB per kapita membagi nilai produksi wilayah dengan jumlah penduduk. Sebagian besar nilai itu tidak diterima penduduk sebagai penghasilan, terutama di daerah dengan sektor ekstraktif besar." },
    { t: "Ekonomi tumbuh 2,20 persen (y-on-y) sekaligus terkontraksi 4,56 persen (q-to-q). Apa yang terjadi?",
      p: ["Salah satu angkanya pasti keliru", "Keduanya benar, karena membandingkan dengan periode yang berbeda", "Ekonomi tumbuh dan menyusut pada saat yang sama, jadi mustahil", "Angka q-to-q selalu lebih dipercaya"], b: 1,
      j: "y-on-y membandingkan dengan triwulan yang sama tahun sebelumnya; q-to-q dengan triwulan sebelumnya. Keduanya sah dan sering berbeda arah, terutama pada kegiatan yang musiman." },
    { t: "Jumlah penduduk desa menurut proyeksi BPS 2.140 jiwa, sedangkan menurut data administrasi desa 2.310 jiwa. Sikap yang tepat?",
      p: ["Pakai yang lebih besar supaya bantuan lebih banyak", "Salah satunya pasti salah dan harus dibuang", "Keduanya sah menurut konsepnya; sebutkan sumber dan konsepnya saat dipakai", "Rata-ratakan keduanya menjadi 2.225"], b: 2,
      j: "Proyeksi penduduk dan pencatatan administrasi memakai konsep dan waktu yang berbeda, sehingga wajar berbeda. Yang penting adalah menyebutkan sumber dan konsepnya, bukan memaksa keduanya sama atau merata-ratakannya." },
    { t: "Mana pasangan angka yang paling layak dibandingkan langsung?",
      p: ["IPM Kukar 2025 dengan IPM Samarinda 2025", "IPM Kukar 2025 dengan IDM sebuah desa 2025", "Penduduk hasil sensus dengan penduduk hasil catatan administrasi", "PDRB harga berlaku 2025 dengan PDRB harga konstan 2025"], b: 0,
      j: "Perbandingan yang sah memerlukan konsep, cakupan, dan waktu yang sama. Hanya pasangan pertama yang memenuhi ketiganya: indikator yang sama, tahun yang sama, jenis wilayah yang sama." }
  ]
}
];
