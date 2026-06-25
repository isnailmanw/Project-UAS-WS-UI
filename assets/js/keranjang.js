function tambahKeranjang(nama, harga, gambar = "", kategori = "", durasi = "") {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  keranjang.push({
    nama,
    harga,

    gambar: gambar || getImage(nama),

    kategori: kategori || getKategori(nama),

    durasi: durasi || getDurasi(nama),
  });

  localStorage.setItem("keranjang", JSON.stringify(keranjang));

  alert(nama + " berhasil ditambahkan ke keranjang!");
}

function getImage(nama) {
  switch (nama) {
    case "Beginner Yoga Class":
      return "../assets/img/yoga.jpg";

    case "Meditation Yoga":
      return "../assets/img/meditation.jpg";

    case "Private Yoga Session":
      return "../assets/img/privat.jpg";

    case "Relaxation Massage":
      return "../assets/img/relaxation.jpg";

    case "Aromatherapy Massage":
      return "../assets/img/aromatherapy.jpg";

    case "Hot Stone Therapy":
      return "../assets/img/hot.jpg";

    case "Complete Wellness Package":
      return "../assets/img/complete.jpg";

    case "Stress Recovery Program":
      return "../assets/img/stress.jpg";

    case "Mind & Body Therapy":
      return "../assets/img/mind.jpg";

    case "Facial Beauty Care":
      return "../assets/img/facial.jpg";

    case "Hair Spa Treatment":
      return "../assets/img/hair.jpg";

    case "Manicure & Pedicure":
      return "../assets/img/manicure.jpg";

    default:
      return "../assets/img/default.jpg";
  }
}

function getKategori(nama) {
  if (nama.includes("Yoga")) return "Yoga";

  if (nama.includes("Massage") || nama.includes("Stone")) return "Spa";

  if (
    nama.includes("Wellness") ||
    nama.includes("Therapy") ||
    nama.includes("Stress")
  )
    return "Wellness";

  return "Beauty";
}

function getDurasi(nama) {
  switch (nama) {
    case "Beginner Yoga Class":
      return "60 Menit";

    case "Meditation Yoga":
      return "60 Menit";

    case "Private Yoga Session":
      return "90 Menit";

    case "Relaxation Massage":
      return "60 Menit";

    case "Aromatherapy Massage":
      return "90 Menit";

    case "Hot Stone Therapy":
      return "90 Menit";

    case "Complete Wellness Package":
      return "120 Menit";

    case "Stress Recovery Program":
      return "120 Menit";

    case "Mind & Body Therapy":
      return "90 Menit";

    case "Facial Beauty Care":
      return "60 Menit";

    case "Hair Spa Treatment":
      return "75 Menit";

    case "Manicure & Pedicure":
      return "60 Menit";

    default:
      return "-";
  }
}

function tampilKeranjang() {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  let container = document.getElementById("keranjang-list");

  container.innerHTML = "";

  keranjang.forEach(function (item, index) {
    container.innerHTML += `

<div class="cart-item">

    <div class="cart-left">

        <input
            type="checkbox"
            class="item-check"
            data-harga="${item.harga}"
            onchange="hitungTotal()"
        >

        <img
            src="${
              item.gambar && item.gambar !== ""
                ? item.gambar
                : getImage(item.nama)
            }"
            class="cart-image"
            alt="${item.nama}"
        >

        <div class="cart-info">

            <h3>${item.nama}</h3>

            <p>${
              item.kategori && item.kategori !== ""
                ? item.kategori
                : getKategori(item.nama)
            }</p>

            <span>${
              item.durasi && item.durasi !== ""
                ? item.durasi
                : getDurasi(item.nama)
            }</span>

            <div class="cart-price">
                Rp${item.harga.toLocaleString()}
            </div>

        </div>

    </div>

    <button
        class="delete-btn"
        onclick="hapusItem(${index})"
    >
        Hapus
    </button>

</div>

`;
  });

  hitungTotal();
}
function hapusItem(index) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  keranjang.splice(index, 1);

  localStorage.setItem("keranjang", JSON.stringify(keranjang));

  tampilKeranjang();
}

function hitungTotal() {
  let subtotal = 0;

  document.querySelectorAll(".item-check").forEach(function (item) {
    if (item.checked) {
      subtotal += Number(item.dataset.harga);
    }
  });

  const biayaLayanan = subtotal > 0 ? 2500 : 0;

  const total = subtotal + biayaLayanan;

  const subtotalElement = document.getElementById("subtotal");

  if (subtotalElement) {
    subtotalElement.textContent = "Rp" + subtotal.toLocaleString("id-ID");
  }

  const biayaElement = document.getElementById("biaya-layanan");

  if (biayaElement) {
    biayaElement.textContent = "Rp" + biayaLayanan.toLocaleString("id-ID");
  }

  const totalElement = document.getElementById("total-harga");

  if (totalElement) {
    totalElement.textContent = "Rp" + total.toLocaleString("id-ID");
  }
}

function checkout() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  const selectedItems = [];

  document.querySelectorAll(".item-check").forEach(function (check, index) {
    if (check.checked) {
      const item = keranjang[index];

      selectedItems.push({
        nama: item.nama,

        harga: item.harga,

        gambar: item.gambar || getImage(item.nama),

        kategori: item.kategori || getKategori(item.nama),

        durasi: item.durasi || getDurasi(item.nama),
      });
    }
  });

  if (selectedItems.length === 0) {
    alert("Pilih minimal 1 layanan!");

    return;
  }

  localStorage.setItem(
    "selectedItems",

    JSON.stringify(selectedItems),
  );

  window.location.href = "pembayaran.html";
}

function pesanSekarang(
  nama,

  harga,

  gambar = "",

  kategori = "",

  durasi = "",
) {
  const selectedItems = [];

  selectedItems.push({
    nama,

    harga,

    gambar: gambar || getImage(nama),

    kategori: kategori || getKategori(nama),

    durasi: durasi || getDurasi(nama),
  });

  localStorage.setItem(
    "selectedItems",

    JSON.stringify(selectedItems),
  );

  window.location.href = "../pembayaran.html";
}

if (document.getElementById("keranjang-list")) {
  tampilKeranjang();
}
