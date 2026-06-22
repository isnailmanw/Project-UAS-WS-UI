console.log("ARTIKEL ADMIN JS JALAN");

// ======================
// STORAGE
// ======================

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
