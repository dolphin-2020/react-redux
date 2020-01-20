import React,{Component,Fragment} from 'react'
import store from '../src/store/'
import Header from './header.jsx'
import IncompleteUi from './incompleteUi.jsx'
import CompleteUi from './completeUi.jsx'

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state=store.getState();
    this.storeChange=this.storeChange.bind(this);
    this.completeDel=this.completeDel.bind(this);
    this.valChange=this.valChange.bind(this);
    this.addVal=this.addVal.bind(this);
    this.completeAdd=this.completeAdd.bind(this);
    store.subscribe(this.storeChange);
  }

  render(){
    return(
      <Fragment>
        <Header 
          inputVal={this.state.inputVal}
          addVal={this.addVal}
          valChange={this.valChange}
           />
        <IncompleteUi 
          displayList={this.state.displayList}
          completeAdd={this.completeAdd}
          del={this.del}
        />

        <CompleteUi
          completeList={this.state.completeList}
          completeDel={this.completeDel}
        />
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

  addVal(){
    const action={
      type:"add_todo_item",
    }
    store.dispatch(action);
  }

  valChange(e){
    const action={
      type:"change_input_value",
      value:e.target.value
    };
    store.dispatch(action);
  }
}

export default TodoList;
