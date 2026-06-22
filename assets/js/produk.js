const defaultProducts = [
  {
    id: 1,
    nama: "Beginner Yoga Class",
    kategori: "Yoga",
    icon: "🧘",
    harga: 95000,
    rating: "4.7",

    deskripsi:
      "Beginner Yoga Class merupakan kelas yoga dasar yang dirancang khusus untuk pemula yang ingin memulai perjalanan hidup sehat dan seimbang. Dalam kelas ini peserta akan mempelajari teknik pernapasan, gerakan yoga dasar, serta latihan relaksasi yang membantu meningkatkan kesehatan fisik dan mental secara bertahap.",

    durasi: "60 Menit",
    kapasitas: "20 Peserta",

    infoLabel: "Level",
    infoValue: "Pemula",

    benefit: [
      "Meningkatkan fleksibilitas tubuh",
      "Membantu memperbaiki postur tubuh",
      "Mengurangi ketegangan otot",
      "Membantu relaksasi dan keseimbangan pikiran",
    ],

    fasilitas: [
      "Instruktur Yoga Bersertifikat",
      "Matras Yoga Selama Kelas",
      "Ruangan Nyaman dan Bersih",
      "Air Mineral Gratis",
    ],

    default: true,
  },

  {
    id: 2,
    nama: "Meditation Session",
    kategori: "Yoga",
    icon: "🧘‍♀️",
    harga: 125000,
    rating: "4.8",

    deskripsi:
      "Meditation Session merupakan sesi meditasi terpandu yang membantu peserta mencapai ketenangan batin, meningkatkan fokus, serta mengurangi stres akibat aktivitas sehari-hari.",

    durasi: "75 Menit",
    kapasitas: "15 Peserta",

    infoLabel: "Level",
    infoValue: "Semua Level",

    benefit: [
      "Mengurangi stres dan kecemasan secara efektif",
      "Meningkatkan fokus dan konsentrasi",
      "Membantu kualitas tidur menjadi lebih baik",
      "Menumbuhkan kesadaran diri dan keseimbangan emosi",
    ],

    fasilitas: [
      "Instruktur Meditasi Profesional",
      "Ruang Meditasi yang Tenang dan Nyaman",
      "Audio Guided Meditation",
      "Air Mineral dan Teh Herbal Gratis",
    ],

    default: true,
  },

  {
    id: 3,
    nama: "Private Yoga Session",
    kategori: "Yoga",
    icon: "🧘‍♂️",
    harga: 250000,
    rating: "5.0",

    deskripsi:
      "Private Yoga Session merupakan layanan yoga eksklusif yang memberikan pendampingan secara personal dengan instruktur profesional.",

    durasi: "90 Menit",
    kapasitas: "1 Peserta",

    infoLabel: "Level",
    infoValue: "Personal",

    benefit: [
      "Program yoga yang disesuaikan dengan kebutuhan pribadi",
      "Pendampingan langsung dari instruktur profesional",
      "Perbaikan postur dan fleksibilitas yang lebih optimal",
      "Membantu mencapai target kesehatan dan kebugaran lebih cepat",
    ],

    fasilitas: [
      "Sesi Private One-on-One",
      "Konsultasi Kebutuhan dan Target Latihan",
      "Matras dan Peralatan Yoga Premium",
      "Air Mineral, Teh Herbal, dan Progress Evaluation",
    ],

    default: true,
  },

  {
    id: 4,
    nama: "Relaxation Massage",
    kategori: "Spa",
    icon: "💆",
    harga: 150000,
    rating: "4.8",

    deskripsi:
      "Relaxation Massage merupakan perawatan pijat relaksasi yang dirancang untuk membantu mengurangi ketegangan otot, meredakan kelelahan, serta memberikan rasa nyaman pada tubuh dan pikiran.",

    durasi: "60 Menit",
    kapasitas: "1 Peserta",

    infoLabel: "Terapis",
    infoValue: "Profesional",

    benefit: [
      "Mengurangi ketegangan dan pegal pada otot",
      "Membantu melancarkan sirkulasi darah",
      "Mengurangi stres dan kelelahan setelah beraktivitas",
      "Memberikan rasa rileks dan nyaman pada tubuh",
    ],

    fasilitas: [
      "Terapis Spa Profesional",
      "Ruang Perawatan Privat",
      "Handuk dan Perlengkapan Spa",
      "Air Mineral Gratis",
    ],

    default: true,
  },

  {
    id: 5,
    nama: "Aromatherapy Massage",
    kategori: "Spa",
    icon: "💆",
    harga: 180000,
    rating: "4.9",

    deskripsi:
      "Aromatherapy Massage merupakan perawatan spa yang menggabungkan teknik pijat relaksasi dengan penggunaan essential oil alami. Aroma terapi membantu menenangkan pikiran, mengurangi stres, serta memberikan sensasi rileks yang menyeluruh.",

    durasi: "75 Menit",
    kapasitas: "1 Peserta",

    infoLabel: "Terapis",
    infoValue: "Profesional",

    benefit: [
      "Membantu meredakan stres dan kecemasan",
      "Menenangkan pikiran serta meningkatkan suasana hati",
      "Mengurangi ketegangan otot dan kelelahan tubuh",
      "Membantu kualitas tidur menjadi lebih baik",
    ],

    fasilitas: [
      "Terapis Spa Profesional",
      "Essential Oil Pilihan Premium",
      "Ruang Perawatan Privat dengan Aromaterapi",
      "Air Mineral dan Teh Herbal Gratis",
    ],

    default: true,
  },

  {
    id: 6,
    nama: "Hot Stone Therapy",
    kategori: "Spa",
    icon: "💆",
    harga: 220000,
    rating: "5.0",

    deskripsi:
      "Hot Stone Therapy merupakan perawatan spa premium yang menggunakan batu vulkanik hangat untuk membantu meredakan ketegangan otot, meningkatkan sirkulasi darah, serta memberikan relaksasi yang lebih mendalam.",

    durasi: "90 Menit",
    kapasitas: "1 Peserta",

    infoLabel: "Terapis",
    infoValue: "Senior Therapist",

    benefit: [
      "Meredakan ketegangan otot secara mendalam",
      "Membantu meningkatkan sirkulasi darah",
      "Mengurangi stres dan kelelahan fisik",
      "Memberikan relaksasi menyeluruh pada tubuh dan pikiran",
    ],

    fasilitas: [
      "Senior Spa Therapist",
      "Terapi Batu Panas Premium",
      "Ruang Perawatan Privat Eksklusif",
      "Air Mineral, Teh Herbal, dan Aromatic Towel",
    ],

    default: true,
  },

  {
    id: 7,
    nama: "Complete Wellness Package",
    kategori: "Wellness",
    icon: "🌿",
    harga: 250000,
    rating: "4.9",

    deskripsi:
      "Complete Wellness Package merupakan paket perawatan lengkap yang mengombinasikan yoga, relaksasi spa, dan aromatherapy dalam satu sesi. Program ini dirancang untuk membantu meningkatkan kesehatan fisik, mengurangi stres, serta memberikan ketenangan pikiran secara menyeluruh.",

    durasi: "120 Menit",
    kapasitas: "5 Peserta",

    infoLabel: "Paket",
    infoValue: "All-In-One",

    benefit: [
      "Meningkatkan kesehatan fisik dan mental secara menyeluruh",
      "Mengurangi stres, kecemasan, dan kelelahan",
      "Membantu meningkatkan fleksibilitas dan kualitas tidur",
      "Memberikan pengalaman relaksasi yang lengkap dan seimbang",
    ],

    fasilitas: [
      "Sesi Yoga dan Relaksasi Terpandu",
      "Aromatherapy Premium Essential Oil",
      "Spa Treatment dan Ruang Wellness Nyaman",
      "Air Mineral, Teh Herbal, dan Wellness Kit",
    ],

    default: true,
  },

  {
    id: 8,
    nama: "Stress Recovery Program",
    kategori: "Wellness",
    icon: "🌸",
    harga: 280000,
    rating: "4.9",

    deskripsi:
      "Stress Recovery Program merupakan program wellness terpadu yang dirancang khusus untuk membantu mengurangi stres, kelelahan mental, dan tekanan akibat aktivitas sehari-hari. Program ini menggabungkan sesi mindfulness, relaksasi tubuh, teknik pernapasan, serta terapi pemulihan.",

    durasi: "150 Menit",
    kapasitas: "4 Peserta",

    infoLabel: "Program",
    infoValue: "Recovery",

    benefit: [
      "Membantu mengurangi stres dan tekanan emosional",
      "Memulihkan energi dan meningkatkan kualitas istirahat",
      "Meningkatkan fokus serta produktivitas sehari-hari",
      "Membantu menciptakan keseimbangan antara tubuh dan pikiran",
    ],

    fasilitas: [
      "Guided Mindfulness Session",
      "Relaksasi Aromatherapy Premium",
      "Stress Recovery Treatment",
      "Healthy Refreshment dan Wellness Kit",
    ],

    default: true,
  },

  {
    id: 9,
    nama: "Mind & Body Therapy",
    kategori: "Wellness",
    icon: "🍃",
    harga: 320000,
    rating: "5.0",

    deskripsi:
      "Mind & Body Therapy merupakan program wellness eksklusif yang mengintegrasikan mindfulness, terapi relaksasi, yoga ringan, dan teknik pernapasan untuk menciptakan keseimbangan optimal antara kesehatan fisik dan mental.",

    durasi: "180 Menit",
    kapasitas: "2 Peserta",

    infoLabel: "Program",
    infoValue: "Premium",

    benefit: [
      "Membantu mencapai keseimbangan tubuh dan pikiran secara optimal",
      "Mengurangi stres, kecemasan, dan kelelahan mental",
      "Meningkatkan fokus, kualitas tidur, dan kesejahteraan emosional",
      "Memberikan relaksasi mendalam serta energi positif yang berkelanjutan",
    ],

    fasilitas: [
      "Personal Wellness Consultation",
      "Guided Mindfulness & Breathing Session",
      "Premium Relaxation Therapy dan Yoga Session",
      "Healthy Refreshment, Teh Herbal, dan Exclusive Wellness Kit",
    ],

    default: true,
  },

  {
    id: 10,
    nama: "Facial Beauty Care",
    kategori: "Beauty",
    icon: "✨",
    harga: 180000,
    rating: "4.9",

    deskripsi:
      "Facial Beauty Care merupakan perawatan wajah premium yang membantu membersihkan, menutrisi, dan menjaga kesehatan kulit wajah. Perawatan ini dilakukan oleh beauty therapist profesional dengan produk berkualitas untuk membantu kulit tampak lebih bersih, segar, dan bercahaya.",

    durasi: "75 Menit",
    kapasitas: "1 Peserta",

    infoLabel: "Terapis",
    infoValue: "Professional",

    benefit: [
      "Membersihkan wajah secara mendalam",
      "Membantu menjaga kelembapan dan kesehatan kulit",
      "Mengangkat sel kulit mati dan kotoran",
      "Membuat kulit tampak lebih cerah dan segar",
    ],

    fasilitas: [
      "Beauty Therapist Profesional",
      "Deep Cleansing Facial Treatment",
      "Premium Skincare Products",
      "Refreshment dan Handuk Perawatan",
    ],

    default: true,
  },

  {
    id: 11,
    nama: "Hair Spa Treatment",
    kategori: "Beauty",
    icon: "💇",
    harga: 150000,
    rating: "4.8",

    deskripsi:
      "Hair Spa Treatment merupakan perawatan rambut profesional yang membantu menutrisi rambut dan kulit kepala agar tetap sehat, kuat, dan berkilau. Perawatan ini mengombinasikan hair mask, pijat kepala relaksasi, serta perawatan khusus untuk menjaga kelembapan dan kesehatan rambut.",

    durasi: "60 Menit",
    kapasitas: "1 Peserta",

    infoLabel: "Terapis",
    infoValue: "Professional",

    benefit: [
      "Menutrisi rambut dan kulit kepala secara menyeluruh",
      "Membantu mengurangi rambut kering dan kusam",
      "Menjadikan rambut lebih lembut dan mudah diatur",
      "Memberikan sensasi relaksasi melalui pijat kepala",
    ],

    fasilitas: [
      "Hair Therapist Profesional",
      "Hair Mask dan Scalp Treatment",
      "Pijat Kepala Relaksasi",
      "Handuk Perawatan dan Refreshment",
    ],

    default: true,
  },

  {
    id: 12,
    nama: "Manicure & Pedicure",
    kategori: "Beauty",
    icon: "💅",
    harga: 120000,
    rating: "4.7",

    deskripsi:
      "Manicure & Pedicure merupakan perawatan kuku tangan dan kaki yang membantu menjaga kebersihan, kesehatan, dan keindahan kuku. Perawatan ini meliputi pembersihan kuku, perapihan kutikula, serta perawatan dasar untuk membuat tangan dan kaki terasa lebih segar, bersih, dan terawat.",

    durasi: "45 Menit",
    kapasitas: "1 Peserta",

    infoLabel: "Terapis",
    infoValue: "Professional",

    benefit: [
      "Menjaga kebersihan dan kesehatan kuku",
      "Membantu merapikan kutikula dan kuku",
      "Membuat tangan dan kaki terasa lebih segar",
      "Meningkatkan kepercayaan diri dalam berpenampilan",
    ],

    fasilitas: [
      "Nail Therapist Profesional",
      "Perawatan Kuku Tangan dan Kaki",
      "Pembersihan dan Perapihan Kutikula",
      "Handuk Perawatan dan Air Mineral",
    ],

    default: true,
  },
];

let customProducts = JSON.parse(localStorage.getItem("zenis_products")) || [];

const table = document.getElementById("produkTable");

const form = document.getElementById("produkForm");

let editId = null;

renderTable();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const produk = {
    id: editId || Date.now(),

    nama: document.getElementById("nama").value,

    kategori: document.getElementById("kategori").value,

    icon: document.getElementById("icon").value,

    harga: Number(document.getElementById("harga").value),

    rating: document.getElementById("rating").value,

    durasi: document.getElementById("durasi").value,

    kapasitas: document.getElementById("kapasitas").value,

    infoLabel: document.getElementById("infoLabel").value,

    infoValue: document.getElementById("infoValue").value,

    deskripsi: document.getElementById("deskripsi").value,

    benefit: [
      document.getElementById("benefit1").value,
      document.getElementById("benefit2").value,
      document.getElementById("benefit3").value,
      document.getElementById("benefit4").value,
    ],

    fasilitas: [
      document.getElementById("fasilitas1").value,
      document.getElementById("fasilitas2").value,
      document.getElementById("fasilitas3").value,
      document.getElementById("fasilitas4").value,
    ],

    default: false,
  };

  if (editId) {
    customProducts = customProducts.map((item) =>
      item.id === editId ? produk : item,
    );

    alert("Produk berhasil diperbarui");
  } else {
    customProducts.push(produk);

    alert("Produk berhasil ditambahkan");
  }

  localStorage.setItem("zenis_products", JSON.stringify(customProducts));

  editId = null;

  form.reset();

  renderTable();
});

function renderTable() {
  table.innerHTML = "";

  const allProducts = [...defaultProducts, ...customProducts];

  allProducts.forEach((produk, index) => {
    table.innerHTML += `

<tr>

<td>${index + 1}</td>

<td>
${produk.icon}
${produk.nama}
</td>

<td>
${produk.kategori}
</td>

<td>
Rp ${produk.harga.toLocaleString("id-ID")}
</td>

<td>
⭐ ${produk.rating}
</td>

<td>

${
  produk.default
    ? '<span class="status-default">Default</span>'
    : '<span class="status-custom">Custom</span>'
}

</td>

<td>

<button
class="btn-detail"
onclick="editProduk(${produk.id})">
Edit
</button>

${
  !produk.default
    ? `
<button
class="btn-delete"
onclick="hapusProduk(${produk.id})">
Hapus
</button>
`
    : ""
}

</td>

</tr>

`;
  });
}

function editProduk(id) {
  let produk = customProducts.find((p) => p.id === id);

  if (!produk) {
    produk = defaultProducts.find((p) => p.id === id);
  }

  if (!produk) return;

  editId = produk.id;

  document.getElementById("nama").value = produk.nama;

  document.getElementById("kategori").value = produk.kategori;

  document.getElementById("icon").value = produk.icon;

  document.getElementById("harga").value = produk.harga;

  document.getElementById("rating").value = produk.rating;

  document.getElementById("durasi").value = produk.durasi;

  document.getElementById("kapasitas").value = produk.kapasitas;

  document.getElementById("infoLabel").value = produk.infoLabel;

  document.getElementById("infoValue").value = produk.infoValue;

  document.getElementById("deskripsi").value = produk.deskripsi;

  document.getElementById("benefit1").value = produk.benefit[0] || "";

  document.getElementById("benefit2").value = produk.benefit[1] || "";

  document.getElementById("benefit3").value = produk.benefit[2] || "";

  document.getElementById("benefit4").value = produk.benefit[3] || "";

  document.getElementById("fasilitas1").value = produk.fasilitas[0] || "";

  document.getElementById("fasilitas2").value = produk.fasilitas[1] || "";

  document.getElementById("fasilitas3").value = produk.fasilitas[2] || "";

  document.getElementById("fasilitas4").value = produk.fasilitas[3] || "";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function hapusProduk(id) {
  if (!confirm("Yakin ingin menghapus produk?")) {
    return;
  }

  customProducts = customProducts.filter((p) => p.id !== id);

  localStorage.setItem("zenis_products", JSON.stringify(customProducts));

  renderTable();
}
