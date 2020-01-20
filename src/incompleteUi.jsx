import React,{Component} from 'react'
import styles from '../src/styles.js'
class IncompleteUi extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={styles.showDiv}>
      <p style={styles.contentHead}>Incomplete Box</p>
      <ul style={styles.showUl}>
        {                
        this.props.displayList.map((item,index)=>{
        return <li 
          key={new Date().getTime() + index} 
          style={styles.showLi}>
          {item}
          <img 
            src="../src/img/add.png" 
            onClick={()=>{this.props.completeAdd(index)}} 
            style={styles.delImg}
          />

          <img 
            src="../src/img/minus.png" 
            onClick={this.props.del} 
            style={styles.delImg}
          />    
        </li>
        })
      }
    </ul>
  </div>
    )
  }
}

export default IncompleteUi;