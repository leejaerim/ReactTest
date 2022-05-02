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
                        <div id="home"></div>
                        <Link to={"/"}>
                            홈으로
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item><div id="write"></div><Link to={"/writecontent"}>글쓰기</Link></ListGroup.Item>
                    <ListGroup.Item><div id="list"></div><Link to={"/game"}>목록</Link></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}

export default Lnb;