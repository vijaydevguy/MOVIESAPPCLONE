const tabsItems = document.querySelectorAll('.tab-item');
const tabsContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab 
    this.classList.add('tab-border')
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show')
    // console.log(this.id)
}

function removeBorder(){
    tabsItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow(){
    tabsContentItems.forEach(item => item.classList.remove('show'))
}

//Listen for tab click
tabsItems.forEach(item => item.addEventListener('click', selectItem))