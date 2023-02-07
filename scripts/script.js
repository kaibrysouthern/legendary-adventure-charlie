$(function () {
  console.log("bring the wow");

  // $("#draggable").draggable();

  var $drag_counter = $("#event-drag"),
    counts = 0;

  $("#resetGame").click(function () {
    console.log("clicked button");
    counts = 0;
    $("span.count").text(counts);
    $("#gameOutput").text("");
    $("img").attr(
      "src",
      "https://pm1.narvii.com/7036/0b9c6a429b8f8ce671d7aac7608506ac6d40f744r1-1242-1234v2_hq.jpg"
    );
  });

  $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  });

  function updateCounterStatus($event_counter, new_count) {
    //todo: if more than 174, then wow. if not, no wow.

    var game_msg = "";

    if (new_count < 174) {
      game_msg = "Uh oh, keep trying!";
    } else if (new_count == 174) {
      game_msg = "SUPER secret game winner!";
    } else {
      game_msg = "You alright with me!";
      $("img").attr(
        "src",
        "https://user-images.githubusercontent.com/22795694/215548035-c30c0f77-24f0-4982-a2a8-cbe231ef1ecd.jpeg"
      );
    }

    $("#gameOutput").text(game_msg);
    $("span.count", $event_counter).text(new_count);
  }
});
