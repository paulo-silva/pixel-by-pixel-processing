document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('imgInput').addEventListener('change', getImage, false);

  function getImage() {
    let reader = new FileReader()
      , f = this.files[0]
    ;
    let imgData = reader.readAsDataURL(f);
    console.log(imgData);
  }

});