
window.onload = function () {

    var chl = document.getElementById('click')
    var ig = document.createElement('img')
    ig.setAttribute('src', './img/icon.png')
    ig.setAttribute('class', 'img')
    ig.setAttribute('title', 'Create Puzzle')
    chl.appendChild(ig)


    var ruber = document.createElement('img')
    ruber.setAttribute('src', './img/icon1.png')
    ruber.setAttribute('class', 'ruber')
    ruber.setAttribute('title', 'Delet to layer')
    chl.appendChild(ruber)


    var bd = document.getElementsByTagName('body')
    bd[0].style.backgroundColor = 'darkgoldenrod'
    // ig.addEventListener('click',table)
    ig.onclick = function () {
        
        table()
        this.onclick = "none"  //none
    }

    ruber.onclick = function () {

        var tf = document.getElementsByTagName('td')
        var d1 = document.getElementById('main')
        d1.style.cursor = "url('img/rb.png'),auto"


        // console.log(tf)

        for (let i = 0; i < tf.length; i++) {
            tf[i].onmouseover = function name() {
                this.style.backgroundColor = 'transparent'

            }



        }





    }


}



var img = ['./img/im1.jpg', './img/im2.jpg', './img/im3.jpg', './img/im4.jpg', './img/im5.jpg', './img/im6.jpg', './img/im7.jpg', './img/im8.jpg', './img/im9.jpg']

function table() {
    var main = document.getElementById('main')


    function random_item(items) {

        return items[Math.floor(Math.random() * items.length)];

    }

    // var color = []

    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)


    var tbl = document.createElement('table')
    main.appendChild(tbl)
    tbl.style.borderCollapse = 'collapse'
    tbl.style.backgroundImage = "url(" + random_item(img) + ")"
    tbl.style.backgroundSize = 'cover'
    tbl.style.margin = 'auto'
    var tbd = document.createElement('tbody')

    tbl.appendChild(tbd)
    var m = 10
    var n = 10
    for (let i = 0; i < m; i++) {
        var tr = document.createElement('tr')
        tbd.appendChild(tr)

        for (let j = 0; j < n; j++) {
            var td = document.createElement('td')
            tr.appendChild(td)
            td.style.width = 50 + 'px'
            td.style.height = 50 + 'px'
            td.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")"



        }
    }
    tbl.onmouseover = function mouse() {
        console.log(window.onkeypress)
        var tf = document.getElementsByTagName('td')
        //ես մասի վրա 12 ժամ չարչարվեցի ու հասկացա որ սրանից ճիշտը չկա ))*
        if (tf[tf.length - 1].style.backgroundColor == 'transparent' && tf[0].style.backgroundColor == 'transparent' && tf[20].style.backgroundColor == 'transparent' && tf[tf.length / 2].style.backgroundColor == 'transparent' && tf[30].style.backgroundColor == 'transparent' && tf[50].style.backgroundColor == 'transparent' && tf[60].style.backgroundColor == 'transparent' && tf[40].style.backgroundColor == 'transparent' && tf[70].style.backgroundColor == 'transparent' && tf[80].style.backgroundColor == 'transparent' && tf[90].style.backgroundColor == 'transparent' && tf[10].style.backgroundColor == 'transparent' && tf[15].style.backgroundColor == 'transparent' && tf[5].style.backgroundColor == 'transparent' && tf[85].style.backgroundColor == 'transparent' && tf[35].style.backgroundColor == 'transparent' && tf[55].style.backgroundColor == 'transparent' && tf[75].style.backgroundColor == 'transparent' && tf[95].style.backgroundColor == 'transparent' && tf[99].style.backgroundColor == 'transparent' && tf[4].style.backgroundColor == 'transparent' && tf[14].style.backgroundColor == 'transparent' && tf[54].style.backgroundColor == 'transparent' && tf[33].style.backgroundColor == 'transparent' && tf[46].style.backgroundColor == 'transparent' && tf[77].style.backgroundColor == 'transparent' && tf[88].style.backgroundColor == 'transparent' && tf[96].style.backgroundColor == 'transparent' && tf[93].style.backgroundColor == 'transparent' && tf[3].style.backgroundColor == 'transparent' && tf[23].style.backgroundColor == 'transparent' && tf[22].style.backgroundColor == 'transparent' && tf[27].style.backgroundColor == 'transparent' && tf[29].style.backgroundColor == 'transparent' && tf[6].style.backgroundColor == 'transparent' && tf[7].style.backgroundColor == 'transparent' && tf[2].style.backgroundColor == 'transparent' && tf[1].style.backgroundColor == 'transparent' && tf[17].style.backgroundColor == 'transparent' && tf[14].style.backgroundColor == 'transparent' && tf[24].style.backgroundColor == 'transparent' && tf[48].style.backgroundColor == 'transparent'
        ) {

            var hdiv = document.getElementById('h1')
            var h1 = document.createElement('h1')
            hdiv.appendChild(h1)
            h1.setAttribute('align', 'center')
            h1.setAttribute('class', 'h1')
            h1.innerText = 'Ապրես !!!'
            var chl = document.getElementById('click')
            var refresh = document.createElement('img')

            refresh.setAttribute('src', './img/icon2.png')
            refresh.setAttribute('class', 'refresh')
            refresh.setAttribute('title', 'refresh')
            chl.appendChild(refresh)
            refresh.onclick = function () {


            
                var r = Math.floor(Math.random() * 255)
                var g = Math.floor(Math.random() * 255)
                var b = Math.floor(Math.random() * 255)


                for (let l = 0; l < tf.length; l++) {
                    tf[l].style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")"

                }
                tbl.style.backgroundImage = "url(" + random_item(img) + ")"
                hdiv.removeChild(h1)


            }

            
            //    console.log('Վերջապեեես')
            this.onmouseover = 'none'

            //    var refresh = document.getElementsByClassName('refresh')

        }
    }





}









