function loadDetailPesanan(){

let history =
    JSON.parse(
        localStorage.getItem(
            "historyTransaksi"
        )
    ) || [];

if(history.length === 0){

    window.location.href =
        "dashboard_user.html";

    return;

}

let transaksi =
    history[history.length - 1];

let itemContainer =
    document.getElementById(
        "order-items"
    );

let html = "";

transaksi.items.forEach(item => {

    html += `
    <div class="order-item">

        <span>
            ${item.nama}
        </span>

        <strong>
            Rp${item.harga.toLocaleString()}
        </strong>

    </div>
    `;

});

itemContainer.innerHTML = html;

document.getElementById(
    "metode-bayar"
).innerText =
    transaksi.metode.toUpperCase();

document.getElementById(
    "tanggal-transaksi"
).innerText =
    transaksi.tanggal;

document.getElementById(
    "total-bayar"
).innerText =
    "Rp" +
    transaksi.total.toLocaleString();

}

loadDetailPesanan();