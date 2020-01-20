import React,{Component,Fragment} from 'react'
import styles from '../src/styles.js'
export default class TodoItem extends Component{
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.item!==this.props.item){
      return true;
    }else{
      return false
    }
  }

  render(){
    //console.log("slow")
    let {item}= this.props;
    return(
    <Fragment>
      {item}
      <img 
        src="../src/img/add.png" 
        onClick={this.props.completeAdd} 
        style={styles.delImg}
      />

      <img 
        src="../src/img/minus.png" 
        onClick={this.props.del} 
        style={styles.delImg}
      />       
    </Fragment>
    )
  }
}