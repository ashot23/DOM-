window.onload = function () {
    let width, height, row, column

    function inputs(name, type) {
        name = document.createElement('input');
        document.body.appendChild(name);
        name.setAttribute('id', type);
        name.setAttribute('type', 'text');
        name.placeholder = type
        name.style.margin = '20px';
    }
    inputs(width, 'width')
    inputs(height, 'height')
    inputs(row, 'row')
    inputs(column, 'column')

    var btn = document.createElement('button');
    document.body.append(btn);
    btn.textContent = 'Creat Table';
    btn.style.marginLeft = '2%';

    btn.onclick = function () {
        let myColor = '#000000'

        let widthVal = document.getElementById('width').value
        let heightVal = document.getElementById('height').value
        let rowVal = document.getElementById('row').value // 50
        let columnVal = document.getElementById('column').value

        let cl = document.createElement('input');
        document.body.appendChild(cl);
        cl.setAttribute('id', 'color');
        cl.setAttribute('type', 'color');
        cl.style.margin = '20px';

        cl.onchange= function (event) {
           
            
           
            myColor = event.target.value
            
            console.log(myColor)
        }

        var eraser = document.createElement('img');
        document.body.append(eraser);
        eraser.src = "eraser.png";
        eraser.style.height = "20px";
        eraser.style.width = "20px";
        eraser.style.marginLeft = '2%';

        eraser.onclick = function () {
            myColor = 'transparent'
        }

        var tbl = document.createElement('table');
        tbl.style.border = '2px solid red';
        tbl.style.borderCollapse = 'collapse'
        var tBody = document.createElement('tbody');
        tbl.append(tBody)
        document.body.appendChild(tbl);

        for (let i = 0; i < rowVal; i++) {
            let row = document.createElement('tr')
            for (let j = 0; j < columnVal; j++) {
                let cell = document.createElement('td')
                cell.style.height = heightVal + 'px'
                cell.style.width = widthVal + 'px'
                cell.onmouseover = function () {
                    var r = Math.floor(Math.random() * 255)
                    var g = Math.floor(Math.random() * 255)
                    var b = Math.floor(Math.random() * 255)


                   this.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")"
                   setTimeout(() => {
                    this.style.backgroundColor = 'transparent'
                   }, 400);
                }
                row.appendChild(cell)
               
            }
            tBody.appendChild(row)
        }
    }

}





