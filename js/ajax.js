$(function () {
  $("#modal").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#modal").serialize();
      $.ajax({
        url: "modal.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $("#modal .form__slogan, #modal input, #modal .agree-block").hide();
            $("#modal .form__title").text("Спасибо за доверие!");
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });

  $("#ask").submit(function () {
    var errors = false;
   
    if (!errors) {
      var data = $("#ask").serialize();
      $.ajax({
        url: "ask.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $("#ask .form__slogan, #ask input, #ask .agree-block").hide();
            $("#ask .form__title").text("Спасибо за доверие!");
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });

  $("#main").submit(function () {
    var errors = false;
   
    if (!errors) {
      var data = $("#main").serialize();
      $.ajax({
        url: "main.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $("#main .form__slogan, #main input, #main .agree-block").hide();
            $("#main .form__title").text("Спасибо за доверие!");
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
});
