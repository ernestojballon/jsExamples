/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

//Prints a Square shape 
function printSquare(height,character){
  for(let x = 0; x < height; x++){
      for(let y = 0; y < height; y++){
        process.stdout.write(character)
      }
      process.stdout.write('\n')
  }
  process.stdout.write('\n')
}
function printTriangle(height,character){
  let cut = height-1;
  for(let x = 0; x < height; x++){
      for(let y = 0; y < height-cut; y++){
        process.stdout.write(character)
      }
      cut--;
      process.stdout.write('\n')
  }
  process.stdout.write('\n')
}
function printDiamond(height,character){
  let start = Math.floor(height/2);
  let end = start;
  for(let x = 0; x < height; x++){
      for(let y = 0; y < height; y++){
        if(start<=y && y<=end ){
          process.stdout.write(character); 
        }else{
          process.stdout.write(" ");
        }
      }
      if(x<Math.floor(height/2)){
        start--;
        end++;
      }else{
        start++;
        end--;
      }process.stdout.write('\n')
  }
  process.stdout.write('\n')
}
function printShape(shape, height, character) {
  switch(shape){
    case "Square" : 
        printSquare(height,character);
        break;
    case "Triangle" : 
        printTriangle(height,character);
        break;
    case "Diamond" : 
        printDiamond(height,character);
        break;
    default:
        console.log(`I cant' do that figure yet`);
    
  }
}

printShape("Square", 3, "%");
printShape("Triangle", 3, "$");
printShape("Diamond", 5, "*");
printShape("Circle", 5, "*");