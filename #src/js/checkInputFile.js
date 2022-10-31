export const checkInputFile = () => {
  let inputFile = document.querySelector('.input-file>input');
  let innerText = document.querySelector('.input-file>span');
  if (!!inputFile) {
    inputFile.onchange = () => {
      let filePath = inputFile.value.split('\\');
      let nameFile = filePath[filePath.length - 1];
      innerText.textContent = nameFile;
    }
  }
}
