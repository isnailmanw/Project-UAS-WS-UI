console.log("ARTIKEL ADMIN JS JALAN");

// ======================
// STORAGE
// ======================

if (!localStorage.getItem("zenis_articles")) {
  const defaultArticles = [
    {
      id: 1,

      judul: "5 Manfaat Yoga untuk Mengurangi Stres",

      kategori: "Yoga",

      gambar: "../assets/img/yoga.jpg",

      tanggal: "2026-06-18",

      penulis: "ZENIS Team",

      ringkasan:
        "Yoga membantu mengurangi stres, meningkatkan fokus belajar, dan menjaga kesehatan fisik maupun mental.",

      isi: `
      <h2>Pendahuluan</h2>

      <p>
      Menjadi mahasiswa sering kali menghadapi berbagai tekanan,
      mulai dari tugas kuliah, organisasi,
      hingga persiapan karier.
      </p>

      <p>
      Kondisi tersebut dapat memicu stres
      yang berdampak pada kesehatan fisik maupun mental.
      </p>

      <h2>Mengapa Yoga Penting?</h2>

      <p>
      Yoga menggabungkan latihan pernapasan,
      gerakan tubuh,
      dan meditasi yang membantu tubuh menjadi lebih rileks.
      </p>

      <h2>Manfaat Yoga</h2>

      <h3>1. Membantu Menenangkan Pikiran</h3>

      <p>
      Teknik pernapasan dalam yoga membantu
      mengurangi ketegangan dan membuat tubuh lebih tenang.
      </p>

      <h3>2. Meningkatkan Fokus dan Konsentrasi</h3>

      <p>
      Dengan pikiran yang lebih tenang,
      mahasiswa dapat lebih mudah memahami materi perkuliahan.
      </p>

      <h3>3. Menjaga Kesehatan Tubuh</h3>

      <p>
      Yoga membantu meningkatkan fleksibilitas,
      memperbaiki postur tubuh,
      dan mengurangi pegal akibat terlalu lama duduk.
      </p>

      <div class="tips-box">

      💡 Tips:

      Lakukan yoga minimal 20-30 menit setiap hari.

      </div>
      `,
    },

    {
      id: 2,

      judul: "Mengapa Spa Dapat Membantu Mengurangi Kelelahan?",

      kategori: "Spa",

      gambar: "../assets/img/spa.jpg",

      tanggal: "2026-06-19",

      penulis: "ZENIS Team",

      ringkasan:
        "Spa membantu mengurangi kelelahan fisik maupun mental serta meningkatkan kualitas istirahat.",

      isi: `
      <h2>Pendahuluan</h2>

      <p>
      Di tengah aktivitas yang padat,
      banyak orang mengalami kelelahan fisik dan mental.
      </p>

      <p>
      Salah satu cara yang dapat membantu memulihkan kondisi tubuh
      adalah dengan melakukan perawatan spa.
      </p>

      <h2>Mengapa Spa Efektif?</h2>

      <p>
      Spa menggabungkan pijatan,
      aromaterapi,
      dan suasana relaksasi yang membantu tubuh menjadi lebih tenang.
      </p>

      <h2>Manfaat Spa</h2>

      <h3>1. Mengurangi Ketegangan Otot</h3>

      <p>
      Pijatan membantu otot menjadi lebih rileks.
      </p>

      <h3>2. Meningkatkan Sirkulasi Darah</h3>

      <p>
      Aliran darah menjadi lebih lancar.
      </p>

      <h3>3. Membantu Tidur Lebih Nyenyak</h3>

      <p>
      Tubuh menjadi lebih nyaman saat beristirahat.
      </p>

      <div class="tips-box">

      💡 Tips:

      Lakukan spa minimal 1-2 kali per bulan.

      </div>
      `,
    },

    {
      id: 3,

      judul: "Rahasia Perawatan Beauty untuk Menjaga Kepercayaan Diri",

      kategori: "Beauty",

      gambar: "../assets/img/beauty.jpg",

      tanggal: "2026-06-20",

      penulis: "ZENIS Team",

      ringkasan:
        "Perawatan beauty membantu menjaga kesehatan kulit dan meningkatkan rasa percaya diri.",

      isi: `
      <h2>Pendahuluan</h2>

      <p>
      Merawat diri bukan hanya tentang penampilan,
      tetapi juga bentuk penghargaan terhadap diri sendiri.
      </p>

      <h2>Manfaat Perawatan Beauty</h2>

      <h3>1. Menjaga Kesehatan Kulit</h3>

      <p>
      Kulit yang sehat membuat wajah tampak lebih segar.
      </p>

      <h3>2. Meningkatkan Kepercayaan Diri</h3>

      <p>
      Penampilan yang terawat membuat seseorang lebih percaya diri.
      </p>

      <h3>3. Memberikan Relaksasi</h3>

      <p>
      Perawatan wajah dan tubuh juga membantu mengurangi stres.
      </p>

      <div class="tips-box">

      💡 Tips:

      Gunakan produk perawatan yang sesuai jenis kulit.

      </div>
      `,
    },

    {
      id: 4,

      judul: "Wellness Lifestyle: Kunci Hidup Sehat dan Seimbang",

      kategori: "Wellness",

      gambar: "../assets/img/wellness.jpg",

      tanggal: "2026-06-21",

      penulis: "ZENIS Team",

      ringkasan:
        "Gaya hidup wellness membantu menjaga keseimbangan kesehatan fisik dan mental.",

      isi: `
      <h2>Pendahuluan</h2>

      <p>
      Wellness merupakan pendekatan hidup sehat
      yang memperhatikan keseimbangan tubuh dan pikiran.
      </p>

      <h2>Mengapa Wellness Penting?</h2>

      <p>
      Wellness membantu seseorang hidup lebih sehat,
      bahagia,
      dan produktif.
      </p>

      <h2>Komponen Wellness</h2>

      <h3>1. Pola Makan Sehat</h3>

      <p>
      Mengonsumsi makanan bergizi seimbang.
      </p>

      <h3>2. Aktivitas Fisik</h3>

      <p>
      Berolahraga secara rutin.
      </p>

      <h3>3. Kesehatan Mental</h3>

      <p>
      Mengelola stres dan menjaga keseimbangan emosi.
      </p>

      <div class="tips-box">

      💡 Tips:

      Luangkan waktu untuk self-care setiap minggu.

      </div>
      `,
    },
  ];

  localStorage.setItem("zenis_articles", JSON.stringify(defaultArticles));
}

let articles = JSON.parse(localStorage.getItem("zenis_articles")) || [];

const form = document.getElementById("artikelForm");

const table = document.getElementById("artikelTable");

let editId = null;

// ======================
// LOAD
// ======================

renderTable();

// ======================
// SUBMIT
// ======================

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const file = document.getElementById("gambar").files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function () {
      simpanArtikel(reader.result);
    };

    reader.readAsDataURL(file);
  } else {
    simpanArtikel("");
  }
});

// ======================
// SIMPAN
// ======================

function simpanArtikel(gambar) {
  const artikel = {
    id: editId || Date.now(),

    judul: document.getElementById("judul").value,

    kategori: document.getElementById("kategori").value,

    gambar: gambar || articles.find((a) => a.id === editId)?.gambar || "",

    tanggal: document.getElementById("tanggal").value,

    penulis: document.getElementById("penulis").value,

    ringkasan: document.getElementById("ringkasan").value,

    isi: document.getElementById("isi").value,
  };

  if (editId) {
    articles = articles.map((a) => (a.id === editId ? artikel : a));

    alert("Artikel berhasil diperbarui");
  } else {
    articles.push(artikel);

    alert("Artikel berhasil dipublikasikan");
  }

  localStorage.setItem("zenis_articles", JSON.stringify(articles));

  editId = null;

  form.reset();

  renderTable();
}

// ======================
// TABLE
// ======================

function renderTable() {
  table.innerHTML = "";

  articles.forEach((artikel, index) => {
    table.innerHTML += `

<tr>

<td>${index + 1}</td>

<td>
${artikel.judul}
</td>

<td>
${artikel.kategori}
</td>

<td>
${artikel.penulis}
</td>

<td>
${artikel.tanggal}
</td>

<td>

<span class="status">
Published
</span>

</td>

<td>

<button
type="button"
class="btn-edit"
onclick="editArtikel(${artikel.id})">

Edit

</button>

<button
type="button"
class="btn-delete"
onclick="hapusArtikel(${artikel.id})">

Hapus

</button>

</td>

</tr>

`;
  });
}

// ======================
// EDIT
// ======================

function editArtikel(id) {
  const artikel = articles.find((a) => a.id === id);

  if (!artikel) return;

  editId = id;

  document.getElementById("judul").value = artikel.judul;

  document.getElementById("kategori").value = artikel.kategori;

  document.getElementById("tanggal").value = artikel.tanggal;

  document.getElementById("penulis").value = artikel.penulis;

  document.getElementById("ringkasan").value = artikel.ringkasan;

  document.getElementById("isi").value = artikel.isi;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ======================
// DELETE
// ======================

function hapusArtikel(id) {
  if (!confirm("Hapus artikel ini?")) {
    return;
  }

  articles = articles.filter((a) => a.id !== id);

  localStorage.setItem("zenis_articles", JSON.stringify(articles));

  renderTable();
}
