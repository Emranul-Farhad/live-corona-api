const clicks = () =>{
    fetch ('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data =>showetails(data.Countries[14]))
}

clicks ()

const showetails = corona => {
    console.log(corona)

        const div= document.getElementById ("first")
    const creates = document.createElement("tr")
    creates.innerHTML = `
          <tr>
            <td>${corona.NewConfirmed} </td>
            <td>${corona.NewRecovered}</td>
            <td>${corona.NewDeaths} </td>
          </tr>
    
    `;
    div.appendChild (creates)
    
    const divs = document.getElementById("second")
    const creats = document.createElement("tr")
    creats.innerHTML = `
    <tr>
    <td>${corona.TotalConfirmed}</td>
    <td>${corona. TotalRecovered}</td>
    <td>${corona.TotalDeaths}</td>
  </tr>
    `;

    divs.appendChild(creats);
   
      

}
