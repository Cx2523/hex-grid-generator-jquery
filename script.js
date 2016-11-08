$(document).ready(function(){

  hexGridSquare(".hex-grid-1", 35, 50, 45, "yellow",4);

  // $('.hexagon-1').on('mouseenter', spin);
  });

function hexGridSquare(divName, hexSize, rows, cols, color, offset){
  //create div grid
  var shapeId = divName.slice(9, divName.length);
  var classNames = {
    gridRow:"grid-row" + shapeId,
    hexagon:"hexagon" + shapeId
  };

  $(divName).append(function(){
    var htmlStringForRows = "";
    for(var i = 0; i < rows; i++){
      htmlStringForRows = htmlStringForRows + '<div class=' + classNames.gridRow + '></div>';
    }
    return htmlStringForRows;
  });

  $('.' + classNames.gridRow).append(function(){
    var htmlStringForCols = "";
    for(var i = 0; i < cols; i++){
      htmlStringForCols = htmlStringForCols + '<div class=' + classNames.hexagon + '></div>';
    }
    return htmlStringForCols;
  });

  //draw the hexagons
  createHexagons(classNames.hexagon, hexSize, color);



  //alignment
  $(divName + ' .' + classNames.gridRow).css({
    "margin-bottom": - .98 * hexSize / Math.sqrt(12) + "px"
  });
  $(divName + ' .' + classNames.gridRow + ':odd').css({
    "margin-left": (hexSize + .1 * hexSize / Math.sqrt(12)) / 2 + "px"
  });
  $('.' + classNames.hexagon).css({
    "margin-right": .1 * hexSize / Math.sqrt(12) + "px"
  });


}


function createHexagons(hexClass, width, color){
    //creates a regular hexagon from any div that has class="hexagon"
    //dimensions are based on the width parameter which is the minimal diameter the hexagon
    //https://en.wikipedia.org/wiki/Hexagon
    var shapeId = hexClass.slice(7, hexClass.length);

    var classNames = {
        hexagon: 'hexagon' + shapeId,
        hexMiddle: 'hex-middle' + shapeId,
        hexTop: 'hex-top' + shapeId,
        hexBottom: 'hex-bottom' + shapeId
    };

    $('.' + classNames.hexagon).append(
      '<div class=' + classNames.hexTop + '></div><div class='+ classNames.hexMiddle +'></div><div class='+classNames.hexBottom+'></div>'
    ).css({
      "width":width + "px",
      "display":"inline-block"
    });
    $('.' + classNames.hexMiddle).css({
      "width": "inherit",
      "height": width / Math.sqrt(3) + "px", //for reg hex height = width/sqrt(3)
      "background-color":color
    });
    $('.' + classNames.hexTop).css({
      "border-left": width / 2 + "px solid transparent",
      "border-right": width / 2 + "px solid transparent",
      "border-bottom": width / Math.sqrt(12) + "px solid " + color //for reg hex height = width/sqrt(12)
    });
    $('.' + classNames.hexBottom).css({
      "border-left": width / 2 + "px solid transparent",
      "border-right": width / 2 + "px solid transparent",
      "border-top": width / Math.sqrt(12) + "px solid " + color //for reg hex height = width/sqrt(12)
    });
  }
