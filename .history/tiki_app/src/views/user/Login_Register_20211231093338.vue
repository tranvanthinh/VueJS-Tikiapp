<template>
    <div class="container" id="container">
  <div class="form-container sign-up-container">
    <form action="#">
      <h1>Create Account</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>hoặc đăng nhập bằng <b>Email</b> của bạn</span>
      <input type="text" placeholder="Số điện thoại" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Họ và tên" />
      <input type="password" placeholder="Mật khẩu" />
      <button>Sign Up</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>hoặc sử dụng <b>tài khoản</b> của bạn</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mật khẩu" />
      <a href="#">Quên mật khẩu ?</a>
      <button>Sign In</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1>Đăng nhập</h1>
        <p>Vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
        <button class="ghost" id="signIn">Sign In</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Đăng kí</h1>
        <p>Vui lòng đăng kí tài khoản của bạn <u>tại đây</u></p>
        <button class="ghost" id="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</div>
</template>