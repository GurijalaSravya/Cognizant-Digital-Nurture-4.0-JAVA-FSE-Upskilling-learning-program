$(function() {
  const events = [
    { name: "React Meetup" },
    { name: "Vue Workshop" }
  ];
  events.forEach(event => {
    const $card = $(`<div class='event-card'>${event.name} <button id='registerBtn'>Register</button></div>`);
    $("#cards").append($card);
    $card.fadeIn();
  });
  $('#cards').on('click', '#registerBtn', function() {
    alert("Registered!");
    $(this).parent().fadeOut();
  });
});