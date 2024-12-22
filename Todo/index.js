class Robot {

    constructor(name,color,weight){
             this.name = name
             this.color = color
             this.weight = weight
    }

    setFuntion(username,usercolor,userweight){
        this.name = username
        this.color = usercolor
        this.weight  = userweight
    } 

    getFunction (){

        return {...this}
    }
}


let r1 = new Robot("midhat","red",40)

console.log(r1)

console.log(r1.getFunction())
r1.setFuntion("amna","blue",65)
console.log(r1.getFunction())