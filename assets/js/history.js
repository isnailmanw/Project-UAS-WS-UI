function loadHistory() {
  const history = JSON.parse(localStorage.getItem("historyTransaksi")) || [];

  const tbody = document.getElementById("history-body");

  if (!tbody) return;

  tbody.innerHTML = "";

  if (history.length === 0) {
    tbody.innerHTML = `
      <tr>

        <td colspan="7" class="empty-history">

          <h3>Belum Ada Riwayat Booking</h3>

          <p>Transaksi yang berhasil dibayar akan muncul di sini.</p>

        </td>

      </tr>
    `;

    return;
  }

  const reversedHistory = history.slice().reverse();

  reversedHistory.forEach(function (transaksi) {
    const originalIndex = history.findIndex(function (item) {
      return item.id === transaksi.id;
    });

    tbody.innerHTML += `
      <tr>

        <td>${transaksi.id}</td>

        <td>${transaksi.tanggal}</td>

        <td>${transaksi.metode.toUpperCase()}</td>

        <td>
          Rp${Number(transaksi.total).toLocaleString("id-ID")}
        </td>

        <td>

          <span class="status-badge">

            ${transaksi.status}

          </span>

        </td>

        <td>

          ${transaksi.items.length} Layanan

        </td>

        <td>

          <button
            class="detail-btn"
            onclick="lihatDetail(${originalIndex})"
          >

            Detail

          </button>

        </td>

      </tr>
    `;
  });
}

function lihatDetail(index) {
  localStorage.setItem("selectedHistory", index);

  window.location.href = "detail_pesanan.html";
}

window.onload = function () {
  loadHistory();
};
