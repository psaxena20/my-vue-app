<template>
  <div
    class="login-container d-flex align-items-center justify-content-center vh-100"
    style="background: url('/images/contact.jpg') center/cover no-repeat"
  >
    <div class="login-box p-4 text-black text-center rounded shadow-lg">
      <h2 class="fw-bold">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3 text-start">
          <label class="form-label">Email</label>
          <input
            type="email"
            v-model="email"
            class="form-control border-0 border-bottom bg-transparent text-black"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-3 text-start">
          <label class="form-label">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control border-0 border-bottom bg-transparent text-black"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <input type="checkbox" id="rememberMe" class="me-1" />
            <label for="rememberMe" class="text-black">Remember Me</label>
          </div>
        </div>
        <div class="mb-3">
          <label for="roleSelect" class="form-label fw-bold">Role</label>
          <select
            v-model="role"
            id="roleSelect"
            class="form-select border-0 border-bottom bg-transparent text-black"
          >
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>

        <button type="submit" class="btn btn-dark w-100 py-2">Log in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      role: "customer",
    };
  },

  methods: {
    handleLogin() {
      localStorage.setItem("userRole", this.role);
      if (this.role === "admin") {
        this.$router.push("/admin");
      } else {
        this.$router.push("/customer");
      }
    },
  },
};
</script>

<style>
.login-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  width: 350px;
  border-radius: 15px;
  padding: 20px;
}
</style>
