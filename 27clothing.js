let cartopen=document.querySelector(".cart-icon");
let cart=document.querySelector(".cart-section");
let closebtn=document.querySelector(".btn-close");




cartopen.addEventListener('click',()=>{
        cart.classList.add('cart-active');  
})
closebtn.addEventListener('click',()=>{
    cart.classList.remove('cart-active'); 

})
document.addEventListener('DOMContentLoaded',loadpage)
function loadpage(){
    loadcontent()
}
function loadcontent(){
    //remove
    removebtn=document.querySelectorAll('.cart-remove')
    removebtn.forEach(el=> {
        el.addEventListener('click',removeItem)
    });
    


    let cartquantity=document.querySelectorAll('.cart-quantity')
    let cartrate=document.querySelectorAll('.cart-rate')
    cartquantity.forEach((addbtn)=>{
        addbtn.addEventListener('change',addquantity)
    })
    // cartrate.forEach((addition)=>{
    //     addition.addEventListener('onchange',total)
    // })


    let addcart=document.querySelectorAll('.add-cart')
    addcart.forEach((cart)=>{
        cart.addEventListener('click',cartbtn)
    })
    updatetotal()


}
// function total(){

// }
function removeItem(){
    if(confirm("sure you want to remove")){
        let title=this.parentElement.querySelector('.dress-title')

        items=items.filter(el=>{
            el.title!=title
            
        })
      this.parentElement.remove();
      loadcontent()
    
    }

}
function addquantity(){
    if(isNaN(this.value)||this.value<1){
        this.value=1
    }
    loadcontent()
    
}

let items=[]
function cartbtn(){
    console.log('ldfbdbfbdf');
    // let addcart=document.querySelectorAll('.add-cart')
    // addcart.forEach((e)=>{
    //     e.classList.remove('cartcolor')
    // })
    // addcart.classList.add('cartcolor')
    
    let dress=this.parentElement
    let dresstitle=dress.querySelector('.dress-title').innerHTML
    let dressrate=dress.querySelector('.dress-rate').innerHTML
    let dressimg=dress.querySelector('.dress-pic').src
    let newproduct={dressimg,dressrate,dresstitle}
    if(items.find((el)=>
        el.dresstitle==newproduct.dresstitle
    )){
        alert("product already added")
        return
    }else{
        items.push(newproduct)
    }
    let div=document.createElement('div')
    div.innerHTML=`<div class="cart-box">
    <img src="${dressimg}" class="cart-image">
    <div class="cart-details">
        <div class="cart-dress-title">${dresstitle}</div>
        <div class="price-box">
            <div class="cart-rate">${dressrate}</div>
            <div class="cart-amt">${dressrate}</div>
        </div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <ion-icon name="trash-outline" class="cart-remove"></ion-icon>
    </div>`
    let cartcontent=document.querySelector('.cart-content')
    cartcontent.append(div)
    loadcontent()



}
function updatetotal(){
    let cartItems=document.querySelectorAll('.cart-box')
    let totalPrice=document.querySelector('.total-price')
    let total=0;
    cartItems.forEach(el=>{
        let priceAmt=el.querySelector('.cart-rate')
        let price=parseFloat(priceAmt.innerHTML.replace('Rs',''))
        console.log(price);
        let quantity=el.querySelector('.cart-quantity').value
        total+=price*quantity
        el.querySelector('.cart-amt').innerHTML="Rs."+price*quantity

    })
    totalPrice.innerHTML="Rs."+total


}