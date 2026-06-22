const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const articles = JSON.parse(localStorage.getItem("zenis_articles")) || [];

const artikel = articles.find((item) => item.id === id);

if (!artikel) {
  document.body.innerHTML = `
    <h1
      style="
      text-align:center;
      margin-top:100px;
      "
    >
      Artikel tidak ditemukan
    </h1>
  `;
} else {
  document.getElementById("artikelGambar").src = artikel.gambar;

  document.getElementById("artikelKategori").textContent = artikel.kategori;

  document.getElementById("artikelJudul").textContent = artikel.judul;

  document.getElementById("artikelMeta").textContent =
    `${artikel.penulis} • ${artikel.tanggal}`;

  document.getElementById("artikelIsi").innerHTML = artikel.isi;
}
