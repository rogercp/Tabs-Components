
class TabLink {
  constructor(tablink) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.tablink=tablink;
    
    // Get the custom data attribute on the Link
    // this.data;
    this.data=document.querySelector(`.tabs-link[data-tab='${this.tablink.dataset.tab}']`);
   
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemELement=document.querySelector(`.tabs-item[data-tab='${this.data.dataset.tab}']`);
   
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.itemELement=new TabItem(this.itemELement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.tablink.addEventListener('click',()=>this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links=document.querySelectorAll(".tabs-link");
    console.log(links);
    
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(function(current){
        current.classList.remove("tabs-link-selected");
    })
    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.tablink.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link
    this.itemELement.selectitem();

  }
}

class TabItem {
  constructor(itemELement) {
    // Assign this.element to the passed in element
    // this.element;
    this.itemELement=itemELement;
  }

  selectitem() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items=document.querySelectorAll(".tabs-item");

    // Remove the class "tabs-item-selected" from each element
    items.forEach(function(current){
      current.classList.remove("tabs-item-selected");
    })
    
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.itemELement.classList.add("tabs-item-selected");

  }
}



/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let links = document.querySelectorAll(".tabs-link").forEach(tablink => new TabLink(tablink));