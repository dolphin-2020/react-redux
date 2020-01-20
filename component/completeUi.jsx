import React,{Component} from 'react'
import styles from '../src/styles.js'
class CompleteUi extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={styles.completeDiv}>
      <p style={styles.contentHead}>Complete Box</p>
      <ul style={styles.showUl}>
        {                 
          this.props.completeList.map((item,index)=>{
          return <li 
            key={new Date().getTime() + index} 
            style={styles.showLi}>
            {item}
            <img src="../src/img/minus.png" onClick={()=>{this.props.completeDel(index)}} style={styles.delImg}/>          
            </li>
          })
        }
      </ul>
    </div>
    )
  }
}

export default CompleteUi;