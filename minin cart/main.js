window.onload = localStorage.removeItem("cartList");
//storing array in localStorage
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

featuredItems();

function featuredItems() {

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
}

function addItemsInTable(i) {
    var x = document.getElementById("sub_" + i);
    if (x.style.display === 'none' || count > 0) {
        x.style.display = 'block';
    }
    var tbBody = document.getElementById("cartItem");
    var cartList = JSON.parse(localStorage.getItem("cartList")) || []
    //console.log(inLocal);
    var newLocal = {
        id: i,
        name: storedItems[i].name,
        imgg: storedItems[i].itemImg,
        price: storedItems[i].price
    }
    cartList.push(newLocal);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    var localCart = JSON.parse(localStorage.getItem("cartList"));
    console.log(localCart);
    var str = "";
    let num = 1;
    for (let j = 0; j < localCart.length; j++) {
        str += "<tr id='" + localCart[j].id + "'><td>" + localCart[j].id + "</td><td><img src='" + localCart[j].imgg + "' width='50px' height='50px'></td><td>" + localCart[j].name + "</td><td><div class='d-felx content-align-left'><button class='btn btn-sm btn-warning sub'><img src='minus.png' width='15px' height='15px'></button><span class='Qnty p-3'>" + num + "</span><button  class='btn btn-sm btn-success add'><img src='plus.png' width='15px' height='15px'></button><button  class='btn btn-sm btn-danger dlt'><img src='dlt.png' width='15px' height='15px'></button></div></td><td class='unit'>" + localCart[j].price + "</td><td class='total'>" + parseFloat(localCart[j].price) * num + "</td></tr>";
        tbBody.innerHTML = str;
    }

};

function updateQuantityAndTotal(iD) {
    var qnt = document.querySelector("Qnty");
    var unit = document.querySelector("unit");
    var tot = document.querySelector("total");

    if (iD == "sub") {
        qnt -= 1;
        tot = parseFloat(qnt) * parseFloat(unit);
    }
}

//delete item from table
function deleteItem(i) {
    var stored = JSON.parse(localStorage.getItem("cartList"));

    //remove item selected, second parameter is the number of items to delete 
    stored.splice(i, 1);

    // Put the object into storage
    localStorage.setItem("cartList", JSON.stringify(stored));
    var cart = JSON.parse(localStorage.getItem("cartList"));
    console.log(cart);
    document.getElementById(i).remove();
}

// clear cart
function ClearAll() {
    var contnr = document.getElementById('itemList');
    var val = document.getElementById('cartItem');
    console.log(storedItems);
    count = 0;
    val.innerHTML = "";
    contnr.innerHTML = "";
    localStorage.clear();
    featuredItems();
}
