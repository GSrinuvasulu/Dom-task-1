console.log("--------------Task 5-----------")
let div = document.createElement("div");
let img = document.createElement("img");
let p = document.createElement("p");
div.className = "container";
img.src = "https://i.pinimg.com/236x/e3/7c/60/e37c60d35aa7bcbe0169d856258a7656.jpg";
img.className = "im";
p.innerText = "Mahesh Babu";
div.append(img, p);
document.body.appendChild(div);
console.log(div)

console.log("----------------Task 6------------")

let ol = document.createElement("ol")
let li = document.createElement("li")
let le = document.createElement("li")
let sa = document.createElement("ol")
let la = document.createElement("li")
let lb = document.createElement("li")
let sc = document.createElement("ol")
let ld = document.createElement("li")
let lf = document.createElement("li")
ol.className="task6"
sa.className="task61"
sc.className="task62"
ol.innerText="Food"
le.innerText="Biryani"
li.innerText="Veg Biryani"
sa.innerText="Movies"
la.innerText="Maharshi"
lb.innerText="Bharat Ane Nenu"
sc.innerText="Cars"
ld.innerText="Suzuki"
lf.innerText="Mahindra"
document.body.appendChild(ol)
ol.append(li,le)
document.body.appendChild(sa)
sa.append(la,lb)
document.body.appendChild(sc)
sc.append(ld,lf)
console.log(ol)

console.log("--------------------------Task 7------------")
let section = document.createElement("section")
let h11= document.createElement("h1")
let h12= document.createElement("p")
h11.className="h11"
h12.className="h12"
section.innerText="My Fav Hero"
h11.innerText="Mahesh Babu"
h12.innerText="Ghattamaneni Mahesh Babu is an Indian actor, film producer, media personality, and philanthropist who works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and has featured in Forbes India's Celebrity 100 list since 2012."
section.append(h11, h12)
document.body.appendChild(section)
console.log(section)

console.log("-------------Task 8-------------")
let dl = document.createElement("dl")
let dt = document.createElement("dt")
let dd = document.createElement("dd")
let dt1 = document.createElement("dt")
let dd1 = document.createElement("dd")
dt.className="dt1"
dt1.className="dt2"
dt.innerText="Coffee"
dd.innerText="Black hot drink"
dt1.innerText="Milk"
dd1.innerText="White cold drink"
dt.appendChild(dd)
dt1.appendChild(dd1)
dl.append(dt, dt1)
document.body.appendChild(dl)
console.log(dl)

console.log("----------------task 9--------------")
let div1= document.createElement("div")
let block= document.createElement("blockquote")
div1.className="task9"
block.className="task91"
block.innerText="For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally."
div1.append(block)
document.body.appendChild(div1)
console.log(div1)


console.log("--------------------task 10--------------")
let div2 = document.createElement("div")
let p1 = document.createElement("p")
let p3 = document.createElement("p")
p1.innerText="My First name is Gunturu"
p3.innerText="My last name is Srinuvasulu"
div2.className="div2"
p1.className="p1"
p3.className="p3"
div2.append(p1, p3)
document.body.appendChild(div2)
console.log(div2)