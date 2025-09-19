export default function renderDashboard() {
  document.getElementById('app').innerHTML = `
    <nav class="navbar">
      <h1 class="logo">Clinic<span>App</span></h1>
      <div>
        <a href="#/home">Accueil</a>
        <a href="#/login">Déconnexion</a>
      </div>
    </nav>

    <section class="page dashboard">
      <h1>Tableau de bord</h1>
      <div class="cards">
        <div class="card">
          <h3>Patients</h3>
          <p>Nombre total : 120</p>
          <button>Voir</button>
        </div>
        <div class="card">
          <h3>Rendez-vous</h3>
          <p>À venir : 8</p>
          <button>Voir</button>
        </div>
        <div class="card">
          <h3>Finances</h3>
          <p>Revenus du mois : 12 000 DH</p>
          <button>Voir</button>
        </div>
      </div>
    </section>
  `;
}