export default function renderAppointments() {
  document.getElementById('app').innerHTML = `
    <section class="appointments">
      <h2>Rendez-vous</h2>
      <ul class="appointment-list">
        <li><strong>Ahmed</strong> — 10h00</li>
        <li><strong>Sara</strong> — 11h00</li>
        <li><strong>Youssef</strong> — 14h00</li>
      </ul>
    </section>
  `;
}
