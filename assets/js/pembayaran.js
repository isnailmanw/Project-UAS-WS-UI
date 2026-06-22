let totalBayar = 0;

function loadPayment() {
  let selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  let container = document.getElementById("payment-items");

  container.innerHTML = "";

  totalBayar = 0;

  selectedItems.forEach((item) => {
    totalBayar += item.harga;

    container.innerHTML += `
    <div class="payment-item">

        <span>
            ${item.nama}
        </span>

        <strong>
            Rp${item.harga.toLocaleString()}
        </strong>

    </div>
    `;
  });

  document.getElementById("payment-total").innerText =
    "Rp" + totalBayar.toLocaleString();
}

function selesaikanPembayaran() {
  let metode = document.querySelector('input[name="payment"]:checked');

  if (!metode) {
    alert("Pilih metode pembayaran terlebih dahulu!");

    return;
  }

  localStorage.setItem("metodePembayaran", metode.value);

  let selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  let history = JSON.parse(localStorage.getItem("historyTransaksi")) || [];

  window.location.href = "detail_pembayaran.html";
}

loadPayment();
