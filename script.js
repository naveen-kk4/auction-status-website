const prom = fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");
const container = document.getElementsByClassName("container")[0];
prom.then((response)=>{
    return response.json();
}).then((data)=>{
    setTimeout(()=>{
      renderData(data);
    },2000)
})
function renderData(data){
    data.forEach((obj)=>{
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<div class="top">
        <div class="right">
            <p class="${obj.status.toLowerCase()}">${obj.status}</p>
            <p id="caseNumber">${obj.caseNumber}</p>
        </div>
        <div class="left">
            <p id="date">${obj.date}</p>
        </div>
    </div>
    <div class="bottom">
        <div class="fromLocation">${obj.fromLocation}</div>
        <div class="toLocation">${obj.toLocation}</div>
        <div class="fare">${obj.fare}</div>
    </div>`;
    container.appendChild(card);
    })

}