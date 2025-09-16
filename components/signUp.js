export default function renderSingUp(){

    document.getElementById('main').innerHTML(`<div class="login-container">
    <form class="login-form">
      <h2>Login</h2>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter username" required>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>`);

}