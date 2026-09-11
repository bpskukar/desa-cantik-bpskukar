/* ============================================================================
   Kelas Statistik Desa — mesin pembaca modul, latihan, dan kemajuan belajar.
   Isi modul ada di assets/modul-baca.js dan assets/modul-desa.js; berkas ini
   hanya menampilkannya. Menambah modul cukup menambah satu objek di sana.

   Kemajuan disimpan di peramban pembaca (localStorage), tidak dikirim ke mana
   pun dan tidak memerlukan pendaftaran.
   ========================================================================== */
(function () {
  "use strict";
  var KUNCI = "descan-kelas-v1";
  var MODUL = (window.MODUL_BACA || []).concat(window.MODUL_DESA || []);
  var JALUR = {
    baca: { nama: "Baca Angka", warna: "emas", ringkas: "Membaca angka statistik tanpa salah tafsir. Dasar yang dipakai di semua modul berikutnya." },
    desa: { nama: "Statistik Desa", warna: "hijau", ringkas: "Kurikulum pembinaan Desa Cantik: satu siklus penuh kegiatan statistik di desa." }
  };
  var el = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" })[c]; }); }

  /* ------------------------------------------------------------ kemajuan */
  function baca() { try { return JSON.parse(localStorage.getItem(KUNCI) || "{}"); } catch (e) { return {}; } }
  function tulis(d) { try { localStorage.setItem(KUNCI, JSON.stringify(d)); } catch (e) { /* mode privat */ } }
  var MAJU = baca();   /* { idModul: { jawab: {nomorSoal: indeksPilihan}, selesai: true } } */
  function majuModul(id) { return MAJU[id] || (MAJU[id] = { jawab: {} }); }
  function nilaiModul(m) {
    var p = MAJU[m.id]; if (!p) return { jawab: 0, benar: 0, total: m.soal.length };
    var benar = 0, jawab = 0;
    m.soal.forEach(function (s, i) {
      var x = p.jawab[i];
      if (x !== undefined) { jawab++; if (x === s.b) benar++; }
    });
    return { jawab: jawab, benar: benar, total: m.soal.length };
  }
  function tuntas(m) { var n = nilaiModul(m); return n.total > 0 && n.jawab === n.total; }

  /* --------------------------------------------------------- penggambar isi */
  function blok(b) {
    var jenis = b[0];
    if (jenis === "p")      return "<p>" + b[1] + "</p>";
    if (jenis === "h")      return "<h3>" + esc(b[1]) + "</h3>";
    if (jenis === "ingat")  return '<div class="ingat">' + b[1] + "</div>";
    if (jenis === "salah")  return '<div class="ingat ingat--salah"><b>Sering keliru.</b> ' + b[1] + "</div>";
    if (jenis === "daftar") return "<ul class=\"daf\">" + b[1].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
    if (jenis === "nomor")  return "<ol class=\"daf\">" + b[1].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol>";
    if (jenis === "kotak")  return '<div class="kotak"><div class="kotak__j">' + esc(b[1]) + "</div>" + b[2] + "</div>";
    if (jenis === "hitung") return '<div class="kotak kotak--hitung"><div class="kotak__j">' + esc(b[1]) + "</div><pre>" +
      b[2].map(esc).join("\n") + "</pre></div>";
    if (jenis === "rumus")  return '<div class="rumus"><code>' + esc(b[1]) + "</code>" + (b[2] ? "<span>" + b[2] + "</span>" : "") + "</div>";
    if (jenis === "tabel") {
      var t = b[1];
      return '<div class="tabel-bungkus"><table class="tabel"><thead><tr>' +
        t[0].map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        t.slice(1).map(function (r) { return "<tr>" + r.map(function (x) { return "<td>" + x + "</td>"; }).join("") + "</tr>"; }).join("") +
        "</tbody></table></div>";
    }
    if (jenis === "sumber") return '<p class="sumber">' + b[1] + "</p>";
    return "";
  }

  /* ------------------------------------------------------------ daftar modul */
  function kartuModul(m, i, dari) {
    var n = nilaiModul(m), selesai = tuntas(m);
    return '<a class="mk' + (selesai ? " is-selesai" : "") + '" href="#modul/' + m.id + '">' +
      '<div class="mk__n">' + (i + 1) + "</div>" +
      '<div class="mk__b"><div class="mk__j">' + esc(m.judul) + "</div>" +
      '<p class="mk__r">' + esc(m.ringkas) + "</p>" +
      '<div class="mk__m">' + esc(m.menit) + " menit baca · " + m.soal.length + " latihan" +
        (n.jawab ? " · <b>" + n.benar + " dari " + n.total + " benar</b>" : "") + "</div></div>" +
      '<div class="mk__c">' + (selesai ? "✓" : "") + "</div></a>";
  }
  function gambarDaftar() {
    AKTIF = null;
    el("pembaca").hidden = true; el("daftar").hidden = false;
    var total = MODUL.length, kelar = MODUL.filter(tuntas).length;
    var semuaSoal = 0, semuaBenar = 0;
    MODUL.forEach(function (m) { var n = nilaiModul(m); semuaSoal += n.total; semuaBenar += n.benar; });
    el("majuRingkas").innerHTML =
      '<div class="maju"><div class="maju__bar"><span style="width:' + (total ? kelar / total * 100 : 0) + '%"></span></div>' +
      "<div class=\"maju__t\"><b>" + kelar + " dari " + total + " modul</b> tuntas" +
      (semuaBenar ? " · " + semuaBenar + " jawaban benar dari " + semuaSoal + " latihan" : "") +
      (kelar ? ' · <button type="button" id="ulang" class="taut">ulangi dari awal</button>' : "") + "</div></div>";
    if (el("ulang")) el("ulang").onclick = function () {
      if (!confirm("Hapus seluruh catatan kemajuan dan jawaban latihan di peramban ini?")) return;
      MAJU = {}; tulis(MAJU); gambarDaftar();
    };
    var html = "";
    Object.keys(JALUR).forEach(function (j) {
      var daftar = MODUL.filter(function (m) { return m.jalur === j; });
      if (!daftar.length) return;
      var sel = daftar.filter(tuntas).length;
      html += '<section class="jalur" id="' + j + '"><div class="jalur__k jalur__k--' + JALUR[j].warna + '">Jalur ' +
        (j === "baca" ? "1" : "2") + " · " + daftar.length + " modul · " + sel + " tuntas</div>" +
        "<h2>" + esc(JALUR[j].nama) + "</h2><p class=\"jalur__r\">" + esc(JALUR[j].ringkas) + "</p>" +
        '<div class="mk__grid">' + daftar.map(function (m, i) { return kartuModul(m, i, daftar.length); }).join("") + "</div></section>";
    });
    el("daftarModul").innerHTML = html;
    document.title = "Kelas Statistik Desa · Desa Cantik Kukar";
  }

  /* --------------------------------------------------------------- pembaca */
  var AKTIF = null;   /* modul yang sedang dibaca; dipakai penangan klik latihan */
  /* satu penangan saja, dipasang sekali — bukan tiap kali modul digambar ulang */
  el("pembaca").addEventListener("click", function (e) {
    var b = e.target.closest(".pil"); if (!b || b.disabled || !AKTIF) return;
    var w = b.closest(".soal"), k = +w.dataset.s, n = +b.dataset.n, id = AKTIF.id;
    majuModul(id).jawab[k] = n; tulis(MAJU);
    gambarModul(id);
    var lagi = el("pembaca").querySelector('.soal[data-s="' + k + '"]');
    if (lagi) lagi.scrollIntoView({ block: "center", behavior: "smooth" });
  });

  function urutanJalur(m) { return MODUL.filter(function (x) { return x.jalur === m.jalur; }); }
  function gambarModul(id) {
    var m = MODUL.filter(function (x) { return x.id === id; })[0];
    if (!m) return gambarDaftar();
    el("daftar").hidden = true; el("pembaca").hidden = false;
    var seri = urutanJalur(m), i = seri.indexOf(m);
    var p = majuModul(m.id);

    el("pembaca").innerHTML =
      '<nav class="remah"><a href="#">Semua modul</a> <span>›</span> ' + esc(JALUR[m.jalur].nama) +
        " <span>›</span> Modul " + (i + 1) + "</nav>" +
      '<article class="art"><div class="art__k art__k--' + JALUR[m.jalur].warna + '">' + esc(JALUR[m.jalur].nama) + " · Modul " + (i + 1) + " dari " + seri.length + "</div>" +
      "<h1>" + esc(m.judul) + "</h1>" +
      '<p class="art__r">' + esc(m.ringkas) + "</p>" +
      '<div class="art__m">' + esc(m.menit) + " menit baca · " + m.soal.length + " soal latihan</div>" +
      '<div class="art__isi">' + m.isi.map(blok).join("") + "</div>" +
      (m.sumber ? '<p class="sumber sumber--kaki">Sumber materi: ' + m.sumber + "</p>" : "") +
      '<section class="lat"><h2>Latihan</h2><p class="lat__r">Jawaban salah tetap dijelaskan — justru di situ letak kesalahpahaman yang paling sering terjadi.</p>' +
      m.soal.map(function (s, k) {
        var dipilih = p.jawab[k];
        return '<div class="soal" data-s="' + k + '"><div class="soal__t"><b>' + (k + 1) + ".</b> " + s.t + "</div>" +
          '<div class="soal__p">' + s.p.map(function (x, n) {
            var kelas = "", tanda = "";
            if (dipilih !== undefined) {
              if (n === s.b) { kelas = " is-benar"; tanda = "✓"; }
              else if (n === dipilih) { kelas = " is-salah"; tanda = "✗"; }
            }
            return '<button type="button" class="pil' + kelas + '" data-n="' + n + '"' + (dipilih !== undefined ? " disabled" : "") + ">" +
              '<span class="pil__h">' + "ABCD".charAt(n) + "</span>" + x + (tanda ? '<span class="pil__c">' + tanda + "</span>" : "") + "</button>";
          }).join("") + "</div>" +
          (dipilih !== undefined ? '<div class="soal__j' + (dipilih === s.b ? " is-benar" : "") + '"><b>' +
            (dipilih === s.b ? "Tepat." : "Belum tepat.") + "</b> " + s.j + "</div>" : "") + "</div>";
      }).join("") + "</section>" +
      '<nav class="art__nav">' +
        (i > 0 ? '<a class="btn btn--polos btn--kecil" href="#modul/' + seri[i - 1].id + '">← ' + esc(seri[i - 1].judul) + "</a>" : '<span></span>') +
        (i < seri.length - 1 ? '<a class="btn btn--hijau btn--kecil" href="#modul/' + seri[i + 1].id + '">' + esc(seri[i + 1].judul) + " →</a>"
          : '<a class="btn btn--hijau btn--kecil" href="#">Selesai — kembali ke daftar modul</a>') +
      "</nav></article>";

    AKTIF = m;
    document.title = m.judul + " · Kelas Statistik Desa";
    window.scrollTo({ top: 0 });
  }

  /* ------------------------------------------------------------------ rute */
  function rute() {
    var h = location.hash.replace(/^#/, "");
    var m = h.match(/^modul\/(.+)$/);
    if (m) return gambarModul(m[1]);
    gambarDaftar();
    if (h && el(h)) setTimeout(function () { el(h).scrollIntoView({ behavior: "smooth", block: "start" }); }, 40);
  }
  window.addEventListener("hashchange", rute);
  rute();
})();
