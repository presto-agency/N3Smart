export const inputNumber = () => {
  const inputTel = document.querySelector('input[type = "tel"]')
  if(inputTel){
    inputTel.addEventListener("keypress", function (evt) {
      let ASCIICode = (evt.which) ? evt.which : evt.keyCode
      if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        evt.preventDefault()
    })
  }
}