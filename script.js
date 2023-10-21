$(document).ready(function () {

  // Array will store buttons texts
  var initialButtonTextByUser = []; 

  // Have a loop to fetch the data we need to store in the array:
  $('.btn').each(function () {
    initialButtonTextByUser.push($(this).text());
  });

  $('.btn').on('click', function () {
    var $this = $(this);
    var text = $this.text().trim(); // Trim whitespace

    //Disable all the buttons
    $('.btn').prop('disabled', true);

    if (text === 'Cascading Style Sheets') {
      $this.text('CORRECT!');
      $this.css('background-color','green');
    }
    else {
      $this.text('INCORRECT!');
      $this.css('background-color','red');
    }
  });

  // Try again funcitonality using array data:
  $('#submit-btn').on('click', function () {
    $('.btn').text(function (index) {
      return initialButtonTextByUser[index];
    }).css('background-color', ''); // Apply css to reset colors of buttons
    $('.btn').prop('disabled', false); // enable all buttons when user click try again
  })

});

