/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
    
    let coords = [[0,0]];

    // Goes through each direction and creates new coordsinates
    for(let i = 0; i < s.length; i++){
        let x = coords[coords.length - 1][0];
        let y = coords[coords.length - 1][1];

        if(s[i] == "N"){
            y++;
        }else if(s[i] == "S"){
            y--;
        }else if(s[i] == "E"){
            x++;
        }else{
            x--;
        }
        
        let temp = [x,y];

        // Checks if coordinates have been crossed before
        for(let j = 0; j < coords.length; j++){
            if(coords[j][0] == temp[0] && coords[j][1] == temp[1]){
                return true;
            }
        }
        coords.push(temp);

    }

    return false;


};