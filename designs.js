// Select color input
$('#colorPicker').on('change',function(){
    colorPickerVal = $(this).val()
    $('table tr td').on('click',function(){
        $(this).css('background-color',colorPickerVal)
        console.log(colorPickerVal)
    })
})


// Select size input
$('#sizePicker #inputHeight').on('change',function(){
    
     InputHeight = $(this).val()
})

$('#sizePicker #inputWidth').on('change',function(){
    
    InputWidth = $(this).val()
    
})


// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
}

$('input[type=submit]').on('click', function(e) {
    e.preventDefault()
    numOfRow = InputHeight;
    numOfCol = InputWidth;
    var myTable = $('#pixelCanvas');
    for (var i = 1; i <= numOfRow; i++) {
      let row = $('<tr></tr>');
      for (col = 1; col <= numOfCol; col++) {
        row.append('<td></td>');
      }
      myTable.append(row);
    }
    
});
