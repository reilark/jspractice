//alert("Steady pace wins the race.")


function printDate() {
    let d = new DateTime();
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var hour = d.getHours();
    var min = d.getMinutes();
    var newDiv = createElement('div');
    innerHTML = year + '/' + month + '/' + date + ' || ' + hour + ':' + min;
}
setInterval(printDate, 1000);

let jsarticle = document.getElementById("js")
jsarticle.setAttribute('class', 'thisisaclass')
jsarticle.setAttribute('name', 'blah')
//jsarticle.innerHTML = "<div>this is a div</div>"

let somediv = document.createElement('p')
somediv.innerHTML = 'This is a new paragraph'
jsarticle.appendChild(somediv)


console.log(jsarticle)
