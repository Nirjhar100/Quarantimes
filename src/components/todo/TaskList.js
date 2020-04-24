import React, {Component} from 'react'
import "./TaskList.css";

class TaskList extends Component{
    constructor(props){
        super(props);

        this.state={
            task:"",
            tasklist:[]
        }

    }

    //on load get the task list
    componentDidMount=()=>{
        this.getTasks();
    }

    onChange = event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    //add task to list
    onSubmit=(e)=>{
        e.preventDefault()
        //get the task list from
        let tasklist=JSON.parse(localStorage.getItem("tasklist"))

        //task list is null
        if(tasklist==null){
            tasklist=[]
        }

        //create task
        let task={
            task: `${this.state.task}`,
            status:false
        }

        //add the task to the task list
        tasklist.push(task)

        //save the task list in the local storage
        localStorage.setItem("tasklist",JSON.stringify(tasklist))

        //clear the form
        this.setState({task:""});
        
        //refresh the tasks
        this.getTasks();
    }

    
    updateTask=index=>{
        let tasklist=JSON.parse(localStorage.getItem("tasklist"));
        tasklist[index].status = true;
        // save the updated task list
        localStorage.setItem("tasklist", JSON.stringify(tasklist));
        // refresh the task list
        this.getTasks();
    }

    undoTask = index => {
        // get the task list from the local storage
        let tasklist = JSON.parse(localStorage.getItem("tasklist"));
        // change status to false
        tasklist[index].status = false;
        // save the updated task list
        localStorage.setItem("tasklist", JSON.stringify(tasklist));
        // refresh the task list
        this.getTasks();
      };

      deleteTask=index=>{
          let tasklist = JSON.parse(localStorage.getItem("tasklist"))
          tasklist.splice(index, 1)
          localStorage.setItem("tasklist",JSON.stringify(tasklist))
          this.getTasks()
      }

      getTasks=()=>{
        //get the task list from the local storage

        let tasklist= JSON.parse(localStorage.getItem("tasklist"))

        //check if the task list is empty
        if(tasklist){
            //sort all the tasks on the basis of status
            //completetd task will move down

            tasklist=tasklist.sort((a,b)=>{
                if(a.status){
                    return 1;
                }
                else if(b.status){
                    return -1;
                }
                return 0;
            })

            //save task list
            localStorage.setItem("tasklist",JSON.stringify(tasklist))

            //set the tasklist to the state
            this.setState({
                // default color
                // Incomplete: yellow
                // complete: green
                tasklist: tasklist.map((item, index) => {
                    let taskComplete = { textDecoration: "none" };
  
                    if (item.status) {
                        taskComplete["textDecoration"] = "line-through";
                    }
                    return (
                    <div className="card " key={index} style={taskComplete}>
                            <span class="intext">{item.task}</span>
                            <span class="small material-icons secondary-content" onClick={() => this.deleteTask(index)}>delete</span>
                            <span class="small material-icons secondary-content" onClick={() => this.undoTask(index)}>undo</span>
                            <span class="small material-icons secondary-content" onClick={() => this.updateTask(index)}>check</span>
                    </div>
                    );
                })
            })
        }
    }


      render() {
        return (
          <div className="abc card ">
            <h5 className="white-text header center">📝 Todos</h5>
            <div className="container">
              <form onSubmit={this.onSubmit} className="white-text">
                <input
                  type="text"
                  name="task"
                  onChange={this.onChange}
                  value={this.state.task}
                  fluid
                  placeholder="ex. Buy milk..."
                  className="white-text"
                />
                </form>
                </div>
            <div>
              <div className="collection">{this.state.tasklist}</div>
            </div>
          </div>
        );
      }

}

export default TaskList;
