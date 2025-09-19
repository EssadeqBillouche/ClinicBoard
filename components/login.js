export default function renderLogin() {
  document.getElementById('app').innerHTML = `
    <section class="page">
      <h1>Connexion</h1>
      <form class="auth-form">
        <input type="text" placeholder="Nom d'utilisateur" required>
        <input type="password" placeholder="Mot de passe" required>
        <button type="submit">Se connecter</button>
      </form>
      <div class="auth-switch">
        <p>Nouveau ? <a href="#/signup">Créer un compte</a></p>
      </div>
    </section>
  `;
}