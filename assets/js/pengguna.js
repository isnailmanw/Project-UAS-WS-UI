// ====================
// DATA PENGGUNA
// ====================

let users = JSON.parse(localStorage.getItem("zenis_users")) || [];

// ====================
// ELEMENT
// ====================

const form = document.getElementById("userForm");

// ====================
// LOAD AWAL
// ====================

renderUsers();

// ====================
// TAMBAH PENGGUNA
// ====================

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value.trim();

  const role = document.getElementById("role").value;

  // cek email sudah ada

  const emailExist = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase(),
  );

  if (emailExist) {
    alert("Email sudah digunakan!");

    return;
  }

  users.push({
    id: Date.now(),

    nama: nama,

    email: email,

    password: password,

    role: role,

    status: "aktif",
  });

  localStorage.setItem("zenis_users", JSON.stringify(users));

  alert("Pengguna berhasil ditambahkan");

  form.reset();

  renderUsers();
});

// ====================
// RENDER TABEL
// ====================

function renderUsers() {
  const table = document.getElementById("userTable");

  table.innerHTML = "";

  users.forEach((user) => {
    const status = user.status || "aktif";

    table.innerHTML += `

<tr>

<td>${user.id}</td>

<td>${user.nama}</td>

<td>${user.email}</td>

<td>

<span class="role-badge">

${user.role}

</span>

</td>

<td>

<span class="${status === "aktif" ? "status-active" : "status-inactive"}">

${status}

</span>

</td>

<td>

<button
class="btn-status"
onclick="toggleStatus(${user.id})"
>

Ubah Status

</button>

${
  user.role !== "admin"
    ? `
<button
class="btn-delete"
onclick="hapusUser(${user.id})"
>

Hapus

</button>
`
    : ""
}

</td>

</tr>

`;
  });

  updateStats();
}

// ====================
// UPDATE STATISTIK
// ====================

function updateStats() {
  document.getElementById("totalUser").textContent = users.length;

  document.getElementById("totalAdmin").textContent = users.filter(
    (u) => u.role === "admin",
  ).length;

  document.getElementById("totalMember").textContent = users.filter(
    (u) => u.role === "user",
  ).length;

  document.getElementById("totalAktif").textContent = users.filter(
    (u) => (u.status || "aktif") === "aktif",
  ).length;
}

// ====================
// UBAH STATUS
// ====================

function toggleStatus(id) {
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) return;

  users[index].status =
    (users[index].status || "aktif") === "aktif" ? "nonaktif" : "aktif";

  localStorage.setItem("zenis_users", JSON.stringify(users));

  renderUsers();
}

// ====================
// HAPUS USER
// ====================

function hapusUser(id) {
  if (!confirm("Yakin ingin menghapus pengguna?")) {
    return;
  }

  users = users.filter((u) => u.id !== id);

  localStorage.setItem("zenis_users", JSON.stringify(users));

  renderUsers();
}
