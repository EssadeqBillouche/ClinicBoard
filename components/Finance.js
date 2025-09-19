export default function renderFinance() {
  document.getElementById('app').innerHTML = `
    <section class="finance">
      <h2>Finances</h2>
      <div class="finance-cards">
        <div class="finance-card">
          <h3>Revenus</h3>
          <p>12 000 MAD</p>
        </div>
        <div class="finance-card">
          <h3>Dépenses</h3>
          <p>3 000 MAD</p>
        </div>
        <div class="finance-card">
          <h3>Bénéfice net</h3>
          <p>9 000 MAD</p>
        </div>
      </div>
    </section>
  `;
}
