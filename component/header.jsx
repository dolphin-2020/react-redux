import React ,{Component,Fragment}from 'react'
import { Input,Button} from 'antd'
import store from '../src/store/index.js'
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
export default class Header extends Component{
  constructor(props){
    super(props);
    this.valChange=this.valChange.bind(this);
    this.addVal=this.addVal.bind(this)
  }

render(){
  return(
      <Fragment>
        <label htmlFor="input" style={styles.label}>Dolphin</label>
          <Input id="input"
            type="primary" 
            value={this.props.inputVal}
            placeholder="Please enter text" 
            style={styles.input} 
            onChange={this.valChange}
          />
        <Button type="submit" onClick={this.addVal}  style={styles.btn} >Submit</Button>
      </Fragment>
    )
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
