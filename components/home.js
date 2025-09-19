export default function renderHome(){
    const RootElement = document.getElementById('root');
    
    RootElement.innerHTML = `
    <section class="page">
      <h1>Bienvenue 👋</h1>
      <p>Gérez vos patients, rendez-vous et finances en toute simplicité.</p>
      <button onclick="location.hash='#/dashboard'">Aller au tableau de bord</button>
    </section>
  `;
    
}