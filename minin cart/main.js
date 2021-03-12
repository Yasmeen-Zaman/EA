//window.onload = doShowAll();
window.onload = localStorage.removeItem("cartList");
//storing array in localStorage
let obj = {}
const items = [
    {
        itmId: 1,
        name: 'Oranges, pulpy and shiny',
        price: 6.95,
        size: 10,
        quantity: '33',
        itemImg: 'https://source.unsplash.com/200x150/weekly?fruit,banana'
    },
    {
        itmId: 2,
        name: 'Shampoo, a treat for hair',
        price: 26.00,
        size: 300,
        quantity: '21',
        itemImg: 'https://source.unsplash.com/200x150/weekly?shampoo'
    },
    {
        itmId: 3,
        name: 'Hair Oil, say bye to dandruf',
        price: 20.55,
        size: 250,
        quantity: '36',
        itemImg: 'https://source.unsplash.com/200x150/weekly?oil'
    },
    {
        itmId: 4,
        name: 'Dounut, finger licking and creamy',
        price: 62.00,
        size: 3,
        quantity: '15',
        itemImg: 'https://source.unsplash.com/200x150/weekly?chocolate,dairymilk'
    },
    {
        itmId: 5,
        name: 'Mugs, a delightfull gift for loved ones',
        price: 62.90,
        size: 2,
        quantity: '29',
        itemImg: 'https://source.unsplash.com/200x150/weekly?chocolate,perk'
    },
    {
        itmId: 6,
        name: 'Cup, pinky for girls on the go',
        price: 44.95,
        size: 2,
        quantity: '50',
        itemImg: 'https://source.unsplash.com/200x150/weekly?cup,mug'
    }
]

let count = 0;

localStorage.setItem("items", JSON.stringify(items)); //store colors
var storedItems = JSON.parse(localStorage.getItem("items")); //get them back
console.log(storedItems);

var container = document.getElementById("itemList");
for (let i = 0; i < items.length; i++) {
    // special offer tag
    var tag = document.createElement("div");
    tag.className = 'bg-secondary';
    tag.classList.add("mx-5")
    tag.innerHTML = "Special Offer";
    tag.setAttribute("style", "position: absolute; margin-top: 5px; width: 100px;text-align:center; color: white;");

    // button image
    var likeImage = document.createElement("img");
    likeImage.setAttribute("style", "text-align:center; width: 15px; height: 15px; margin-left: -6px; margin-top: -15px")
    likeImage.src = 'heart.png';

    var addImage = document.createElement("img");
    addImage.setAttribute("style", "text-align:center; width: 15px; height: 15px; margin-left: -6px; margin-top: -15px")
    addImage.src = 'plus.png';

    var minusImage = document.createElement("img");
    minusImage.setAttribute("style", "text-align:center; width: 15px; height: 15px; margin-left: -6px; margin-top: -15px")
    minusImage.src = 'minus.png';

    // creating like button
    var like = document.createElement("button");
    like.id = "like_" + i
    like.className = 'btn';
    like.classList.add('btn-warning');
    like.classList.add('btn-sm');
    like.setAttribute("style", "position: absolute; text-align:center; width: 20px; height: 20px; float: left");
    like.appendChild(likeImage);

    // create add button
    var add = document.createElement("button");
    add.id = "add_" + i;
    add.className = 'btn';
    add.classList.add('btn-primary');
    add.classList.add('btn-sm');
    add.classList.add('add-to-cart');
    add.setAttribute("style", "position: relative; text-align:center; width: 20px; height: 20px; float: right");
    add.appendChild(addImage);
    add.setAttribute('onclick', 'addItemsInTable(' + i + ')');

    // create subtract button
    var minus = document.createElement("button");
    minus.id = "sub_" + i;
    minus.className = 'btn';
    minus.classList.add('btn-success');
    minus.classList.add('btn-sm');
    minus.classList.add('remove-from-cart');
    minus.setAttribute("style", "position: relative; text-align:center; width: 20px; height: 20px; margin-left: 5px; float: right");
    minus.appendChild(minusImage);
    minus.style.display = 'none';
    minus.setAttribute('onclick', 'deleteItem(' + i + ')');

    // create form tag
    var form = document.createElement("div");
    form.className = 'mx-3';
    form.classList = 'my-2';
    form.setAttribute("style", "position: relative")

    // append buttons
    form.appendChild(like);
    form.appendChild(add);
    form.appendChild(minus);

    // overlay
    var overlay = document.createElement("div");
    overlay.id = "over_" + i
    overlay.className = "card-img-top";
    overlay.setAttribute("style", "position: absolute; display:none;opacity: 1");


    //item image
    var image = document.createElement("img");
    image.id = "img_" + i;
    image.className = "card-img-top";
    image.setAttribute("style", "position: relative");
    var prodImag = document.createTextNode(storedItems[i].itemImg);
    image.setAttribute("src", prodImag.nodeValue); // image.src = "IMAGE URL/PATH"

    //image.appendChild(overlay);

    //adding 'div' tag to div
    var cardTag = document.createElement("div"); // <div></div>
    cardTag.className = 'card';
    cardTag.id = 'id_' + i;
    //cardTag.setAttribute('style', "width: 15rem;");
    cardTag.appendChild(tag);
    cardTag.appendChild(form);
    cardTag.appendChild(image);

    // product name and description
    var cardName = document.createElement("p");
    cardName.id = "nm_" + i;
    cardName.className = "card-text";

    // product price
    var cardPrice = document.createElement("h5");
    cardPrice.id = "pr_" + i;
    cardPrice.className = "card-text";

    var prodName = document.createTextNode(storedItems[i].name);
    // creating parent div with class = "col-md-2"
    var parentTag = document.createElement("div");
    parentTag.className = 'col-md-2'
    parentTag.classList.add("mx-2");
    parentTag.classList.add("my-1");
    parentTag.appendChild(cardTag);



    // tag for card body
    var cardBody = document.createElement("div"); // <div></div>
    cardBody.className = 'card-body';

    var prodPrice = document.createTextNode(storedItems[i].price);

    // append cardName to cardBody
    cardBody.appendChild(cardPrice);
    cardPrice.innerHTML = prodPrice.nodeValue + " AED";
    cardPrice.setAttribute("style", "font-weight: bold; text-align: center; border: 1px solid gray");

    // append cardName to cardBody
    cardBody.appendChild(cardName);
    cardName.innerHTML = prodName.nodeValue;

    // append card-body to cardTag
    cardTag.appendChild(cardBody);


    container.appendChild(parentTag); // <body> <p>TEST TEXT</p> </body>

}
// if(document.getElementById("add_0")){
//     i=0;
//     document.getElementById("add_"+i).onclick = addItemsInTable(i);}
// if(document.getElementById("add_1")){
//     i=1;
//     document.getElementById("add_"+i).onclick = addItemsInTable(i);}
// else if(document.getElementById("add_0")){
//     i=2;
//     document.getElementById("add_"+i).onclick = addItemsInTable(i);}
// else if(document.getElementById("add_0")){
//     i=3
//     document.getElementById("add_"+i).onclick = addItemsInTable(i);}
// else if(document.getElementById("add_0")){
//     i=4
//     document.getElementById("add_"+i).onclick = addItemsInTable(i);}
// else if(document.getElementById("add_0")){
//     i=5
//     document.getElementById("add_"+i).onclick = addItemsInTable(i);}
// else if(document.getElementById("add_0")){
//     i=6
//     document.getElementById("add_"+i).onclick = addItemsInTable(i);}

function addItemsInTable(i) {
    var x = document.getElementById("sub_" + i);
    if (x.style.display === 'none' || count > 0) {
        x.style.display = 'block';
    } else if (x.style.display === 'block' || count == 0) {
        x.style.display = 'none'
    }
    var prId = storedItems[i].itmId;
    //console.log(prId)
    var proName = storedItems[i].name;
    var proPrice = storedItems[i].price;
    var proImage = storedItems[i].itemImg;
    //console.log(proImage)
    var cartList = JSON.parse(localStorage.getItem("cartList")) || [];
    var storageSize = cartList.length;
    console.log(storageSize)

    var row = document.createElement("tr");
    row.id = i;
    var im = document.createElement("td");
    var pro = document.createElement("td");
    var div1 = document.createElement("div");
    div1.className = 'd-flex'
    var div2 = document.createElement("div");
    div2.className = 'p-2'
    div2.classList.add('align-self-start')
    var div3 = document.createElement("div");
    div3.className = 'p-2'
    div3.classList.add('align-self-center')
    div3.classList.add('qnt')
    var div4 = document.createElement("div");
    div4.className = 'p-2'
    div4.classList.add('align-self-end')
    var qnty = document.createElement("td");
    var unit = document.createElement("td");
    unit.className = 'unit';
    var tot = document.createElement("td");
    tot.className = 'total';
    var tbBody = document.getElementById('cartItem');
    var pic = document.createElement("img");
    pic.className = 'card-img-top'
    pic.setAttribute('style', 'width: 4rem;')
    do {

        if (prId != cartList[storageSize]) {
            count = 1;
            var newItem = {
                id: prId,
                product: proName,
                Price: proPrice,
                Quantity: count,
                imageItm: proImage
            }
            cartList.push(newItem);
            localStorage.setItem("cartList", JSON.stringify(cartList));
            break;
        } else if (prId == cartList[storageSize].id) {
            count++;
            cartList[storageSize].Quantity = count;
            localStorage.setItem("cartList", JSON.stringify(cartList));
        }
        storageSize -= 1;
    } while (storageSize >= 0)
    var myCart = JSON.parse(localStorage.getItem("cartList"));
    console.log(myCart);
    do {
        if (i == storageSize) {
            var el = document.getElementById(i);
            var quant = el.querySelector('.qnt');
            let num = quant.innerHTML;
            quant.innerHTML = num + 1;
            var prc = el.querySelector('.unit');
            var totals = el.querySelector('.total');
            totals.innerHTML = parseInt(prc.innerHTML) * parseFloat(quant.innerHTML)
            break;
        } else if (row.id != storageSize) {

            var imIn = document.createTextNode(myCart[storageSize].imageItm);
            pic.setAttribute("src", imIn.nodeValue);
            minus.style.visibility = 'visible';
            minus.setAttribute('onclick', 'deleteItem(' + row.id + ')')
            add.setAttribute('onclick', 'addItemsInTable(' + row.id + ')');
            div2.appendChild(minus)
            div3.appendChild(qnty)
            div4.appendChild(add)

            div1.appendChild(div2)
            div1.appendChild(div3)
            div1.appendChild(div4)

            im.appendChild(pic);
            row.appendChild(im);
            row.appendChild(pro);
            var nameIn = document.createTextNode(myCart[storageSize].product)
            pro.innerHTML = nameIn.nodeValue;
            row.appendChild(div1);
            qnty.innerHTML = (document.createTextNode(myCart[storageSize].Quantity)).nodeValue;
            row.appendChild(unit);
            unit.innerHTML = (document.createTextNode(myCart[storageSize].Price)).nodeValue;
            row.appendChild(tot);
            tot.innerHTML = parseInt(qnty.innerHTML) * parseFloat(unit.innerHTML);
            tbBody.appendChild(row);
        }
        storageSize += 1;
    } while (storageSize < myCart.length);
    alert(proName + proPrice);

};
//delete item from table
function deleteItem(i) {
    var ele = document.getElementById('sub_'+i);
    ele.style.visibility = 'visible';
    var stored = JSON.parse(localStorage.getItem("cartList"));

    // here you need to make a loop to find the index of item to delete
    var indexToRemove = i;

    //remove item selected, second parameter is the number of items to delete 
    stored.slice(indexToRemove, i);

    // Put the object into storage
    localStorage.setItem('keyName', JSON.stringify(stored));
    document.getElementById(i).remove();
}

// clear cart
function ClearAll() {
    var val = document.getElementById('cartItem');
    count = 0;
    val.remove('tr');
    //val.innerHTML = "";
    localStorage.clear();
    //doShowAll();
}
