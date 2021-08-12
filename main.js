// function isScrolledIntoView(elem) {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();

//   var elemTop = $(elem).offset().top;
//   var elemBottom = elemTop + $(elem).height();

//   return (
//     (elemBottom <= docViewBottom && elemTop >= docViewTop) ||
//     (elemBottom >= docViewBottom &&
//       elemTop >= docViewTop &&
//       docViewBottom - elemTop > $(window).height() / 2) ||
//     (elemBottom <= docViewBottom &&
//       elemTop <= docViewTop &&
//       elemBottom - docViewTop > $(window).height() / 2)
//   );
// }

function moveToImage(elem) {
  setTimeout(function () {
    $("html, body").animate({ scrollTop: $("div" + elem).offset().top }, 1500); //set scroll
    setTimeout(function () {
      $("audio").attr("src", elem + ".mp3");
    }, 1000);
  }, 500);
}

function toggleMuteAudio() {
  //turn on / turn off music
  $("audio").prop("muted", !$("audio").prop("muted"));
  if ($("audio").prop("muted")) {
    //nếu bị muted thì xóa on thêm off
    $(".volume i").removeClass("fa-volume-up");
    $(".volume i").addClass("fa-volume-off");
  } else {
    $(".volume i").removeClass("fa-volume-off");
    $(".volume i").addClass("fa-volume-up");
  }
}

//chèn nhạc khi ảnh nền được cuộn
if ($("audio").attr("src") != "./forest.mp3") {
  $("audio").attr("src", "./forest.mp3");
}

function goHome() {
  moveToImage(".forest");
}

$(document).ready(function () {
  $(window).scroll(function () {
    $("li").removeClass("active");

    if (
      Math.abs($(window).scrollTop() - $("div.forest").offset().top) <
      $(window).height() / 2
    ) {
      if ($("audio").attr("src") != "./mp3/forest.mp3") {
        $("audio").attr("src", "./mp3/forest.mp3");
      }
      $("li.forest").addClass("active");
    } else if (
      Math.abs($(window).scrollTop() - $("div.eagle").offset().top) <
      $(window).height() / 2
    ) {
      if ($("audio").attr("src") != "./mp3/eagle.mp3") {
        $("audio").attr("src", "./mp3/eagle.mp3");
      }
      $("li.eagle").addClass("active");
    } else if (
      Math.abs($(window).scrollTop() - $("div.rhino").offset().top) <
      $(window).height() / 2
    ) {
      if ($("audio").attr("src") != "./mp3/rhino.mp3") {
        $("audio").attr("src", "./mp3/rhino.mp3");
      }
      $("li.rhino").addClass("active");
    } else if (
      Math.abs($(window).scrollTop() - $("div.owl").offset().top) <
      $(window).height() / 2
    ) {
      if ($("audio").attr("src") != "./mp3/owl.mp3") {
        $("audio").attr("src", "./mp3/owl.mp3");
      }
      $("li.owl").addClass("active");
    } else if (
      Math.abs($(window).scrollTop() - $("div.lion").offset().top) <
      $(window).height() / 2
    ) {
      if ($("audio").attr("src") != "./mp3/lion.mp3") {
        $("audio").attr("src", "./mp3/lion.mp3");
      }
      $("li.lion").addClass("active");
    } else if (
      Math.abs($(window).scrollTop() - $("div.bear").offset().top) <
      $(window).height() / 2
    ) {
      if ($("audio").attr("src") != "./mp3/bear.mp3") {
        $("audio").attr("src", "./mp3/bear.mp3");
      }
      $("li.bear").addClass("active");
    }
  });
});
