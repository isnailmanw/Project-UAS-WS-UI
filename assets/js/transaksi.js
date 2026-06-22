const table = document.getElementById("transaksiTable");

loadTransaksi();

function loadTransaksi() {
  const transaksi = JSON.parse(localStorage.getItem("historyTransaksi")) || [];

  renderStatistik(transaksi);

  renderTable(transaksi);
}

function renderStatistik(data) {
  document.getElementById("totalTransaksi").innerText = data.length;

  document.getElementById("pendingCount").innerText = data.filter(
    (t) => t.status === "Menunggu",
  ).length;

  document.getElementById("prosesCount").innerText = data.filter(
    (t) => t.status === "Diproses",
  ).length;

  document.getElementById("selesaiCount").innerText = data.filter(
    (t) => t.status === "Selesai",
  ).length;
}

function renderTable(data) {
  table.innerHTML = "";

  data
    .slice()
    .reverse()
    .forEach((transaksi) => {
      table.innerHTML += `

<tr>

<td>
${transaksi.id}
</td>

<td>
${transaksi.namaUser}
</td>

<td>
${transaksi.tanggal}
</td>

<td>
Rp${transaksi.total.toLocaleString()}
</td>

<td>
${transaksi.metode.toUpperCase()}
</td>

<td>

<select
onchange="ubahStatus(
'${transaksi.id}',
this.value
)"
>

<option
${transaksi.status === "Menunggu" ? "selected" : ""}
>
Menunggu
</option>

<option
${transaksi.status === "Diproses" ? "selected" : ""}
>
Diproses
</option>

<option
${transaksi.status === "Selesai" ? "selected" : ""}
>
Selesai
</option>

</select>

</td>

<td>

<button
class="detail-btn"
onclick="lihatDetail(
'${transaksi.id}'
)"
>
Detail
</button>

</td>

</tr>

`;
    });
}

function ubahStatus(id, status) {
  let transaksi = JSON.parse(localStorage.getItem("historyTransaksi")) || [];

  transaksi = transaksi.map((item) => {
    if (item.id === id) {
      item.status = status;
    }

    return item;
  });

  localStorage.setItem("historyTransaksi", JSON.stringify(transaksi));

  loadTransaksi();
}

function lihatDetail(id) {
  const transaksi = JSON.parse(localStorage.getItem("historyTransaksi")) || [];

  const data = transaksi.find((t) => t.id === id);

  let layanan = "";

  data.items.forEach((item) => {
    layanan += `• ${item.nama}\n`;
  });

  alert(
    `ID :
${data.id}

User :
${data.namaUser}

Metode :
${data.metode.toUpperCase()}

Status :
${data.status}

Total :
Rp${data.total.toLocaleString()}

Layanan :

${layanan}`,
  );
}
