import React from 'react';
import { ListGroup} from 'react-bootstrap';
import { MenuList } from './MenuList';
//import { Link } from "react-router-dom";
function ListContent(){
  return(
      <div>
        <ListGroup defaultActiveKey="#link1">
        {MenuList.map((item, index) => {
            return (
            <li key={index} className={item.cName}>
                <ListGroup.Item action>
                    {item.title}
                </ListGroup.Item>
            </li>
            );
        })}
        </ListGroup>
    </div>
  );
}
export default ListContent