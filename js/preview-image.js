function preview_image(event) {
     var reader = new FileReader();
     reader.onload = function() {
         var output = document.getElementById('output_image');
         output.src = reader.result;
     }
     reader.readAsDataURL(event.target.files[0]);
     var uploadText = document.querySelector(".upload__text");
     uploadText.classList.add("upload__text--hidden");
};