if (!localStorage.getItem("zenis_users")) {

  const users = [

    {
      id: 1,
      nama: "Admin",
      email: "admin@mail.com",
      password: "12345",
      role: "admin"
    },

    {
      id: 2,
      nama: "User",
      email: "user@mail.com",
      password: "12345",
      role: "user"
    }

  ];

  localStorage.setItem(
    "zenis_users",
    JSON.stringify(users)
  );
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document
      .getElementById("email")
      .value
      .trim();

    const password = document
      .getElementById("password")
      .value
      .trim();

    // Ambil data user dari localStorage
    const users = JSON.parse(
      localStorage.getItem("zenis_users")
    ) || [];

    // Cari user yang cocok
    const user = users.find(
      u =>
        u.email === email &&
        u.password === password
    );

    // Kalau tidak ditemukan
    if (!user) {
      alert("Email atau password salah!");
      return;
    }

    // Simpan sesi login
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "role",
      user.role
    );

    // Redirect berdasarkan role
    if (user.role === "admin") {

      alert("Login Admin Berhasil");

      window.location.href =
        "admin/dashboard_admin.html";

    } else {

      alert("Login Berhasil");

      window.location.href =
        "dashboard_user.html";

    }

  });