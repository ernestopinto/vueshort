<template>
  <div>
    <header
      class="login-banner-image d-flex align-items-center justify-content-center"
      :style="[
        {
          'background-image': `url(${imageForLogin}})`,
        },
        { 'background-size': 'cover' },
      ]"
      style="height: 300px; width: 100%"
    >
      <div class="login-text">
        <h1>Login</h1>
      </div>
    </header>
    <div
      class="form-login container h-100 d-flex justify-content-left align-items-center"
    >
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "bootstrap4-vue";
export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      imageForLogin:
        "https://www.paraeles.pt/wp-content/uploads/2021/06/J%C3%BAlia-Palha.jpg",
    };
  },
  methods: {
    onSubmit() {
      // Perform login here
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~bootstrap/scss/bootstrap";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.login-banner-image {
  background-size: cover;
}

.login-text {
  position: relative;
  right: 40%;
  top: 35%;
  color: white;
}

.form-login {
  padding: 20px;
}

// S22 type od devices
@media (min-width: 360px) and (max-width: 730px) {
  /* your styles here */
  .login-text {
    right: 30%;
  }

  .form-group {
    width: 100%;
  }
  .form-control {
    width: 100%;
  }
}
</style>
