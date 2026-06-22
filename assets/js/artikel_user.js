const container = document.getElementById("artikelContainer");

const articles = JSON.parse(localStorage.getItem("zenis_articles")) || [];

renderArtikel();

function renderArtikel() {
  if (articles.length === 0) {
    container.innerHTML = `

<div
style="
grid-column:1/-1;
text-align:center;
padding:50px;
">

<h2>
Belum Ada Artikel
</h2>

<p>
Admin belum mempublikasikan artikel.
</p>

</div>

`;

    return;
  }

  articles.forEach((artikel) => {
    container.innerHTML += `

<div class="artikel-card">

<img
src="${artikel.gambar || "https://via.placeholder.com/500x300"}"
>

<div class="artikel-content">

<span class="kategori">

${artikel.kategori}

</span>

<h3>

${artikel.judul}

</h3>

<p>

${artikel.ringkasan}

</p>

<div class="meta">

${artikel.penulis}
•
${artikel.tanggal}

</div>

<a
href="detail_artikel.html?id=${artikel.id}"
class="read-btn">

Baca Selengkapnya

</a>

</div>

</div>

`;
  });
}
