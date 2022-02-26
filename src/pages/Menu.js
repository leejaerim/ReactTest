import React , { useState }from 'react';
import { Alert ,Button} from 'react-bootstrap';
//import { Link } from "react-router-dom";
function Menu(props){
    //var [cnt, setCnt] = useState(props.cnt);
    const onIncrease = () => {
        //setCnt(cnt+1);
        props.onUpdateCost(props.cost);
        props.onUpdateCnt(props.index , +1)
      }
    
    const onDecrease = () => {
        if(props.cnt >0){
            //setCnt(cnt -1);
            props.onUpdateCost(-props.cost);
            props.onUpdateCnt(props.index , -1)
        }
    }
  return(
    <div>
        <Alert onClick={()=>onDecrease()}>
          {props.mName} : {props.cnt}
        </Alert>
        <Button variant="primary" size="lg" onClick={()=>onIncrease()} style={{display:'inline'}}>
            {props.mName}
        </Button>
        <ul></ul>
    </div>
  );
}
export default Menu