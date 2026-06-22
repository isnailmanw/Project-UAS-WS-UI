const container = document.getElementById("artikelContainer");

if (!localStorage.getItem("zenis_articles")) {
  const defaultArticles = [
    {
      id: 1,

      judul: "5 Manfaat Yoga untuk Mengurangi Stres",

      kategori: "Yoga",

      gambar: "../assets/img/yoga.jpg",

      tanggal: "2026-06-18",

      penulis: "ZENIS Team",

      ringkasan:
        "Yoga membantu mengurangi stres, meningkatkan fokus belajar, dan menjaga kesehatan fisik maupun mental.",

      isi: `
     
      <h2>Pendahuluan</h2>

<p>
Menjadi mahasiswa bukanlah hal yang mudah. Selain harus mengikuti
perkuliahan, mahasiswa juga sering menghadapi berbagai tanggung jawab
lain seperti mengerjakan tugas, mengikuti organisasi, menjalani
magang, hingga mempersiapkan karier setelah lulus. Aktivitas yang
padat tersebut sering kali membuat mahasiswa merasa lelah secara
fisik maupun mental.
</p>

<p>
Jika tidak dikelola dengan baik, tekanan akademik dan tuntutan
kehidupan kampus dapat memicu stres yang berkepanjangan. Kondisi ini
dapat memengaruhi kualitas tidur, menurunkan konsentrasi belajar,
bahkan berdampak pada kesehatan tubuh secara keseluruhan. Oleh karena
itu, penting bagi mahasiswa untuk memiliki aktivitas yang dapat
membantu menjaga keseimbangan antara kesehatan fisik dan mental.
</p>

<p>
Salah satu aktivitas yang semakin populer dan terbukti bermanfaat
untuk mengurangi stres adalah yoga. Selain mudah dilakukan, yoga juga
dapat disesuaikan dengan berbagai tingkat kemampuan sehingga cocok
untuk pemula maupun yang sudah berpengalaman.
</p>

<h2>Mengapa Yoga Penting?</h2>

<p>
Yoga merupakan kombinasi antara latihan pernapasan, gerakan tubuh,
dan meditasi yang bertujuan menciptakan keseimbangan antara tubuh dan
pikiran. Berbeda dengan olahraga yang berfokus pada aktivitas fisik,
yoga juga membantu seseorang untuk lebih sadar terhadap kondisi tubuh
dan emosinya.
</p>

<p>
Bagi mahasiswa yang sering menghadapi tekanan akademik, yoga dapat
menjadi sarana relaksasi yang efektif. Melalui latihan yang rutin,
tubuh menjadi lebih rileks, pikiran lebih tenang, dan kemampuan
mengelola stres pun meningkat. Selain itu, yoga tidak memerlukan
peralatan khusus sehingga dapat dilakukan di rumah, kamar kos, maupun
studio yoga.
</p>

<h2>Manfaat Yoga</h2>

<h3>1. Membantu Menenangkan Pikiran</h3>

<p>
Salah satu manfaat utama yoga adalah membantu menenangkan pikiran.
Teknik pernapasan yang dilakukan secara perlahan dan teratur dapat
mengurangi ketegangan yang menumpuk akibat aktivitas sehari-hari.
Ketika tubuh menjadi lebih rileks, tingkat kecemasan dan stres juga
dapat berkurang secara signifikan.
</p>

<p>
Banyak mahasiswa yang merasa lebih tenang dan nyaman setelah
melakukan sesi yoga singkat. Bahkan beberapa gerakan sederhana dapat
membantu mengembalikan energi positif setelah menjalani hari yang
melelahkan.
</p>

<h3>2. Meningkatkan Fokus dan Konsentrasi</h3>

<p>
Yoga melatih seseorang untuk fokus pada gerakan dan pernapasan yang
sedang dilakukan. Kebiasaan ini dapat membantu meningkatkan
konsentrasi dalam aktivitas sehari-hari, termasuk saat belajar dan
mengerjakan tugas kuliah.
</p>

<p>
Dengan pikiran yang lebih jernih, mahasiswa dapat memahami materi
perkuliahan dengan lebih baik serta mengurangi gangguan yang sering
menghambat produktivitas. Fokus yang meningkat juga membantu dalam
mengambil keputusan dan menyelesaikan pekerjaan dengan lebih efektif.
</p>

<h3>3. Menjaga Kesehatan Tubuh</h3>

<p>
Selain bermanfaat bagi kesehatan mental, yoga juga memberikan banyak
manfaat bagi kesehatan fisik. Berbagai gerakan peregangan membantu
meningkatkan fleksibilitas tubuh, memperkuat otot, dan memperbaiki
postur tubuh.
</p>

<p>
Bagi mahasiswa yang sering duduk berjam-jam di depan laptop atau saat
mengikuti perkuliahan, yoga dapat membantu mengurangi nyeri punggung,
pegal pada leher, serta ketegangan pada bahu. Tubuh yang lebih sehat
akan mendukung aktivitas belajar menjadi lebih nyaman dan produktif.
</p>

<h3>4. Membantu Meningkatkan Kualitas Tidur</h3>

<p>
Stres dan kelelahan sering menjadi penyebab utama gangguan tidur pada
mahasiswa. Melakukan yoga secara rutin dapat membantu tubuh dan
pikiran menjadi lebih rileks sebelum tidur sehingga kualitas tidur
meningkat.
</p>

<p>
Tidur yang cukup sangat penting untuk menjaga daya ingat, konsentrasi,
dan kesehatan tubuh secara keseluruhan. Dengan kualitas tidur yang
lebih baik, mahasiswa akan lebih siap menghadapi aktivitas pada hari
berikutnya.
</p>

<h2>Kesimpulan</h2>

<p>
Yoga merupakan aktivitas sederhana yang memberikan banyak manfaat
bagi mahasiswa. Selain membantu mengurangi stres, yoga juga mampu
meningkatkan fokus, menjaga kesehatan tubuh, dan memperbaiki kualitas
tidur. Dengan meluangkan waktu beberapa menit setiap hari untuk
berlatih yoga, mahasiswa dapat menjaga keseimbangan antara tuntutan
akademik dan kesehatan diri.
</p>

<div class="tips-box">
💡 <strong>Tips:</strong><br>
Mulailah dengan latihan yoga selama 20–30 menit setiap hari.
Pilih gerakan sederhana yang sesuai dengan kemampuan tubuh dan
lakukan secara konsisten untuk mendapatkan manfaat yang maksimal.
</div>
      `,
    },

    {
      id: 2,

      judul: "Mengapa Spa Dapat Membantu Mengurangi Kelelahan?",

      kategori: "Spa",

      gambar: "../assets/img/relaxation.jpg",

      tanggal: "2026-06-19",

      penulis: "ZENIS Team",

      ringkasan:
        "Spa membantu mengurangi kelelahan fisik maupun mental serta meningkatkan kualitas istirahat.",

      isi: `
      <h2>Pendahuluan</h2>

<p>
Di tengah kesibukan pekerjaan, perkuliahan, maupun aktivitas sehari-hari,
banyak orang mengalami kelelahan fisik dan mental tanpa disadari.
Rutinitas yang padat sering kali membuat tubuh bekerja lebih keras,
sementara waktu untuk beristirahat menjadi semakin terbatas.
Akibatnya, tubuh dapat mengalami ketegangan otot, kurang energi,
hingga munculnya stres yang memengaruhi kualitas hidup.
</p>

<p>
Jika kondisi tersebut berlangsung dalam jangka waktu yang lama,
kesehatan fisik dan mental dapat terganggu. Oleh karena itu,
penting untuk memberikan waktu bagi tubuh untuk beristirahat dan
memulihkan diri. Salah satu cara yang populer dan efektif untuk
membantu proses pemulihan tersebut adalah melalui perawatan spa.
</p>

<p>
Spa tidak hanya memberikan rasa nyaman, tetapi juga menawarkan berbagai
manfaat kesehatan yang dapat membantu tubuh kembali segar dan bugar.
Dengan kombinasi teknik relaksasi dan perawatan profesional,
spa menjadi pilihan yang tepat untuk melepas penat setelah menjalani
aktivitas yang melelahkan.
</p>

<h2>Mengapa Spa Efektif?</h2>

<p>
Spa merupakan bentuk perawatan yang menggabungkan berbagai metode
relaksasi seperti pijatan, aromaterapi, terapi air, serta suasana
yang tenang dan nyaman. Kombinasi tersebut membantu tubuh dan pikiran
melepaskan ketegangan yang menumpuk akibat aktivitas sehari-hari.
</p>

<p>
Saat menjalani perawatan spa, tubuh akan lebih rileks sehingga
sistem saraf menjadi lebih tenang. Aroma terapi yang digunakan juga
dapat memberikan efek menenangkan dan membantu mengurangi tingkat stres.
Tidak heran jika banyak orang merasa lebih segar dan berenergi setelah
menjalani sesi spa.
</p>

<p>
Selain memberikan kenyamanan sesaat, spa juga memiliki manfaat jangka
panjang apabila dilakukan secara rutin. Perawatan ini dapat membantu
menjaga kesehatan tubuh sekaligus meningkatkan kualitas hidup secara
keseluruhan.
</p>

<h2>Manfaat Spa</h2>

<h3>1. Mengurangi Ketegangan Otot</h3>

<p>
Salah satu manfaat utama spa adalah membantu mengurangi ketegangan
dan rasa pegal pada otot. Aktivitas yang padat, duduk terlalu lama,
atau kurangnya waktu istirahat dapat menyebabkan otot menjadi kaku
dan tidak nyaman.
</p>

<p>
Melalui teknik pijatan yang dilakukan oleh terapis profesional,
otot-otot yang tegang dapat menjadi lebih rileks. Hal ini membantu
mengurangi rasa nyeri, meningkatkan fleksibilitas tubuh, serta
memberikan sensasi nyaman setelah perawatan selesai.
</p>

<h3>2. Meningkatkan Sirkulasi Darah</h3>

<p>
Perawatan spa juga dapat membantu meningkatkan aliran darah ke seluruh
tubuh. Sirkulasi darah yang baik sangat penting untuk mengantarkan
oksigen dan nutrisi ke berbagai organ tubuh secara optimal.
</p>

<p>
Dengan meningkatnya sirkulasi darah, tubuh dapat bekerja lebih efisien,
proses pemulihan otot menjadi lebih cepat, serta membantu menjaga
kesehatan kulit agar tampak lebih segar dan bercahaya.
</p>

<h3>3. Membantu Tidur Lebih Nyenyak</h3>

<p>
Stres dan kelelahan sering menjadi penyebab sulit tidur atau kualitas
tidur yang buruk. Spa membantu menenangkan sistem saraf sehingga tubuh
lebih siap untuk beristirahat.
</p>

<p>
Setelah menjalani sesi spa, banyak orang merasakan tubuh yang lebih
ringan dan pikiran yang lebih tenang. Kondisi ini membantu seseorang
tidur lebih cepat dan mendapatkan kualitas tidur yang lebih baik,
sehingga tubuh dapat pulih secara optimal.
</p>

<h3>4. Mengurangi Stres dan Meningkatkan Mood</h3>

<p>
Spa tidak hanya bermanfaat bagi tubuh, tetapi juga bagi kesehatan
mental. Suasana yang tenang, aroma terapi yang menenangkan, dan
sentuhan pijatan yang lembut dapat membantu menurunkan tingkat stres
serta memberikan efek relaksasi yang mendalam.
</p>

<p>
Ketika tubuh dan pikiran menjadi lebih rileks, suasana hati juga
cenderung membaik. Hal ini dapat meningkatkan semangat, produktivitas,
dan kualitas hidup sehari-hari.
</p>

<h2>Kesimpulan</h2>

<p>
Spa merupakan salah satu bentuk perawatan yang efektif untuk membantu
memulihkan tubuh dan pikiran dari kelelahan akibat aktivitas sehari-hari.
Melalui kombinasi pijatan, aromaterapi, dan suasana relaksasi, spa dapat
membantu mengurangi ketegangan otot, meningkatkan sirkulasi darah,
memperbaiki kualitas tidur, serta mengurangi stres.
</p>

<p>
Dengan melakukan perawatan spa secara rutin, tubuh akan terasa lebih
segar, pikiran menjadi lebih tenang, dan kesehatan secara keseluruhan
dapat terjaga dengan lebih baik.
</p>

<div class="tips-box">
💡 <strong>Tips:</strong><br>
Lakukan spa minimal 1–2 kali setiap bulan untuk membantu menjaga
kesehatan tubuh dan mengurangi stres. Kombinasikan dengan pola hidup
sehat, istirahat yang cukup, serta konsumsi makanan bergizi agar
manfaat yang diperoleh menjadi lebih maksimal.
</div>
      `,
    },

    {
      id: 3,

      judul: "Rahasia Perawatan Beauty untuk Menjaga Kepercayaan Diri",

      kategori: "Beauty",

      gambar: "../assets/img/facial.jpg",

      tanggal: "2026-06-20",

      penulis: "ZENIS Team",

      ringkasan:
        "Perawatan beauty membantu menjaga kesehatan kulit dan meningkatkan rasa percaya diri.",

      isi: `
      <h2>Pendahuluan</h2>

<p>
Merawat diri bukan hanya tentang menjaga penampilan, tetapi juga
merupakan bentuk penghargaan terhadap diri sendiri. Di tengah
kesibukan dan aktivitas yang padat, banyak orang sering mengabaikan
perawatan tubuh dan kulit karena merasa tidak memiliki cukup waktu.
Padahal, menjaga kesehatan kulit dan tubuh merupakan bagian penting
dari gaya hidup sehat yang dapat memberikan dampak positif bagi
kesehatan fisik maupun mental.
</p>

<p>
Perawatan beauty tidak selalu identik dengan penggunaan produk mahal
atau perawatan yang rumit. Langkah-langkah sederhana seperti menjaga
kebersihan kulit, menggunakan produk yang sesuai, dan melakukan
perawatan secara rutin dapat membantu menjaga kesehatan serta
penampilan kulit dalam jangka panjang.
</p>

<p>
Selain memberikan manfaat secara fisik, perawatan beauty juga dapat
menjadi momen untuk beristirahat sejenak dari rutinitas sehari-hari.
Proses perawatan yang dilakukan dengan nyaman dapat membantu
mengurangi stres dan memberikan rasa rileks sehingga tubuh dan
pikiran terasa lebih segar.
</p>

<h2>Mengapa Perawatan Beauty Penting?</h2>

<p>
Kulit merupakan lapisan pelindung terluar tubuh yang setiap hari
terpapar oleh berbagai faktor lingkungan seperti sinar matahari,
polusi, debu, dan perubahan cuaca. Tanpa perawatan yang tepat,
kondisi kulit dapat mengalami berbagai masalah seperti kusam,
kering, berjerawat, hingga penuaan dini.
</p>

<p>
Melakukan perawatan beauty secara rutin membantu menjaga kesehatan
kulit agar tetap bersih, lembap, dan terawat. Selain itu,
perawatan yang dilakukan secara konsisten juga dapat membantu
mencegah berbagai masalah kulit sehingga penampilan tetap sehat
dan bercahaya.
</p>

<p>
Tidak hanya itu, aktivitas merawat diri juga dapat meningkatkan rasa
percaya diri karena seseorang merasa lebih nyaman dengan kondisi
dirinya. Perasaan positif tersebut dapat berdampak baik pada
kehidupan sosial maupun produktivitas sehari-hari.
</p>

<h2>Manfaat Perawatan Beauty</h2>

<h3>1. Menjaga Kesehatan Kulit</h3>

<p>
Salah satu manfaat utama perawatan beauty adalah membantu menjaga
kesehatan kulit. Kulit yang dirawat dengan baik akan memiliki
kelembapan yang cukup, tekstur yang lebih halus, dan tampak lebih
segar. Perawatan yang rutin juga membantu membersihkan kotoran dan
sel kulit mati yang dapat menyumbat pori-pori.
</p>

<p>
Dengan kondisi kulit yang sehat, risiko munculnya masalah seperti
jerawat, iritasi, atau kulit kusam dapat berkurang. Kulit yang sehat
juga mampu menjalankan fungsinya sebagai pelindung tubuh dengan lebih
optimal.
</p>

<h3>2. Meningkatkan Kepercayaan Diri</h3>

<p>
Penampilan yang terawat sering kali membuat seseorang merasa lebih
percaya diri saat berinteraksi dengan orang lain. Ketika kulit terlihat
lebih bersih dan sehat, seseorang cenderung merasa lebih nyaman dengan
dirinya sendiri.
</p>

<p>
Rasa percaya diri yang baik dapat memberikan dampak positif dalam
berbagai aspek kehidupan, mulai dari lingkungan perkuliahan,
pekerjaan, hingga hubungan sosial. Oleh karena itu, merawat diri
bukanlah bentuk kesombongan, melainkan salah satu cara untuk menjaga
kesejahteraan diri secara keseluruhan.
</p>

<h3>3. Memberikan Relaksasi</h3>

<p>
Perawatan wajah dan tubuh tidak hanya memberikan manfaat bagi
penampilan, tetapi juga membantu menciptakan rasa nyaman dan rileks.
Proses facial, masker wajah, pijatan ringan, maupun perawatan tubuh
lainnya dapat membantu mengurangi ketegangan yang muncul akibat
aktivitas sehari-hari.
</p>

<p>
Ketika tubuh dan pikiran menjadi lebih rileks, tingkat stres dapat
berkurang sehingga suasana hati menjadi lebih baik. Inilah alasan
mengapa banyak orang menjadikan perawatan beauty sebagai bagian dari
self-care routine mereka.
</p>

<h3>4. Membantu Mencegah Penuaan Dini</h3>

<p>
Paparan sinar matahari, polusi, dan gaya hidup yang kurang sehat
dapat mempercepat munculnya tanda-tanda penuaan pada kulit. Dengan
perawatan yang tepat, kesehatan kulit dapat terjaga sehingga tanda
penuaan seperti garis halus, kulit kusam, dan berkurangnya elastisitas
kulit dapat diminimalkan.
</p>

<p>
Menggunakan produk perawatan yang sesuai serta menjaga pola hidup sehat
akan membantu kulit tetap terlihat segar dan bercahaya dalam jangka
panjang.
</p>

<h2>Kesimpulan</h2>

<p>
Perawatan beauty merupakan salah satu bentuk investasi untuk kesehatan
dan kenyamanan diri. Selain membantu menjaga kesehatan kulit, perawatan
beauty juga dapat meningkatkan rasa percaya diri, memberikan relaksasi,
serta membantu mencegah berbagai masalah kulit di masa depan.
</p>

<p>
Dengan melakukan perawatan secara rutin dan menggunakan produk yang
sesuai dengan kebutuhan kulit, setiap orang dapat memperoleh manfaat
yang maksimal serta menjaga penampilan tetap sehat dan terawat.
</p>

<div class="tips-box">
💡 <strong>Tips:</strong><br>
Kenali jenis kulit Anda sebelum memilih produk perawatan. Gunakan
produk yang sesuai dengan kebutuhan kulit, lakukan perawatan secara
rutin, dan jangan lupa menggunakan tabir surya setiap hari untuk
melindungi kulit dari paparan sinar matahari.
</div>
      `,
    },

    {
      id: 4,

      judul: "Wellness Lifestyle: Kunci Hidup Sehat dan Seimbang",

      kategori: "Wellness",

      gambar: "../assets/img/stress.jpg",

      tanggal: "2026-06-21",

      penulis: "ZENIS Team",

      ringkasan:
        "Gaya hidup wellness membantu menjaga keseimbangan kesehatan fisik dan mental.",

      isi: `
      <h2>Pendahuluan</h2>

<p>
Wellness merupakan pendekatan hidup sehat yang berfokus pada
keseimbangan antara kesehatan fisik, mental, dan emosional.
Konsep ini tidak hanya menekankan pada bebas dari penyakit,
tetapi juga bagaimana seseorang dapat menjalani kehidupan yang
lebih berkualitas, bahagia, dan produktif setiap harinya.
</p>

<p>
Di era modern yang serba cepat, banyak orang menghadapi berbagai
tantangan seperti tekanan pekerjaan, tuntutan akademik, kurangnya
waktu istirahat, serta pola hidup yang kurang sehat. Kondisi tersebut
dapat memengaruhi kesehatan tubuh maupun pikiran apabila tidak
dikelola dengan baik.
</p>

<p>
Oleh karena itu, menerapkan gaya hidup wellness menjadi semakin
penting. Dengan menjaga keseimbangan dalam berbagai aspek kehidupan,
seseorang dapat meningkatkan kualitas hidup sekaligus menjaga
kesehatan dalam jangka panjang.
</p>

<h2>Mengapa Wellness Penting?</h2>

<p>
Wellness membantu seseorang menjalani hidup yang lebih sehat,
bahagia, dan produktif. Ketika tubuh dan pikiran berada dalam kondisi
yang baik, seseorang akan lebih mudah menjalankan aktivitas sehari-hari
serta menghadapi berbagai tantangan yang muncul.
</p>

<p>
Selain meningkatkan kesehatan fisik, wellness juga berperan dalam
menjaga kesehatan mental. Dengan menerapkan pola hidup yang seimbang,
tingkat stres dapat dikurangi, kualitas tidur meningkat, dan energi
yang dimiliki tubuh menjadi lebih optimal.
</p>

<p>
Wellness bukanlah tujuan yang dapat dicapai dalam waktu singkat,
melainkan sebuah proses berkelanjutan yang dilakukan melalui
kebiasaan-kebiasaan positif setiap hari. Langkah kecil yang dilakukan
secara konsisten dapat memberikan dampak besar bagi kesehatan dan
kesejahteraan seseorang di masa depan.
</p>

<h2>Komponen Wellness</h2>

<h3>1. Pola Makan Sehat</h3>

<p>
Pola makan sehat merupakan salah satu fondasi utama dalam konsep
wellness. Tubuh membutuhkan asupan nutrisi yang cukup untuk mendukung
berbagai fungsi organ dan menjaga daya tahan tubuh tetap optimal.
</p>

<p>
Mengonsumsi makanan bergizi seimbang yang mengandung karbohidrat,
protein, lemak sehat, vitamin, dan mineral dapat membantu tubuh
memperoleh energi yang dibutuhkan untuk beraktivitas. Selain itu,
membatasi konsumsi makanan olahan dan minuman tinggi gula juga
dapat membantu menjaga kesehatan dalam jangka panjang.
</p>

<p>
Kebiasaan makan yang sehat tidak hanya memberikan manfaat bagi tubuh,
tetapi juga dapat meningkatkan konsentrasi, memperbaiki suasana hati,
dan membantu menjaga berat badan ideal.
</p>

<h3>2. Aktivitas Fisik</h3>

<p>
Aktivitas fisik yang dilakukan secara rutin memiliki peran penting
dalam menjaga kesehatan tubuh. Olahraga membantu memperkuat otot,
meningkatkan kebugaran jantung, serta menjaga fleksibilitas dan
keseimbangan tubuh.
</p>

<p>
Tidak harus melakukan olahraga berat, aktivitas sederhana seperti
berjalan kaki, bersepeda, yoga, atau peregangan ringan setiap hari
sudah dapat memberikan manfaat yang besar bagi kesehatan. Yang
terpenting adalah melakukannya secara konsisten dan sesuai dengan
kemampuan tubuh.
</p>

<p>
Selain manfaat fisik, olahraga juga diketahui dapat membantu
melepaskan hormon endorfin yang berperan dalam meningkatkan suasana
hati dan mengurangi stres.
</p>

<h3>3. Kesehatan Mental</h3>

<p>
Kesehatan mental merupakan bagian yang tidak dapat dipisahkan dari
wellness. Pikiran yang sehat membantu seseorang menghadapi tekanan
hidup dengan lebih baik serta menjaga hubungan yang positif dengan
orang lain.
</p>

<p>
Mengelola stres, menjaga keseimbangan emosi, dan meluangkan waktu
untuk beristirahat merupakan langkah penting dalam menjaga kesehatan
mental. Aktivitas seperti meditasi, yoga, membaca buku, atau melakukan
hobi yang disukai dapat membantu menciptakan ketenangan dan
mengurangi beban pikiran.
</p>

<p>
Dengan kesehatan mental yang baik, seseorang akan lebih mampu
berkonsentrasi, mengambil keputusan secara bijak, serta menikmati
kehidupan dengan lebih positif.
</p>

<h3>4. Istirahat yang Cukup</h3>

<p>
Istirahat yang cukup sering kali dianggap sepele, padahal memiliki
peran yang sangat penting dalam menjaga wellness. Saat tidur, tubuh
melakukan proses pemulihan dan regenerasi sehingga berbagai sistem
tubuh dapat bekerja secara optimal.
</p>

<p>
Kurang tidur dapat menyebabkan penurunan konsentrasi, mudah lelah,
meningkatnya risiko stres, hingga gangguan kesehatan lainnya.
Oleh karena itu, menjaga kualitas tidur dengan durasi yang cukup
merupakan salah satu langkah penting dalam menerapkan gaya hidup sehat.
</p>

<h2>Kesimpulan</h2>

<p>
Wellness adalah pendekatan hidup sehat yang berfokus pada keseimbangan
antara kesehatan fisik, mental, dan emosional. Dengan menerapkan pola
makan sehat, rutin beraktivitas fisik, menjaga kesehatan mental, serta
memiliki waktu istirahat yang cukup, seseorang dapat meningkatkan
kualitas hidup secara menyeluruh.
</p>

<p>
Membangun gaya hidup wellness memang membutuhkan komitmen dan
konsistensi, namun manfaat yang diperoleh akan sangat berharga bagi
kesehatan dan kebahagiaan dalam jangka panjang.
</p>

<div class="tips-box">
💡 <strong>Tips:</strong><br>
Luangkan waktu untuk melakukan self-care setiap minggu, seperti
berolahraga, meditasi, membaca buku, atau melakukan aktivitas yang
Anda sukai. Kebiasaan sederhana tersebut dapat membantu menjaga
keseimbangan tubuh dan pikiran agar tetap sehat dan produktif.
</div>
      `,
    },
  ];

  localStorage.setItem("zenis_articles", JSON.stringify(defaultArticles));
}

const articles = JSON.parse(localStorage.getItem("zenis_articles")) || [];

renderArtikel();

function renderArtikel() {
  container.innerHTML = "";

  if (articles.length === 0) {
    container.innerHTML = `
      <div
        style="
          grid-column:1/-1;
          text-align:center;
          padding:50px;
        "
      >
        <h2>Belum Ada Artikel</h2>

        <p>
          Admin belum mempublikasikan artikel.
        </p>
      </div>
    `;

    return;
  }

  articles.forEach((artikel) => {
    container.innerHTML += `
      <div class="artikel-card">

        <img
          src="${artikel.gambar}"
          alt="${artikel.judul}"
        >

        <div class="artikel-content">

          <span class="kategori">
            ${artikel.kategori}
          </span>

          <h3>
            ${artikel.judul}
          </h3>

          <p>
            ${artikel.ringkasan}
          </p>

          <div class="meta">
            ${artikel.penulis}
            •
            ${artikel.tanggal}
          </div>

          <a
            href="detail_artikel.html?id=${artikel.id}"
            class="read-btn"
          >
            Baca Selengkapnya
          </a>

        </div>

      </div>
    `;
  });
}
