function fetchcountry() {
  fetch("https://restcountries.com/v3/all")
    .then((response) => response.json())
    .then((data) => {
      const countrySelect = document.getElementById("countrySelect");

      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.name.common;
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
      });

      // const nationalitySelect =
      //   document.getElementById("nationalitySelect");
      // function appendNIfNecessary(name) {
      //   if (name.endsWith("ian") || name.endsWith("a")) {
      //     return name + "n";
      //   }
      //   return name;
      // }

      // data.forEach((country) => {
      //   const option = document.createElement("option");
      //   option.value = country.name.common;
      //   option.textContent = appendNIfNecessary(country.name.common);
      //   nationalitySelect.appendChild(option);
      // });

      $(".selectpicker").selectpicker("refresh");
    })
  .catch((error) => console.error("Error fetching country data:", error));
}
fetchcountry();

// function showSuccessAlert() {
//   const response = {
//     message: "Thank you for vouching an identity.",
//   };

//   Swal.fire({
//     icon: "success",
//     title: "<h4>Form Submitted!</h4>",
//     text: response.message,
//     showCloseButton: true,
//     showConfirmButton: false,
//     closeButtonColor: "#000",
//     className: "sweetAlert p-5",
//     color: "gray",
//     customClass: {
//       closeButton: "custom-close-button",
//       confirmButton: "btn btn-dark",
//       cancelButton: "btn btn-dark custom-close-button",
//     },
//     buttonsStyling: false,
//   });
// }


let valid = true;
list = [
  "identification.txt",
  "identificationb.txt",
  "identificationc.txt",
  "identificationd.txt",
];


function dynamicactive(num) {
  fetchcountry();
  if (num <= 0){
   valid = true;
  }
  if (valid || num <= 0) {
    const i = Math.abs(num);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("dyna").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", list[i], true);
    xhttp.send();
  }
}

function validate(id) {
  const field = document.getElementById(id);

  if (!field.value) {
    valid = false;
    const error = document.getElementById(id + "Error");
    error.classList.add("visible");
    field.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }else{
    valid = true;

  }
  if (!valid) {
    e.preventDefault();
  }
  return valid;
}
