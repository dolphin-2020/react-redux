import React,{Component,Fragment} from 'react'
import TodoItem from './todoItem.jsx'
import CompleteTodo from './complete.jsx'
import axios from 'axios'//...
import store from '../src/store/index.js'
import Header from '../component/header.jsx'
import styles from '../src/styles.js'

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state=store.getState();
    this.storeChange=this.storeChange.bind(this);
    store.subscribe(this.storeChange);
    this.completeDel=this.completeDel.bind(this)
  }

  render(){
    return(
      <Fragment>

        <Header inputVal={this.state.inputVal} />

{/*----------------------incomplete list--------------------*/}         
        <div style={styles.showDiv}>
          <p style={styles.contentHead}>Incomplete Box</p>
          <ul style={styles.showUl}>
            {                
            this.state.displayList.map((item,index)=>{
            return <li 
              key={new Date().getTime() + index} 
              style={styles.showLi}>
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
      <p style={styles.contentHead}>Complete Box</p>
      <ul style={styles.showUl}>
        {                 
          this.state.completeList.map((item,index)=>{
          return <li 
              key={new Date().getTime() + index} 
              style={styles.showLi}>
              <CompleteTodo 
                item={item} index={index} 
                completeDel={this.completeDel}
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
