let subtotal = 0;
const biayaLayanan = 2500;

function loadPayment() {
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  const container = document.getElementById("payment-items");

  if (!container) return;

  container.innerHTML = "";

  subtotal = 0;

  if (selectedItems.length === 0) {
    container.innerHTML = `
            <p>Tidak ada layanan yang dipilih.</p>
        `;

    updateSummary();

    return;
  }

  selectedItems.forEach(function (item) {
    subtotal += Number(item.harga);

    container.innerHTML += `

<div class="payment-item">

    <img
        src="${item.gambar}"
        alt="${item.nama}"
        class="payment-image"
    >

    <div class="payment-info">

        <h3>${item.nama}</h3>

        <p>${item.kategori}</p>

        <small>${item.durasi}</small>

    </div>

    <div class="payment-price">

        Rp${Number(item.harga).toLocaleString("id-ID")}

    </div>

</div>

`;
  });

  updateSummary();
}

function updateSummary() {
  const total = subtotal > 0 ? subtotal + biayaLayanan : 0;

  const subtotalElement = document.getElementById("subtotal");

  if (subtotalElement) {
    subtotalElement.textContent = "Rp" + subtotal.toLocaleString("id-ID");
  }

  const biayaElement = document.getElementById("biaya-layanan");

  if (biayaElement) {
    biayaElement.textContent =
      subtotal > 0 ? "Rp" + biayaLayanan.toLocaleString("id-ID") : "Rp0";
  }

  const totalElement = document.getElementById("payment-total");

  if (totalElement) {
    totalElement.textContent = "Rp" + total.toLocaleString("id-ID");
  }
}

function loadIdentity() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const namaField = document.getElementById("field-nama");
  if (user && user.nama && namaField) {
    namaField.value = user.nama;
  }
}

function selesaikanPembayaran() {
  const metode = document.querySelector('input[name="payment"]:checked');

  if (!metode) {
    alert("Pilih metode pembayaran terlebih dahulu!");

    return;
  }

  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  if (selectedItems.length === 0) {
    alert("Tidak ada layanan yang dipilih.");

    return;
  }

  const nama = document.getElementById("field-nama").value.trim();
  const telepon = document.getElementById("field-telepon").value.trim();

  if (!nama) {
    alert("Silakan masukkan nama lengkap Anda!");
    document.getElementById("field-nama").focus();
    return;
  }

  if (!telepon) {
    alert("Silakan masukkan nomor telepon Anda!");
    document.getElementById("field-telepon").focus();
    return;
  }

  const alamat = document.getElementById("field-alamat").value.trim();
  const catatan = document.getElementById("field-catatan").value.trim();

  const identitas = { nama: nama, telepon: telepon, alamat: alamat, catatan: catatan };
  localStorage.setItem("identitasPemesanan", JSON.stringify(identitas));

  const total = subtotal + biayaLayanan;

  const invoice = "INV-" + Date.now();

  localStorage.setItem("metodePembayaran", metode.value);

  localStorage.setItem("subtotalPembayaran", subtotal);

  localStorage.setItem("biayaLayanan", biayaLayanan);

  localStorage.setItem("totalPembayaran", total);

  localStorage.setItem("invoice", invoice);

  localStorage.setItem("tanggalTransaksi", new Date().toLocaleString("id-ID"));

  window.location.href = "detail_pembayaran.html";
}

function kembaliKeKeranjang() {
  window.location.href = "keranjang.html";
}


window.onload = function () {
  loadPayment();
  loadIdentity();
};
