// Select color input

//colorPickerVal = $('#colorPicker').val()
//console.log(colorPickerVal)
//$('table tr td').on('click',function(){
//        $(this).css('background-color',colorPickerVal)
//    })
$('#colorPicker').on('change',function(){
    colorPickerVal = $(this).val()
    $('table tr td').on('click',function(){
        $(this).css('background-color',colorPickerVal)
    })
})


// Select size input
InputHeight = $('#inputHeight').val()
$('#sizePicker #inputHeight').on('change',function(){
    
     InputHeight = $(this).val()
})

InputWidth = $('#inputWidth').val()
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
