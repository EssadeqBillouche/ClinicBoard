export default function renderPatients() {
  document.getElementById('app').innerHTML = `
    <section class="patients">
      <h2>Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Âge</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ahmed</td><td>30</td><td>0600000000</td></tr>
          <tr><td>Sara</td><td>25</td><td>0611111111</td></tr>
          <tr><td>Youssef</td><td>40</td><td>0622222222</td></tr>
        </tbody>
      </table>
    </section>
  `;
}
