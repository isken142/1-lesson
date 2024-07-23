//ооп обектно - орентирование програмирован
class Components {
    constructor(selector) {
this.el=document.querySelector(selector)
    }
    hide(){
        this.el.style.display='none'
    }
    show(){
        this.el.display='block'
    }
}
class Box extends Components{
    constructor(option){
        super(option.selector);
        
        this.el.style.width=this.el.style.height=option.size +"px";
        this.el.style.background=option.color;
    }
}
const boxFirst = new Box({
    selector: "#frist",
    size: 100,
    color: "red",

});
class Circle extends Box {
    constructor(option){
        super(option)
        this.el.style.borderRadius="50%";
    }
}
const c = new  Circle ({
    selector: "#circle",
    size: 100,
    color: "yellow",
});
//ООП Объектно-ориентированное программирование 
 
const cat = { 
    name: "Kuzya", 
    month: 2, 
    isHome: true, 
    color: "yellow", 
  }; 
   
  console.log(cat); 
   
  class Animal { 
    constructor(option) { 
      (this.name = option.name), 
        (this.age = option.age), 
        (this.hasTail = option.hasTail); 
    } 
    voice() { 
      console.log(${this.name} makes rrrrr); 
    } 
  } 
   
  class HomeAnimals extends Animal { 
    constructor(option) { 
      super(option); 
      this.muuzu = option.muuzu; 
      this.color = option.color; 
    } 
  } 
   
   
  const dog = new HomeAnimals({ 
    name: "Ak Tosh", 
    age: 2, 
    hasTail: true, 
    muuzu: false, 
    color: "black", 
  }); 
  console.log(dog);