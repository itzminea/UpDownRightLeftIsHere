const cells = {
    cell1:document.getElementById('cell1'),
    cell2:document.getElementById('cell2'),
    cell3:document.getElementById('cell3'),
    cell4:document.getElementById('cell4'),
    cell5:document.getElementById('cell5'),
    cell6:document.getElementById('cell6'),
    cell7:document.getElementById('cell7'),
    cell9:document.getElementById('cell9'),
    cell10:document.getElementById('cell10'),
    cell11:document.getElementById('cell11'),
    cell12:document.getElementById('cell12'),
    cell13:document.getElementById('cell13'),
    cell14:document.getElementById('cell14'),
    cell15:document.getElementById('cell15'),
    cell16:document.getElementById('cell16'),
    cell17:document.getElementById('cell17'),
    cell18:document.getElementById('cell18'),
    cell19:document.getElementById('cell19'),
    cell20:document.getElementById('cell20'),
    cell21:document.getElementById('cell21'),
    cell22:document.getElementById('cell22'),
    cell23:document.getElementById('cell23'),
    cell24:document.getElementById('cell24'),
    cell8:document.getElementById('cell8')
};
const body = document.body;

let randomNumberGenerator = Math.floor(Math.random() * 23) + 1;

movementMethod();

function movementMethod() {
    switch (randomNumberGenerator) {
        case 1:
            cells.cell1.style.backgroundColor = '#63372C';
            break;
        case 2:
            cells.cell2.style.backgroundColor = '#63372C';
            break;
        case 3:
            cells.cell3.style.backgroundColor = '#63372C';
            break;
        case 4:
            cells.cell4.style.backgroundColor = '#63372C';
            break;
        case 5:
            cells.cell5.style.backgroundColor = '#63372C';
            break;
        case 6:
            cells.cell6.style.backgroundColor = '#63372C';
            break;
        case 7:
            cells.cell7.style.backgroundColor = '#63372C';
            break;
        case 8:
            cells.cell8.style.backgroundColor = '#63372C';
            break;
        case 9:
            cells.cell9.style.backgroundColor = '#63372C';
            break;
        case 10:
            cells.cell10.style.backgroundColor = '#63372C';
            break;
        case 11:
            cells.cell11.style.backgroundColor = '#63372C';
            break;
        case 12:
            cells.cell12.style.backgroundColor = '#63372C';
            break;
        case 13:
            cells.cell13.style.backgroundColor = '#63372C';
            break;
        case 14:
            cells.cell14.style.backgroundColor = '#63372C';
            break;
        case 15:
            cells.cell15.style.backgroundColor = '#63372C';
            break;
        case 16:
            cells.cell16.style.backgroundColor = '#63372C';
            break;
        case 17:
            cells.cell17.style.backgroundColor = '#63372C';
            break;
        case 18:
            cells.cell18.style.backgroundColor = '#63372C';
            break;
        case 19:
            cells.cell19.style.backgroundColor = '#63372C';
            break;
        case 20:
            cells.cell20.style.backgroundColor = '#63372C';
            break;
        case 21:
            cells.cell21.style.backgroundColor = '#63372C';
            break;
        case 22:
            cells.cell22.style.backgroundColor = '#63372C';
            break;
        case 23:
            cells.cell23.style.backgroundColor = '#63372C';
            break;
        case 24:
            cells.cell24.style.backgroundColor = '#63372C';
            break;
        default:
    }
}

body.addEventListener("keydown", function(event) {
    const key = event.key;
    
    switch (event.key) {
        case "ArrowLeft":
            goOneCellToLeft();
            break;
        case "ArrowRight":
            goOneCellToRight();
            break;
        case "ArrowUp":
            goOneCellToUp();
            break;
        case "ArrowDown":
            goOneCellToDown();
            break;
    }
});

function goOneCellToDown() {
    
    if (randomNumberGenerator >= 1 || randomNumberGenerator <= 24) {
        if (randomNumberGenerator === 24 || 
            randomNumberGenerator === 23 || 
            randomNumberGenerator === 22 || 
            randomNumberGenerator === 21) {
        
            randomNumberGenerator -= 20;
    
            clearDownBgColor();
        } else {
            
            randomNumberGenerator += 4;
            
            clearDownBgColor();
        }
    } else {
        clearDownBgColor();
    }

}

function goOneCellToUp() {

    if (randomNumberGenerator >= 1 || 
        randomNumberGenerator <= 24) {
        if (randomNumberGenerator === 1 || 
            randomNumberGenerator === 2 || 
            randomNumberGenerator === 3 || 
            randomNumberGenerator === 4) {
        
            randomNumberGenerator += 20;
                
            clearUpBgColor();
        } else {
            
            randomNumberGenerator -= 4;
            
            clearUpBgColor();
        }
    } else {
        clearUpBgColor();
    }

}

function goOneCellToLeft() {

    if (randomNumberGenerator >= 1 || 
        randomNumberGenerator <= 24) {
        if (randomNumberGenerator === 1 || 
            randomNumberGenerator === 5 || 
            randomNumberGenerator === 9 || 
            randomNumberGenerator === 13 || 
            randomNumberGenerator === 17 || 
            randomNumberGenerator === 21) {

            randomNumberGenerator += 3;
    
            clearLeftBgColor();
    
        } else {

            randomNumberGenerator -= 1;
            

            clearLeftBgColor();

        }
    } else {
        clearLeftBgColor();
    }

}

function goOneCellToRight() {

    if (randomNumberGenerator >= 1 || 
        randomNumberGenerator <= 24) {
        if (randomNumberGenerator === 4 || 
            randomNumberGenerator === 12 || 
            randomNumberGenerator === 16 || 
            randomNumberGenerator === 20 || 
            randomNumberGenerator === 24 || 
            randomNumberGenerator === 8) {

            randomNumberGenerator -= 3;
    
            clearRightBgColor();
    
        } else {

            randomNumberGenerator += 1;
            
            
            clearRightBgColor();

        }
    } else {
        clearRightBgColor();
    }
    
}

function clearUpBgColor() {

    let clearUpBgColor;

    if (randomNumberGenerator === 24 || 
        randomNumberGenerator === 23 || 
        randomNumberGenerator === 22 || 
        randomNumberGenerator === 21) {
            
            clearUpBgColor = randomNumberGenerator - 20;

    } else {
        clearUpBgColor = randomNumberGenerator + 4;
    }
    
    switch (clearUpBgColor) {
        case 1:
            cells.cell1.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 2:
            cells.cell2.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 3:
            cells.cell3.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 4:
            cells.cell4.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 5:
            cells.cell5.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 6:
            cells.cell6.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 7:
            cells.cell7.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 8:
            cells.cell8.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 9:
            cells.cell9.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 10:
            cells.cell10.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 11:
            cells.cell11.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 12:
            cells.cell12.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 13:
            cells.cell13.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 14:
            cells.cell14.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 15:
            cells.cell15.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 16:
            cells.cell16.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 17:
            cells.cell17.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 18:
            cells.cell18.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 19:
            cells.cell19.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 20:
            cells.cell20.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 21:
            cells.cell21.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 22:
            cells.cell22.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 23:
            cells.cell23.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 24:
            cells.cell24.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        default:
    }

}

function clearDownBgColor() {
    
    let clearDownBgColor;

    if (randomNumberGenerator === 1 || 
        randomNumberGenerator === 2 || 
        randomNumberGenerator === 3 || 
        randomNumberGenerator === 4) {
            
            clearDownBgColor = randomNumberGenerator + 20;

    } else {
        clearDownBgColor = randomNumberGenerator - 4;
    }

  
    
    switch (clearDownBgColor) {
        case 1:
            cells.cell1.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 2:
            cells.cell2.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 3:
            cells.cell3.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 4:
            cells.cell4.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 5:
            cells.cell5.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 6:
            cells.cell6.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 7:
            cells.cell7.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 8:
            cells.cell8.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 9:
            cells.cell9.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 10:
            cells.cell10.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 11:
            cells.cell11.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 12:
            cells.cell12.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 13:
            cells.cell13.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 14:
            cells.cell14.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 15:
            cells.cell15.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 16:
            cells.cell16.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 17:
            cells.cell17.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 18:
            cells.cell18.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 19:
            cells.cell19.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 20:
            cells.cell20.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 21:
            cells.cell21.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 22:
            cells.cell22.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 23:
            cells.cell23.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 24:
            cells.cell24.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        default:
    }

}

function clearLeftBgColor() {

    let clearLeftBgColor;

    if (randomNumberGenerator === 4 || 
        randomNumberGenerator === 8 || 
        randomNumberGenerator === 12 || 
        randomNumberGenerator === 16 || 
        randomNumberGenerator === 20 || 
        randomNumberGenerator === 24) {
            
        clearLeftBgColor = randomNumberGenerator - 3;

    } else {
        clearLeftBgColor = randomNumberGenerator + 1;
    }


    
    switch (clearLeftBgColor) {
        case 1:
            cells.cell1.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 2:
            cells.cell2.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 3:
            cells.cell3.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 4:
            cells.cell4.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 5:
            cells.cell5.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 6:
            cells.cell6.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 7:
            cells.cell7.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 8:
            cells.cell8.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 9:
            cells.cell9.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 10:
            cells.cell10.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 11:
            cells.cell11.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 12:
            cells.cell12.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 13:
            cells.cell13.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 14:
            cells.cell14.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 15:
            cells.cell15.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 16:
            cells.cell16.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 17:
            cells.cell17.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 18:
            cells.cell18.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 19:
            cells.cell19.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 20:
            cells.cell20.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 21:
            cells.cell21.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 22:
            cells.cell22.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 23:
            cells.cell23.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 24:
            cells.cell24.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        default:
    }

}

function clearRightBgColor() {

    let clearRightBgColor;

    if (randomNumberGenerator === 1 || 
        randomNumberGenerator === 5 || 
        randomNumberGenerator === 9 || 
        randomNumberGenerator === 13 || 
        randomNumberGenerator === 17 || 
        randomNumberGenerator === 21) {
            
        clearRightBgColor = randomNumberGenerator + 3;

    } else {
        clearRightBgColor = randomNumberGenerator - 1;
    }


    
    switch (clearRightBgColor) {
        case 1:
            cells.cell1.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 2:
            cells.cell2.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 3:
            cells.cell3.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 4:
            cells.cell4.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 5:
            cells.cell5.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 6:
            cells.cell6.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 7:
            cells.cell7.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 8:
            cells.cell8.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 9:
            cells.cell9.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 10:
            cells.cell10.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 11:
            cells.cell11.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 12:
            cells.cell12.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 13:
            cells.cell13.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 14:
            cells.cell14.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 15:
            cells.cell15.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 16:
            cells.cell16.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 17:
            cells.cell17.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 18:
            cells.cell18.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 19:
            cells.cell19.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 20:
            cells.cell20.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 21:
            cells.cell21.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 22:
            cells.cell22.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 23:
            cells.cell23.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        case 24:
            cells.cell24.style.backgroundColor = '#FE7F2D';
            movementMethod();
            break;
        default:
    }
}