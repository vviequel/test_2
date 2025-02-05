
async function getResponce() {
    let responce = await fetch("items.json")
    console.log("responce:\n", responce, "\n /responce: \n")
    let content = await responce.text()
    console.log("await responce.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 9)
    console.log("content.slice(0, 9)", content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }
    
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 365px; border-radius: 7px;" class="d-flex flex-column m-1 p-4  bg-body">
        <img style="width: 330px; border-radius: 7px;" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title" style="margin-top: 10px; margin-bottom: 10px;" >${content[key].title} ${content[key].price} р.</h5>
        <p class="card-text">${content[key].description}</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendorcode}>
        <p class="card-text" >Добавить в корзину <input class="form-control" style="width: 150px; margin-top: 5px;" type="number" name="amount" value="0"></p>
        </li>
                `
    }
}
getResponce()