import React , { useState }from 'react';
import {ListGroup} from 'react-bootstrap';
import './lnb.css';
import { Link } from 'react-router-dom';

function Lnb(){
    const [sidebar, setSidebar] = useState(false);
    const style ={
        display:"block",width:"10px",height:"100%",position:"absolute"
    }
    const handleClick = ()=>setSidebar(false) 
    return(
        <div>
            <div 
                onMouseOver={()=>setSidebar(true)}
                onMouseOut={()=>setSidebar(false)}
                style={style}></div>    
            <div className={sidebar? 'open_lnb':'close_lnb'}
                onMouseOver={()=>setSidebar(true)}
                onMouseOut={()=>setSidebar(false)}
            >
                <ListGroup>
                    <ListGroup.Item>
                        <Link to={"/"}>
                            홈으로
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}

export default Lnb;