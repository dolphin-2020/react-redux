import React ,{Component,Fragment}from 'react'
import { Input,Button} from 'antd'
import styles from '../src/styles.js'

export default class Header extends Component{
  constructor(props){
    super(props);

  }

render(){
  return(
      <Fragment>
        <label 
          htmlFor="input" 
          style={styles.label}>
          Dolphin
        </label>
        <Input 
          type="primary" 
          value={this.props.inputVal}
          placeholder="Please enter text" 
          style={styles.input} 
          onChange={this.props.valChange}
        />
        <Button 
          type="submit" 
          onClick={this.props.addVal}  
          style={styles.btn} >
          Submit
        </Button>
      </Fragment>
    )
  }

  // addVal(){
  //   const action={
  //     type:"add_todo_item",
  //   }
  //   store.dispatch(action);
  // }

  // valChange(e){
  //   const action={
  //     type:"change_input_value",
  //     value:e.target.value
  //   };
  //   store.dispatch(action);
  // }
}
