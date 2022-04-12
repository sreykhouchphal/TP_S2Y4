<template>
  <div class="about">
    <form>
      <div class="container">
        <h1>Sign up</h1>
        <p>please fill in this form to create an account.</p>
        <hr />
        <div>
          <label>Email</label>
          <div>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <label>Username</label>
          <div>
            <input type="text" id="username" placeholder="Username" />
          </div>
          <label>First name</label>
          <div>
            <input type="text" id="fname" placeholder="First Name" />
          </div>
          <label>Last name</label>
          <div>
            <input type="text" id="lname" placeholder="Last Name" />
          </div>
          <label>Password</label>
          <div>
            <input type="password" id="pwd" placeholder="Create your password" />
          </div>
          <label  style="display: flex; justify-content: flex-start; padding: 20px">
            By creating an account you agree to our
            <span href="#" style="color: #4285f4"> &nbsp; Terms & Privacy.</span>
          </label>
          <div >
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024vh) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
form {
  box-shadow: 0 0 4px #ccc;
  padding: 10px;
}
.container {
  padding: 20px;
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
.signupbtn {
  border: none;
  width: 100%;
  padding: 15px;
  color: #f1f1f1;
  background: rgb(37, 170, 108);
}
</style>
