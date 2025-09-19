export default function renderSignup() {
  document.getElementById('app').innerHTML = `
    <section class="auth-page">
      <h2>Créer un compte</h2>
      <form class="auth-form">
        <input type="text" placeholder="Nom d'utilisateur" required>
        <input type="password" placeholder="Mot de passe" required>
        <input type="password" placeholder="Confirmer le mot de passe" required>
        <button type="submit">S'inscrire</button>
      </form>
      <p class="switch-link">
        Vous avez déjà un compte ? <a href="#/login">Se connecter</a>
      </p>
    </section>
  `;
}