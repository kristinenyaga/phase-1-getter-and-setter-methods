// Add your Circle class here

class Circle {

  constructor(radius){
    this.radius=radius
  }

  get diameter(){
    let result=(`${this.radius}`*2)
    return result
   

  }

  get circumference(){
    let result=(`${this.radius}`*(2*Math.PI))
    return result
   

  }

  get area(){

    let result=((`${this.radius}`**2)*Math.PI)
    return result
    

  }

  set diameter(diameter){
     return this.radius= (diameter/2)

  }

  set  circumference(circum){
    return this.radius= (circum / (2*Math.PI))
  }

  set area(area){
    return this.radius= Math.sqrt(area / Math.PI)

  }

  
}

// let circle= new Circle(5)

// circle.area
// circle.diameter
// circle.circum
// circle.area=100
// circle.diameter=50
// console.log(circle.radius)