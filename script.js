$(document).ready(function(){

  hexGridSquare(".hex-grid", 300, 3, 4, "orange");
  //$('.hexagon').on('mouseenter', spin);


  });

//todo: divName would work for multiple sections but it will have to be identified back to the individual hexagon level
function hexGridSquare(divName, hexSize, rows, cols, color){
  //create div grid
  $(divName).append(function(){
    var htmlStringForRows = "";
    for(var i = 0; i < rows; i++){
      htmlStringForRows = htmlStringForRows + '<div class="grid-row"></div>';
    }
    return htmlStringForRows;
  });
  $('.grid-row').append(function(){
    var htmlStringForCols = "";
    for(var i = 0; i < cols; i++){
      htmlStringForCols = htmlStringForCols + '<div class="hexagon"></div>';
    }
    return htmlStringForCols;
  });

  //draw the hexagons
  createHexagons(hexSize, color);


  //alignment
  $('.hex-grid .grid-row').css({
    "margin-bottom": - .98 * hexSize / Math.sqrt(12) + "px"
  });
  $('.hex-grid .grid-row:odd').css({
    "margin-left": (hexSize + .1 * hexSize / Math.sqrt(12)) / 2 + "px"
  });
  $('.hexagon').css({
    "margin-right": .1 * hexSize / Math.sqrt(12) + "px"
  });


}


function createHexagons(width, color){
    //creates a regular hexagon from any div that has class="hexagon"
    //dimensions are based on the width parameter which is the minimal diameter the hexagon
    //https://en.wikipedia.org/wiki/Hexagon
    $('.hexagon').append(
      '<div class="hex-top"></div><div class="hex-middle"></div><div class="hex-bottom"></div>'
    ).css({
      "width":width + "px",
      "display":"inline-block"
    });
    $('.hex-middle').css({
      "width": "inherit",
      "height": width / Math.sqrt(3) + "px", //for reg hex height = width/sqrt(3)
      "background-color":color
    });
    $('.hex-top').css({
      "border-left": width / 2 + "px solid transparent",
      "border-right": width / 2 + "px solid transparent",
      "border-bottom": width / Math.sqrt(12) + "px solid " + color //for reg hex height = width/sqrt(12)
    });
    $('.hex-bottom').css({
      "border-left": width / 2 + "px solid transparent",
      "border-right": width / 2 + "px solid transparent",
      "border-top": width / Math.sqrt(12) + "px solid " + color //for reg hex height = width/sqrt(12)
    });
  }
