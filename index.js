console.log("----------------------------Task1------------------------------")
let p = document.createElement("p")
p.innerText="Welcome to JavaScript DOM manipulation"
console.log(p)
document.body.appendChild(p)
p.className= "p"

console.log("------------------------------------Task2------------------------------------")
let div = document.createElement("div")
let h1 = document.createElement("h1")
let h2 = document.createElement("h2")
console.log(div)
div.className="task2"
h1.className="task2.1"
h2.className="task2.2"
h1.innerText="Gunturu"
h2.innerText="Srinuvasulu"
div.append(h1, h2)
document.body.appendChild(div)


console.log("--------------------------task 3-----------------------------")
let ul = document.createElement("ul")
let li = document.createElement("li")
let le = document.createElement("li")
let sa = document.createElement("ul")
let la = document.createElement("li")
let lb = document.createElement("li")
let sc = document.createElement("ul")
let ld = document.createElement("li")
let lf = document.createElement("li")
ul.className="task3"
sa.className="task31"
sc.className="task32"
ul.innerText="Food"
le.innerText="Biryani"
li.innerText="Noodles"
sa.innerText="Phones"
la.innerText="Realme"
lb.innerText="One plus"
sc.innerText="Vehicles"
ld.innerText="Car"
lf.innerText="Bike"
document.body.appendChild(ul)
ul.append(li,le)
document.body.appendChild(sa)
sa.append(la,lb)
document.body.appendChild(sc)
sc.append(ld,lf)
console.log(ul)

console.log("----------------------------Task 4--------------------------------")

let table = document.createElement("table");
let thead = document.createElement("thead");
let trHead = document.createElement("tr");
let headings =["id","Name","village","state"]
for (let sai of headings) {
    let th = document.createElement("th")
    th.innerText= sai
    trHead.appendChild(th)
}
let tr = document.createElement("tr")
let data = ["1","Srinuvasulu","Nellore","A.P"]
for (let set1 of data){
    let td =document.createElement("td")
    td.innerText=set1
    tr.appendChild(td)
}
let tr1 = document.createElement("tr")
let data1 = ["2","Vamsi","Kadapa","A.P"]
for (let set1 of data1){
    let td =document.createElement("td")
    td.innerText=set1
    tr1.appendChild(td)
}
thead.appendChild(trHead)
table.append(thead, tr,tr1 )
document.body.appendChild(table)
console.log(table);