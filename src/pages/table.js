import React , { useState }from 'react';
import { Button,ListGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import ListContent from './ListContent.js';
import { MenuList } from './MenuList';
function Table(){
    var [cost, setCost] = useState(0);
    //const addCost = (val) => setCost(cost=cost+val);
    const onIncrease = (v) => {
        setCost(cost + v.cost);
        v.cnt = v.cnt + 1;
      }
    
      const onDecrease = (v) => {
        setCost(cost - v.cost);
        v.cnt = v.cnt - 1;
      }
    return(
        <span>
            <ListGroup defaultActiveKey="#link1" style={{width : '400px'}}>
                {MenuList.map((item, index) => {
                    return (
                    <li key={index} className={item.cName}>
                        <ListGroup.Item action onClick={()=>onDecrease(item)}>
                            {item.title}&nbsp;&nbsp;&nbsp;&nbsp;{item.cnt}
                        </ListGroup.Item>
                    </li>
                    );
            })}
            </ListGroup>
            <ul className="d-grid gap-2">
                {MenuList.map((item, index) => {
                    return (
                    <li key={index} className={item.cName}>
                        <Button variant="primary" size="lg" onClick={()=>onIncrease(item)} style={{display:'inline'}}>
                            {item.title}
                        </Button>
                    </li>
                    );
                })}
            </ul>
            <div>
                <Button variant="primary" size="lg" onClick={() => setCost(0)}>
                            계산
                </Button>
                <Alert variant='primary'>
                    총액 : {cost}
                </Alert>
            </div>
        </span>
    );
}
export default Table;