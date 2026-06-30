const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const articles = JSON.parse(localStorage.getItem("zenis_articles")) || [];
const artikel = articles.find(function (item) {
  return item.id === id;
});

if (!artikel) {
  document.body.innerHTML =
    '<div style="text-align:center;margin-top:100px;padding:40px;font-family:DM Sans,sans-serif;color:#4a4a4a;"><h1 style="font-family:Cormorant Garant,serif;font-size:48px;color:#1c1c1c;margin-bottom:16px;">Artikel tidak ditemukan</h1><p style="font-size:16px;">Coba kembali ke halaman artikel dan pilih artikel lainnya.</p><a href="artikel.html" style="display:inline-block;margin-top:24px;padding:10px 28px;background:#1c1c1c;color:#fff;border-radius:100px;text-decoration:none;font-size:13px;letter-spacing:0.6px;text-transform:uppercase;">Kembali ke Artikel</a></div>';
} else {
  var gambarEl = document.getElementById("artikelGambar");
  gambarEl.src = artikel.gambar;
  gambarEl.alt = artikel.judul;

  document.getElementById("artikelKategori").textContent = artikel.kategori;
  document.getElementById("artikelJudul").textContent = artikel.judul;
  document.getElementById("artikelJudulBreadcrumb").textContent = artikel.judul;

  var wordCount = artikel.isi.replace(/<[^>]*>/g, "").split(/\s+/).length;
  var readTime = Math.max(1, Math.round(wordCount / 200));

  document.getElementById("artikelPenulis").textContent = artikel.penulis;
  document.getElementById("artikelTanggal").textContent = artikel.tanggal;
  document.getElementById("artikelWaktuBaca").textContent = readTime + " menit baca";
  document.getElementById("artikelIsi").innerHTML = artikel.isi;
  document.getElementById("pageTitle").textContent = artikel.judul + " — ZENIS";
  document.getElementById("authorName").textContent = artikel.penulis;

  /* SCROLL PROGRESS BAR */
  var progressBar = document.getElementById("progressBar");

  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";
  });

  /* BACK TO TOP */
  var backBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      backBtn.classList.add("visible");
    } else {
      backBtn.classList.remove("visible");
    }
  });

  backBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* SHARE BUTTONS */
  var pageUrl = window.location.href;
  var pageTitle = artikel.judul;

  document.getElementById("shareLink").addEventListener("click", function () {
    navigator.clipboard.writeText(pageUrl).then(function () {
      var icon = document.getElementById("shareLink").querySelector("i");
      icon.className = "bi bi-check-lg";
      setTimeout(function () {
        icon.className = "bi bi-link-45deg";
      }, 2000);
    });
  });

  document.getElementById("shareWA").addEventListener("click", function () {
    var waUrl = "https://wa.me/?text=" + encodeURIComponent(pageTitle + "\n\n" + pageUrl);
    window.open(waUrl, "_blank");
  });

  document.getElementById("shareCopy").addEventListener("click", function () {
    var text = pageTitle + "\n\n" + pageUrl;
    navigator.clipboard.writeText(text).then(function () {
      var icon = document.getElementById("shareCopy").querySelector("i");
      icon.className = "bi bi-check-lg";
      setTimeout(function () {
        icon.className = "bi bi-clipboard";
      }, 2000);
    });
  });

  document.getElementById("sharePrint").addEventListener("click", function () {
    window.print();
  });

  /* RELATED ARTICLES */
  var relatedContainer = document.getElementById("relatedContainer");
  var related = articles.filter(function (item) {
    return item.id !== id && item.kategori === artikel.kategori;
  });

  if (related.length === 0) {
    related = articles.filter(function (item) {
      return item.id !== id;
    });
  }

  related = related.slice(0, 3);

  if (related.length > 0) {
    var html = "";
    related.forEach(function (item) {
      var excerpt = item.ringkasan || item.isi.replace(/<[^>]*>/g, "").substring(0, 120) + "...";
      html +=
        '<a href="detail_artikel.html?id=' + item.id + '" class="related-card">' +
          '<img src="' + item.gambar + '" alt="' + item.judul + '" class="related-card-img" loading="lazy" />' +
          '<div class="related-card-body">' +
            '<span class="related-card-category">' + item.kategori + "</span>" +
            '<h3 class="related-card-title">' + item.judul + "</h3>" +
            '<p class="related-card-excerpt">' + excerpt + "</p>" +
            '<div class="related-card-meta">' + item.tanggal + "</div>" +
          "</div>" +
        "</a>";
    });
    relatedContainer.innerHTML = html;
  } else {
    relatedContainer.innerHTML = '<p style="color:#8a8a8a;font-size:14px;grid-column:1/-1;">Tidak ada artikel terkait.</p>';
  }
}
