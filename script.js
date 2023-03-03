
window.addEventListener('load', function () {

    const container = document.getElementById('container');
    let greenActive = '';
    function checkHoursInSpace(astro1, astro2) {
        return astro2.hoursInSpace - astro1.hoursInSpace;
      }

    fetch('https://handlers.education.launchcode.org/static/astronauts.json')

        .then(response => response.json())

        .then(data => {


            data.sort(checkHoursInSpace);


            for (let i = 0; i < data.length; i++) {

            if (data[i].active === true){
                greenActive = 'style = "color: green"';
            } else {
                greenActive = '';
            }

                container.innerHTML += `
                <div class="astronaut">
   <div class="bio">
      <h3>${data[i].firstName} ${data[i].lastName}</h3>
      <ul>
         <li>Hours in space: ${data[i].hoursInSpace}</li>
         <li ${greenActive} >Active: ${data[i].active}</li>
         <li>Skills: ${data[i].skills.join(', ')}</li>
      </ul>
   </div>
   <img class="avatar" src="${data[i].picture}">
</div>`;

            }

        })
        .catch(error => {
            // Your code to handle any errors goes here
            console.error(error);
        });








});