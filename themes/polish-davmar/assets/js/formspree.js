window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    const form = document.getElementById("contact-form");
    const button = document.getElementById("submit_button");

    const button_text = document.getElementById("button_text");
    const spinner = document.getElementById("spinner")
    const checkmark= document.getElementById("checkmark")
    const cross= document.getElementById("cross")

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.disabled = false;
      button.classList.toggle("submitted");
      spinner.classList.toggle("hidden");
      checkmark.classList.toggle("hidden");
      button_text.textContent = 'Thank you!';
    }

    function error() {
      button.classList.toggle("submitted");
      cross.classList.toggle("hidden");
      spinner.classList.toggle("hidden");
      button_text.textContent = "There was a problem";
    }

    function sending(){
      button_text.textContent = 'sending';
      button.classList.toggle("submitted");
      spinner.classList.toggle("hidden");
      button.disabled = true;
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      sending();
       var data = new FormData(form);
       ajax(form.method, form.action, data, success, error);
      error()
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }