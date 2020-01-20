import React,{Component,Fragment} from 'react'
import styles from '../src/styles.js'
export default class CompleteTodo extends Component{
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
      {this.props.item}
      <img src="../src/img/minus.png" onClick={this.props.completeDel} style={styles.delImg}/>       
    </Fragment>
    )
  }

 
  // completeDel(){
  //   let {completeDel,index}=this.props;
  //   completeDel(index)
  // }
}