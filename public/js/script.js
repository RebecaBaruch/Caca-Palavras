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

caca = [[0,1,1,1,1,1,1,1,0,1],
       [0,1,1,0,0,0,1,0,0,1],
       [0,1,1,0,1,1,1,1,0,1],
       [0,1,1,0,0,1,1,0,0,1],
       [0,1,1,0,0,1,1,0,0,1],
       [0,1,1,0,0,1,1,0,0,1],
       [1,0,0,0,0,1,1,0,0,0],
       [1,0,0,1,1,1,1,0,0,0],
       [1,0,0,0,0,1,0,0,0,0],
       [1,0,1,1,1,1,1,0,0,0]];


for(row = 0; row < 10; row++)
{   
    tr = document.createElement("tr");
    for(col = 0; col < 10; col++)
    {
        td = document.createElement("td");

        switch(caca[row][col])
        {
            case 1:
                td.style.background = "#4CB963";
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