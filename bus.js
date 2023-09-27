const textt = document.querySelector("#textt");
const btn = document.querySelector("#btn1");
const h1 = document.querySelector("#output");
const reach = document.querySelector("#reach");
const timebtns = document.querySelector("#time");
const run_times = document.querySelector("#run_speed");
const more_haves = document.querySelector("#more_have");
const cclick = document.querySelector("#cclick");
const ccclick = document.querySelector("#ccclick");
const in_account = document.querySelector("#accs");
const out_account = document.querySelector("#acc");
const btn_account = document.querySelector("#accc");


btn.addEventListener("click",() =>{
    let invok = parseInt(textt.value)+5;
    h1.textContent = textt.value = '';
    console.log(invok);
    h1.textContent = invok;
}
);

timebtns.addEventListener("click",() =>{
    let butin = run_times.value; 
    let butin2 = more_haves.value;
    let add = parseInt(butin) +  parseInt(butin2) ;
    reach.textContent = add;
})

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create01";
    create.innerHTML = "<h1>Your select Place : Tiruvannamalai</h1>" ;
    dinamic.appendChild(create);
}
)

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>1). 7.00 Am to 10.00 Am</h3>" ;
    dinamic.appendChild(create);
}
)

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>2). 8.00 Am to 11.00 Am</h3>" ;
    dinamic.appendChild(create);
}
)

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>3). 8.30 Am to 11.25 Am</h3>" ;
    dinamic.appendChild(create);
}
)

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>4). 10.00 Am to 12.00 Pm</h3>" ;
    dinamic.appendChild(create);
}
)
cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = " <h4> 5). 10.00 Am to 1.00 Pm</h3>" ;
    dinamic.appendChild(create);
}
)
cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>6). 11.00 Am to 2.00 Pm</h3>" ;
    dinamic.appendChild(create);
}
)

btn_account.addEventListener("click",() =>{
    const news = in_account.value;
    out_account.textContent = in_account.value = '';
    console.log(news);
    out_account.textContent = news;
})

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create01";
    create.innerHTML = "<h1>Your select Place : Kanjipuram</h1>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>1). 6.00 Am to 8.00 Am</h3>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>2). 7.00 Am to 8.30 Am</h3>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>3). 8.00 Am to 8.30 Am</h3>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>4). 9.30 Am to 11.30 Am</h3>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>5). 2.00 Am to 12.30 Am</h3>" ;
    dinamic.appendChild(create);
}
)