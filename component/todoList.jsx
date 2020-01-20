import React,{Component,Fragment} from 'react'
import TodoItem from './todoItem.jsx'
import CompleteTodo from './complete.jsx'
import axios from 'axios'
import store from '../src/store/index.js'
import { Input,Button } from 'antd';
import Header from '../component/header.jsx'

let styles={
  input:{width:"50%",height:"40px",fontSize:"18px",border:"1px solid lightblue",marginTop:"50px",border:"1px solid lightblue"},
  addAndDel:{width:"30px",height:"30px",float:"right",marginRight:"10px"},
  btn:{width:"10%",height:"44px",fontSize:"15px",backgroundColor:"lightblue"},
  showDiv:{width:"45%",marginTop:"10px",float:"left",marginLeft:"30px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee "},
  showUl:{listStyleType:"none"},
  showLi:{boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",margin:"15px 40px 0 0",height:"30px"},
  completeDiv:{width:"45%",float:"right",marginTop:"10px",marginRight:"30px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee "},
  completeUl:{width:"45%",float:"right"},
  label:{margin:"0 23px",color:"green",fontSize:"28px"},
};

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state=store.getState();
    this.storeChange=this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  render(){
    return(
      <Fragment>
      {/* <label htmlFor="input" style={styles.label}>Dolphin</label>
      <Input id="input"
        type="text" 
        value={this.state.inputVal}
        placeholder="Please enter text" 
        style={styles.input} 
        onChange={this.valChange}
      />
      <Button type="dashed" onClick={this.addVal}  style={styles.btn} >Submit</Button>
 */}
      <Header inputVal={this.state.inputVal} />

      {/*----------------------incomplete list--------------------*/}         
      <div style={styles.showDiv}>
        <h3>Incomplete Box</h3>
        <ul style={styles.showUl}>
          {                
            this.state.displayList.map((item,index)=>{
            return <li key={new Date().getTime() + index} style={styles.showLi}>
            <TodoItem 
              del={this.del.bind(this)} 
              item={item} 
              completeAdd={this.completeAdd.bind(this)}
              index={index}
             />
            </li>
            })
          }
        </ul>
      </div>
{/*---------------------Complete list---------------------*/}
      <div style={styles.completeDiv}>
      <h3>Complete Box</h3>
      <ul style={styles.showUl}>
        {                 
          this.state.completeList.map((item,index)=>{
          return <li key={new Date().getTime() + index} style={styles.showLi}>
              <CompleteTodo 
              item={item} index={index} 
              completeDel={this.completeDel.bind(this)}
              />
            </li>
          })
        }
      </ul>
    </div>
    </Fragment>
    )
  }
//-----------------------------Method---------------------------->

  del(index){
    const action={
      type:"delete_todo_item",
      index
    }
    store.dispatch(action);
  }

  completeAdd(index){
    const action={
      type:"add_complete_item",
      index
    }
    store.dispatch(action);
  }

  completeDel(index){
    const action={
      type:"delete_complete_item",
      index
    }
    store.dispatch(action);
  }

  storeChange(){
    this.setState(store.getState());
  }
}

export default TodoList;
