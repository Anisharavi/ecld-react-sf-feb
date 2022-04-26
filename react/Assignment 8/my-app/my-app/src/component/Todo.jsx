import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todoitem from './Todoitem';
import '../Todo.css';
import Pagination from '../Pagination';
import Login from '../Login'

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            id:uuidv4(),
            list: [],
            completed: false,
            strikeThrough: [],
            currentPage: 1
          }
        }
        handlelogout=()=>{
            this.setState({
                isLogout:true
            })
        }
    render() {
        
        const { list,currentPage }= this.state;
        const perPage= 3;
        const totalPages= Math.ceil(list.length /perPage);
        console.log(currentPage, 'currentPage')

        const handleChange=(e)=>{
            this.setState({
                value: e.target.value
            })
            
        }

        const handleAddTask = (event) =>{
            event.preventDefault();
            const newItem = {
              id: this.state.id,
              task: this.state.value,
              
            };
            const updatedItems = [...this.state.list, newItem];
      
              this.setState({
                  list: updatedItems,
                  value: '',
                  id: uuidv4(),
                  completed: false,
                  
              })
              
          }

        const handleDelete=(id) => {
             const list = [...this.state.list];
  
    const updateList = list.filter(item => item.id !== id);
  
    this.setState({
      list:updateList,
    });
        }
        

        const handleEdit = (id)=>{
            const filteredItems = this.state.list.filter(item =>
                item.id !== id);
            const selectedItem = this.state.list.find(item =>
                item.id === id);
                    
                    this.setState({
                        list:filteredItems,
                        value: selectedItem.task,
                        id: id,
                        completed: true
                    })
                    
          }
        
          const handleToggle = (event)=>{
            const element = event.target;
            element.classList.toggle("crossed-line");
           }

           const handlePage=(pageNum)=>{
               this.setState({
                currentPage: pageNum
            
               })
           }

        return (
            <div>
                {
                    this.state.isLogout ? (
                        <div>
                            <Login/>
                            </div>
                    ) : (
                        <div>

<button onClick={this.handlelogout}>
                    logout
                </button>

            <div className="container">
            <h1 className='heading'>ToDo</h1>
            
            <input id="input" placeholder="Enter your task" onChange={handleChange} value={this.state.value}></input>
            <button id="addButton" onClick={handleAddTask}>{this.state.completed?'Edit':'Add'}</button>

            {
                this.state.list.filter((_,index)=>index>=(currentPage -1)*perPage && index <currentPage* perPage)
                .map((item) => {
                    return (
                        
                        <Todoitem key={item.id} task={item.task} handleDelete={()=>handleDelete(item.id)} 
                        handleEdit={()=>handleEdit(item.id)} handleToggle={handleToggle} />
                        
                        )

                })
            }
            <div id='pagination'>
            <Pagination totalPages={totalPages} handlePage={handlePage}/>
            </div>
            </div>

                            </div>
                    )
                }
                
            </div>
        )
    }
}

export default Todo;