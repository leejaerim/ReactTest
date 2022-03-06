import React , { useState }from 'react';
import { Button,ListGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Menu from './Menu.js';
import { useLocation } from 'react-router-dom';
import './table.css';
import axios from "axios";
import { propTypes } from 'react-bootstrap/esm/Image';
function Table(props){
    var [cost, setCost] = useState(0);
    var [cnt,setCnt] = useState([0,0,0,0,0]);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    //const addCost = (val) => setCost(cost=cost+val);
    const onCount = () => {
      //   if(cost == 0) return ;
      //   axios.post("http://localhost:8000/app/order/", {
      //       cost : cost,
      //   })
      // //정상 수행
      // .then(Response => {
      //   if (Response.status === 201 || Response.status === 200){
      //     if(Response.data.status === 'Success') {
      //       setCost(0);
      //       setCnt([0,0,0,0,0]);
      //       props.onUpdateSum(Response.data.cost);
      //     }else{
      //       alert(Response.data.Error)
      //     }
      //   } else {
      //     alert("데이터 삽입 실패");
      //   }
      // })
      // //에러
      // .catch(err => {
      //   console.log(err);
      // });
      setCost(0);
      setCnt([0,0,0,0,0]);
      props.onUpdateSum(cost);
    }
    const onUpdateCost = (val) => {
        setCost(cost+val);
    };
    const onUpdateCnt= (index,val) =>{
        cnt[index] = cnt[index]+val;
        setCnt(cnt)
    }
    return(
        <span>
            <div  className={props.index === props.num ? 'active' : 'none'}>
                <ul></ul>
            <ListGroup defaultActiveKey="#link1" style={{width : '80%'}}>
                <Menu mName={'김치찌개'} index={0} cnt={cnt[0]} onUpdateCost={onUpdateCost} onUpdateCnt={onUpdateCnt}cost={8000}/>
                <Menu mName={'계란말이'} index={1} cnt={cnt[1]} onUpdateCost={onUpdateCost} onUpdateCnt={onUpdateCnt} cost={5000}/>
                <Menu mName={'추가'} index={2} cnt={cnt[2]} onUpdateCost={onUpdateCost} onUpdateCnt={onUpdateCnt} cost={1000}/>
                <Menu mName={'음료수'} index={3} cnt={cnt[3]} onUpdateCost={onUpdateCost} onUpdateCnt={onUpdateCnt} cost={2000}/>
                <Menu mName={'소주/맥주'} index={4} cnt={cnt[4]} onUpdateCost={onUpdateCost} onUpdateCnt={onUpdateCnt} cost={4000}/>
            </ListGroup>

                <Alert variant='primary' style={{width : '80%'}}>
                    총액 : {cost}
                </Alert>
                <Button variant="primary" size="lg" onClick={() => onCount()}>
                            계산
                </Button>
                <Button style={{marginLeft:'20%'}}variant="primary" size="lg" onClick={()=> props.onUpdateIndex(0)} >
                            테이블
                </Button>
            </div>
        </span>

    );
}
export default Table;