//Form validation
$(document).ready(function () {
  $("#username").change(function () {
    let name = $(this).val();
    $("#username-wp").attr("value", name);
  });

  $("#cv-data-wp").change(function () {
    var props = $("#cv-data-wp").prop("files"),
      file = props[0];
    $(".file-input-label").text(file.name);
    $("#filecheck").hide();
    // alert(file.name);
  });

  // Validate post type
  $("#typecheck").hide();
  $("#rolecheck").hide();
  $("#namecheck").hide();
  $("#emailcheck").hide();
  $("#filecheck").hide();
  $("#amountcheck").hide();
  $("#sectorcheck").hide();
  $("#transactioncheck").hide();
  $("#postcheck").hide();

  let postTypeError = true;

  function validatePostType() {
    let postType = $("#post-type-wp").val();
    if (postType == "") {
      $("#typecheck").show();
      postTypeError = false;
      return false;
    } else {
      postTypeError = true;
      $("#typecheck").hide();
    }
  }

  let amountError = true;

  function validateAmount() {
    let amount = $("#amount-wp").val();
    if (amount == "") {
      $("#amountcheck").show();
      amountError = false;
    } else {
      amountError = true;
      $("#amountcheck").hide();
    }
  }

  let sectorError = true;

  function validateSector() {
    let sector = $("#sector-wp").val();
    if (sector == "") {
      $("#sectorcheck").show();
      sectorError = false;
    } else {
      sectorError = true;
      $("#sectorcheck").hide();
    }
  }

  let transactionError = true;

  function validateTransaction() {
    let transaction = $("#transaction-wp").val();
    if (transaction == "") {
      $("#transactioncheck").show();
      transactionError = false;
    } else {
      transactionError = true;
      $("#transactioncheck").hide();
    }
  }

  // Validate Username
  $("#namecheck").hide();
  let usernameError = true;
  $("#username-wp").keyup(function () {
    validateUsername();
  });
  function validateUsername() {
    let usernameValue = $("#username-wp").val();
    if (usernameValue.length == "") {
      $("#namecheck").show();
      usernameError = false;
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 30) {
      $("#namecheck").show();
      $("#namecheck").html("**length of name must be between 3 and 30");
      usernameError = false;
      return false;
    } else {
      usernameError = true;
      $("#namecheck").hide();
    }
  }

  // Validate user role
  let roleError = true;
  $("#userrole-wp").keyup(function () {
    validateUserrole();
  });
  function validateUserrole() {
    let roleValue = $("#userrole-wp").val();
    if (roleValue.length === 0) {
      $("#rolecheck").show();
      roleError = false;
      return false;
    } else if (roleValue.length < 3 || roleValue.length > 30) {
      $("#rolecheck").show();
      $("#rolecheck").html("**length of role must be between 3 and 30");
      roleError = false;
      return false;
    } else {
      $("#rolecheck").hide();
      roleError=true;
    }
  }
  let msgError = true;
  function validateMessage() {
    let messageValue = $("#message-wp").val();
    if (messageValue.length === 0) {
      $("#postcheck").show();
      msgError = false;
      return false;
    } else if (messageValue.length < 50 || messageValue.length > 500) {
      $("#postcheck").show();
      $("#postcheck").html("**length of role must be between 50 and 500");
      msgError = false;
      return false;
    } else {
      $("#postcheck").hide();
      msgError = true;
    }
  }
  //validate File
$("#message-wp").on('focus', () => {
    $("#postcheck").hide();
  });

  let fileError = true;
  function validateFile() {
    if (document.getElementById("cv-data-wp").files.length === 0) {
      $("#filecheck").show();
      fileError = false;
      return false;
    }
    $("#filecheck").hide();
    fileError = true;
  }
  // Validate Email
  let emailError = true;
  const email = document.getElementById("email-wp");
  email.addEventListener("focus", () => {
    $("#emailcheck").hide();
  });
  function validateEmail() {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;
    if (regex.test(s)) {
      email.classList.remove("is-invalid");
      emailError = true;
      $("#emailcheck").hide();
    } else {
      email.classList.add("is-invalid");
      emailError = false;
      $("#emailcheck").show();
    }
  }


  function initInputValue() {
    $("#post-type-wp").val("");
    $("#username-wp").val("");
    $("#email-wp").val("");
    $("#userrole-wp").val("");
    $("#amount-wp").val("");
    $("#sector-wp").val("");
    $("#transaction-wp").val("");
    $("#message-wp").val("");
  }
  $("#submit-my-btn ").click(function (e) {
    e.preventDefault();
 
    validatePostType();
    validateUsername();
    validateEmail();
    validateMessage();
     
    let post_type = $("#post-type-wp").val();

    if (post_type == "Seeking Capital") {
      validateAmount();
      validateSector();
      validateTransaction();
      
      if (
        amountError &&
        sectorError &&
        usernameError &&
        postTypeError &&
        emailError &&
        transactionError &&
        msgError
      ) {
        $(".wpcf7-form").submit();
       
        // initInputValue();
       
      } else {
         
      }
    } else {
      validateUserrole();
      validateFile();
      if (
        usernameError &&
        postTypeError &&
        emailError &&
        roleError &&
        msgError && 
        fileError
      ) {
        $(".wpcf7-form").submit();
        
       
      } else {
          
      }
    }
  });
});
