function loadDetailPembayaran() {
  let metode = localStorage.getItem("metodePembayaran");

  let detail = document.getElementById("payment-detail");

  if (metode === "qris") {
    detail.innerHTML = `
    <h2>Pembayaran QRIS</h2>

    <img
        src="../assets/img/qris.jpg"
        class="qris-image"
        alt="QRIS"
    >
    `;
  } else if (metode === "bca") {
    detail.innerHTML = `
    <div class="va-box">

        <h3>
            Virtual Account BCA
        </h3>

        <p>
            88081234567890
        </p>

    </div>
    `;
  } else if (metode === "bri") {
    detail.innerHTML = `
    <div class="va-box">

        <h3>
            Virtual Account BRI
        </h3>

        <p>
            00271234567890
        </p>

    </div>
    `;
  } else if (metode === "ewallet") {
    detail.innerHTML = `
    <div class="va-box">

        <h3>
            Nomor E-Wallet
        </h3>

        <p>
            081234567890
        </p>

    </div>
    `;
  }
}

function konfirmasiPembayaran() {
  let selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  let history = JSON.parse(localStorage.getItem("historyTransaksi")) || [];

  let total = 0;

  selectedItems.forEach((item) => {
    total += item.harga;
  });

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  history.push({
    id: "TRX" + Date.now(),

    namaUser: currentUser ? currentUser.nama : "Guest",

    tanggal: new Date().toLocaleString(),

    metode: localStorage.getItem("metodePembayaran"),

    total: total,

    status: "Menunggu",

    items: selectedItems,
  });

  localStorage.setItem("historyTransaksi", JSON.stringify(history));

  let sisaKeranjang = keranjang.filter((item) => {
    return !selectedItems.some((selected) => selected.nama === item.nama);
  });

  localStorage.setItem("keranjang", JSON.stringify(sisaKeranjang));

  localStorage.removeItem("selectedItems");

  localStorage.removeItem("metodePembayaran");

  alert("Pembayaran Berhasil!");

  window.location.href = "detail_pesanan.html";
}

loadDetailPembayaran();
