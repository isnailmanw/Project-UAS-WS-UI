function loadDetailPembayaran() {
  const metode = localStorage.getItem("metodePembayaran");

  const invoice = localStorage.getItem("invoice");

  const tanggal = localStorage.getItem("tanggalTransaksi");

  const subtotal = Number(localStorage.getItem("subtotalPembayaran")) || 0;

  const biaya = Number(localStorage.getItem("biayaLayanan")) || 0;

  const total = Number(localStorage.getItem("totalPembayaran")) || 0;

  const detail = document.getElementById("payment-detail");

  if (!detail) return;

  let metodeHTML = "";

  switch (metode) {
    case "qris":
      metodeHTML = `
            <div class="payment-method-box">

                <h3> Pembayaran QRIS</h3>

                <img
                    src="../assets/img/qris.jpg"
                    class="qris-image"
                    alt="QRIS"
                >

                <p class="payment-note">
                    Scan QR menggunakan aplikasi Mobile Banking atau E-Wallet.
                </p>

            </div>
            `;

      break;

    case "bca":
      metodeHTML = `
            <div class="va-box">

                <h3> Virtual Account BCA</h3>

                <p>88081234567890</p>

                <small>
                    Transfer tepat sesuai nominal pembayaran.
                </small>

            </div>
            `;

      break;

    case "bri":
      metodeHTML = `
            <div class="va-box">

                <h3> Virtual Account BRI</h3>

                <p>00271234567890</p>

                <small>
                    Transfer tepat sesuai nominal pembayaran.
                </small>

            </div>
            `;

      break;

    case "ewallet":
      metodeHTML = `
            <div class="va-box">

                <h3> E-Wallet</h3>

                <p>081234567890</p>

                <small>
                    DANA / OVO / GoPay / ShopeePay
                </small>

            </div>
            `;

      break;

    default:
      metodeHTML = `
            <p>Metode pembayaran tidak ditemukan.</p>
            `;
  }

  detail.innerHTML = `

        ${metodeHTML}

        <div class="payment-summary">

            <h3>Ringkasan Pembayaran</h3>

            <div class="summary-row">
                <span>Invoice</span>
                <strong>${invoice}</strong>
            </div>

            <div class="summary-row">
                <span>Tanggal</span>
                <strong>${tanggal}</strong>
            </div>

            <div class="summary-row">
                <span>Subtotal</span>
                <strong>
                    Rp${subtotal.toLocaleString("id-ID")}
                </strong>
            </div>

            <div class="summary-row">
                <span>Biaya Layanan</span>
                <strong>
                    Rp${biaya.toLocaleString("id-ID")}
                </strong>
            </div>

            <hr>

            <div class="summary-row total-row">
                <span>Total</span>
                <strong class="total-price">
                    Rp${total.toLocaleString("id-ID")}
                </strong>
            </div>

        </div>

    `;
}

function konfirmasiPembayaran() {
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  const history = JSON.parse(localStorage.getItem("historyTransaksi")) || [];

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  history.push({
    id: localStorage.getItem("invoice"),

    namaUser: currentUser ? currentUser.nama : "Guest",

    tanggal: localStorage.getItem("tanggalTransaksi"),

    metode: localStorage.getItem("metodePembayaran"),

    subtotal: Number(localStorage.getItem("subtotalPembayaran")),

    biayaLayanan: Number(localStorage.getItem("biayaLayanan")),

    total: Number(localStorage.getItem("totalPembayaran")),

    status: "Pembayaran Berhasil",

    items: selectedItems,
  });

  localStorage.setItem("historyTransaksi", JSON.stringify(history));

  localStorage.removeItem("selectedItems");
  localStorage.removeItem("subtotalPembayaran");
  localStorage.removeItem("biayaLayanan");
  localStorage.removeItem("totalPembayaran");
  localStorage.removeItem("invoice");
  localStorage.removeItem("tanggalTransaksi");
  localStorage.removeItem("metodePembayaran");

  const sisaKeranjang = keranjang.filter(function (item) {
    return !selectedItems.some(function (selected) {
      return selected.nama === item.nama && selected.harga === item.harga;
    });
  });

  localStorage.setItem("keranjang", JSON.stringify(sisaKeranjang));

  localStorage.removeItem("selectedItems");

  localStorage.removeItem("metodePembayaran");

  localStorage.removeItem("subtotalPembayaran");

  localStorage.removeItem("biayaLayanan");

  localStorage.removeItem("totalPembayaran");

  localStorage.removeItem("invoice");

  localStorage.removeItem("tanggalTransaksi");

  alert("Pembayaran berhasil dikonfirmasi.");

  window.location.href = "detail_pesanan.html";
}

window.onload = function () {
  loadDetailPembayaran();
};
