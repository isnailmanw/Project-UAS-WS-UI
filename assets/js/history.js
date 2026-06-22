function loadHistory() {
  let history = JSON.parse(localStorage.getItem("historyTransaksi")) || [];

  let container = document.getElementById("history-list");

  if (history.length === 0) {
    container.innerHTML = `
    <div class="empty-state">

        <h2>
            Belum Ada Riwayat
        </h2>

        <p>
            Anda belum pernah melakukan transaksi.
        </p>

    </div>
    `;

    return;
  }

  history.reverse().forEach((transaksi) => {
    let layanan = "";

    transaksi.items.forEach((item) => {
      layanan += `
        <div class="service-item">

            <span>
                ${item.nama}
            </span>

            <strong>
                Rp${item.harga.toLocaleString()}
            </strong>

        </div>
        `;
    });

    container.innerHTML += `

    <div class="history-card">

        <div class="history-top">

            <h3>
                Transaksi Berhasil
            </h3>

            <span class="status">
                ${transaksi.status}
            </span>

        </div>

        ${layanan}

        <div class="history-info">

            <p>
                <strong>Tanggal:</strong>
                ${transaksi.tanggal}
            </p>

            <p>
                <strong>Metode:</strong>
                ${transaksi.metode.toUpperCase()}
            </p>

            <p class="total">
                Total:
                Rp${transaksi.total.toLocaleString()}
            </p>

        </div>

    </div>

    `;
  });
}

loadHistory();
