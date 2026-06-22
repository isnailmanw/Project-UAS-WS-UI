function tambahKeranjang(nama, harga) {

    let keranjang =
        JSON.parse(
            localStorage.getItem("keranjang")
        ) || [];

    keranjang.push({
        nama: nama,
        harga: harga
    });

    localStorage.setItem(
        "keranjang",
        JSON.stringify(keranjang)
    );

    alert(
        nama + " berhasil ditambahkan ke keranjang!"
    );

}

function tampilKeranjang() {

    let keranjang =
        JSON.parse(
            localStorage.getItem("keranjang")
        ) || [];

    let container =
        document.getElementById(
            "keranjang-list"
        );

    let total = 0;

    container.innerHTML = "";

    keranjang.forEach(
        function(item,index){


            container.innerHTML += `
<div class="cart-item">

    <div class="cart-left">

        <input
            type="checkbox"
            class="item-check"
            data-harga="${item.harga}"
            onchange="hitungTotal()"
        >

        <div>

            <h3>${item.nama}</h3>

            <p>
                Rp${item.harga.toLocaleString()}
            </p>

        </div>

    </div>

    <button onclick="hapusItem(${index})">
        Hapus
    </button>

</div>
`;
        }
    );

    hitungTotal();

}

function hapusItem(index){

    let keranjang =
        JSON.parse(
            localStorage.getItem("keranjang")
        ) || [];

    keranjang.splice(index,1);

    localStorage.setItem(
        "keranjang",
        JSON.stringify(keranjang)
    );

    tampilKeranjang();

}

function hitungTotal(){

    let total = 0;

    document
        .querySelectorAll(".item-check")
        .forEach(function(item){

            if(item.checked){

                total += parseInt(
                    item.dataset.harga
                );

            }

        });

    document.getElementById(
        "total-harga"
    ).innerText =
        "Rp" + total.toLocaleString();

}

function checkout(){

    let keranjang =
        JSON.parse(
            localStorage.getItem("keranjang")
        ) || [];

    let selectedItems = [];

    document
        .querySelectorAll(".item-check")
        .forEach(function(check,index){

            if(check.checked){

                selectedItems.push(
                    keranjang[index]
                );

            }

        });

    if(selectedItems.length === 0){

        alert(
            "Pilih minimal 1 layanan!"
        );

        return;

    }

    localStorage.setItem(
        "selectedItems",
        JSON.stringify(selectedItems)
    );

    window.location.href =
        "pembayaran.html";

}

function pesanSekarang(nama, harga){

    let selectedItems = [];

    selectedItems.push({
        nama: nama,
        harga: harga
    });

    localStorage.setItem(
        "selectedItems",
        JSON.stringify(selectedItems)
    );

    window.location.href =
        "../pembayaran.html";

}

if(
    document.getElementById(
        "keranjang-list"
    )
){
    tampilKeranjang();
}