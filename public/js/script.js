matriz = new Array();
caca = new Array();

const table = document.querySelector(".table");

matriz = [['B','M','R','E','B','E','C','A','A','M'],
          ['E','A','O','E','N','J','N','A','R','A'],
          ['K','T','B','D','F','R','E','D','E','Y'],
          ['U','E','S','I','W','G','Y','E','K','A'],
          ['L','U','O','I','X','U','M','R','L','R'],
          ['J','S','N','H','E','S','A','Y','A','A'],
          ['L','R','A','B','T','T','R','J','W','P'],
          ['U','T','B','R','I','A','N','M','Y','R'],
          ['I','U','C','A','X','V','D','Q','K','R'],
          ['Z','O','R','A','M','O','N','K','S','R']];

caca = [[0,5,8,8,8,8,8,8,0,4],
       [0,5,3,0,0,0,6,0,0,4],
       [0,5,3,0,7,7,6,7,0,4],
       [0,5,3,0,0,1,6,0,0,4],
       [0,5,3,0,0,1,6,0,0,4],
       [0,5,0,0,0,1,6,0,0,4],
       [2,0,0,0,0,1,6,0,0,0],
       [2,0,0,10,10,10,10,0,0,0],
       [2,0,0,0,0,1,0,0,0,0],
       [2,0,9,9,9,1,9,0,0,0]];


for(row = 0; row < 10; row++)
{   
    tr = document.createElement("tr");
    for(col = 0; col < 10; col++)
    {
        td = document.createElement("td");

        switch(caca[row][col])
        {
            case 1:
                td.style.background = "red";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            case 2:
                td.style.background = "#8a00d4";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            case 3:
                td.style.background = "#d527b7";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            case 4:
                td.style.background = "#f9c46b";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            case 5:
                td.style.background = "#454d66";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            case 6:
                td.style.background = "#58b368";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            case 7:
                td.style.background = "#343090";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            case 8:
                td.style.background = "#ffff00";
                td.style.color = "black";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            case 9:
                td.style.background = "#99ff00";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            case 10:
                td.style.background = "#ffcc00";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            default:
                td.append(matriz[row][col]);
                tr.append(td);
            break; 
        }
    }

    table.appendChild(tr);
}