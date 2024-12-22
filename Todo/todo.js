class Todo {

    constructor(){

            this.todo = []         
    }

     addTask (task,status){
           
         if(status == "done" || "pending"){
                  
            this.todo.push({task, status : status || "pending"})
         }
         

     }

     getTask (){

        return this
     }

     deleteTask(task){
              
        this.todo = this.todo.filter((t)=> t.task !== task)

            console.log(`removed task ${task}`)
        
     }
    
     updateTask (oldTask,newTask){
                
              this.todo = this.todo.map((t)=>

               t.task === oldTask ? {task : newTask , status : t.status} : t
            )
             
     }

     updateStatus (task,status){
          
      this.todo = this.todo.map((t)=>
             
         t.task === task ? {task : t.task , status} : t
      )

     }

}


let t1 = new Todo()

t1.addTask("mahaworkout","done")
t1.addTask("workout","done")
t1.addTask("midhatworkout","done")
t1.updateTask("workout","myworkout")
t1.updateStatus("mahaworkout" , "pending")
t1.deleteTask("mahaworkout")


console.log(t1.getTask())