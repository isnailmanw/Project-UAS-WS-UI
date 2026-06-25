function loadDetailPesanan() {
  const history = JSON.parse(localStorage.getItem("historyTransaksi")) || [];

  if (history.length === 0) {
    window.location.href = "dashboard_user.html";
    return;
  }

  const transaksi = history[history.length - 1];

  const itemContainer = document.getElementById("order-items");

  itemContainer.innerHTML = "";

  // ==========================
  // DAFTAR LAYANAN
  // ==========================

  transaksi.items.forEach(function (item) {
    itemContainer.innerHTML += `
    
      <div class="order-item">

          <div class="order-left">

              <span>${item.nama}</span>

          </div>

          <strong>

              Rp${Number(item.harga).toLocaleString("id-ID")}

          </strong>

      </div>

    `;
  });

  // ==========================
  // AMBIL DATA TRANSAKSI
  // ==========================

  const invoice = transaksi.id || "-";

  const subtotal =
    Number(transaksi.subtotal) ||
    transaksi.items.reduce(function (total, item) {
      return total + Number(item.harga);
    }, 0);

  const biayaLayanan = Number(transaksi.biayaLayanan) || 0;

  const total = Number(transaksi.total) || subtotal + biayaLayanan;

  const metode = transaksi.metode || "-";

  const tanggal = transaksi.tanggal || "-";

  const status = transaksi.status || "Pembayaran Berhasil";

  // ==========================
  // TAMPILKAN DATA
  // ==========================

  document.getElementById("invoice").textContent = invoice;

  document.getElementById("subtotal").textContent =
    "Rp" + subtotal.toLocaleString("id-ID");

  document.getElementById("biaya-layanan").textContent =
    "Rp" + biayaLayanan.toLocaleString("id-ID");

  document.getElementById("metode-bayar").textContent = metode.toUpperCase();

  document.getElementById("tanggal-transaksi").textContent = tanggal;

  document.getElementById("status").textContent = status;

  document.getElementById("total-bayar").textContent =
    "Rp" + total.toLocaleString("id-ID");
}

// ==========================
// BUTTON
// ==========================

function kembaliBeranda() {
  window.location.href = "dashboard_user.html";
}

function lihatRiwayat() {
  window.location.href = "history.html";
}

// ==========================
// LOAD
// ==========================

window.onload = function () {
  loadDetailPesanan();
};
