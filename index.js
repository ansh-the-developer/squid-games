var userInfo={}



function s(){
    
  let e_email=  document.getElementById("email").value;
  let e_name=document.getElementById("name").value;
  let e_age=   document.getElementById("age").value;
  let e_dob=   document.getElementById("dob").value;
  let e_address=   document.getElementById("Address").value;
  let e_gender=   document.querySelector('input[name="gender"]:checked').value;

  userInfo.email=e_email;
  userInfo.name=e_name;
  userInfo.age=e_age;
  userInfo.birth=e_dob;
  userInfo.address=e_address;
  userInfo.gender=e_gender;

  console.log(userInfo);

  document.getElementById("tb").innerHTML+=` <tr> 
  <td>${userInfo.name}</td>
  <td>${userInfo.email}</td>
  <td>${userInfo.gender}</td>
  <td>${userInfo.birth}</td>
  <td>${userInfo.address}</td>
  <td>${userInfo.age}</td>
</tr>
  `
}

