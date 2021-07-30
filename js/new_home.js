window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});

// Template literal E56 feature
 const createInnerHtml = () => {
  const innerHtml = `
  <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>
    <tr>
      <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -5.png"></td>
      <td>Anand</td>
      <td>Male</td>
      <td><div class='dept-label'>Sales</div><div class='dept-label'>Finance</div></td>
      <td>4000000</td>
      <td>10 Jan 2021</td>
      <td>
        <img name="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
        <img name="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit"> 
      </td>
    </tr>
  `;
  document.querySelector('#table-display').innerHTML = innerHtml;
}