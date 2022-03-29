<template>
  <form>
    <div class="container">
      <div align="center">
        <img class="pic" src="../assets/m.png" alt="" width="72" height="57" />
      </div>
      <div>
        <label>Username</label>
        <div>
          <input type="text" id="username" placeholder="Username" />
        </div>

        <label>Password</label>
        <div>
          <input type="password" id="pwd" placeholder="Enter password" />
        </div>

        <div>
          <button type="submit" class="loginbtn">Login</button>
        </div>
      </div>
    </div>
    <label style="display: flex; justify-content: flex-end; padding: 20px">
        Forget <span style="color: #41b883"> &nbsp; password?</span>
    </label>
  </form>
</template>

<style>
form {
  box-shadow: 0 0 4px #ccc;
  padding: 10px;
}
.container {
  padding: 20px;
}
.pic {
  height: 200px;
  width: 200px;
  padding: 12px;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
.loginbtn {
  border: none;
  width: 100%;
  padding: 15px;
  color: #f1f1f1;
  background: rgb(37, 170, 108);
}
</style>
