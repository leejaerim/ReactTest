import React , { useState }from 'react';
import { Button,Alert} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Table from './table.js';
function Home(){
    const [index,setIndex] = useState(0);
    const [sumCost,setSumCost] = useState(0);
    const onUpdateIndex = (val) => {
        setIndex(val);
    };
    const onUpdateSum = (val) => {
        setSumCost(sumCost+val);
    };
    
    return(
        <div className="d-grid gap-2">
                <Table num={1} index={index} onUpdateIndex={onUpdateIndex} onUpdateSum={onUpdateSum}>
                </Table>
                <Table num={2} index={index} onUpdateIndex={onUpdateIndex} onUpdateSum={onUpdateSum}>
                </Table>
                <Table num={3} index={index} onUpdateIndex={onUpdateIndex} onUpdateSum={onUpdateSum}>
                </Table>
                <Table num={4} index={index} onUpdateIndex={onUpdateIndex} onUpdateSum={onUpdateSum}>
                </Table>
                <div className={index === 0 ? 'active' : 'none'}>
                    <ul>
                        <Button variant="primary" size="lg" onClick={()=>{setIndex(1)}}>
                            1번 테이블
                        </Button>
                        <Button style={{marginLeft : '100px'}} variant="primary" size="lg" onClick={()=>{setIndex(2)}}>
                            2번 테이블
                        </Button>
                    </ul>
                    <ul>
                        <Button variant="primary" size="lg" onClick={()=>{setIndex(3)}}>
                            3번 테이블
                        </Button>
                        <Button style={{marginLeft : '100px'}} variant="primary" size="lg" onClick={()=>{setIndex(4)}}>
                            4번 테이블
                        </Button>
                    </ul>
                    <Alert variant='primary' style={{width : '363px', marginLeft:'32px'}}>
                        총액 : {sumCost}
                    </Alert>
                </div>
                
      </div>
    );
}
export default Home;