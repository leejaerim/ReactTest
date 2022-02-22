import React , { useState }from 'react';
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Table from './table.js';
function Home(){
    var [data, setData] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);
    const onUpdateData = (index,val) => {
        data[index] = val;
        setData(data);
    };
    const changeTable = () =>{

    }
    return(
        <div className="d-grid gap-2">
            <ul style={{display:'flex'}}>
                <Table >
                </Table>
                <div style={{ 
                    display: 'block' , width: '10px', backgroundColor:'#ced4da', position:'absolute', left:'451px',top:'0px',bottom:'-406px'
                }}></div>
                <Table >
                </Table>
            </ul>
            <hr style={{height:'10px',backgroundColor:'black'}}></hr>
            <ul style={{display:'flex'}}>
                <Table >
                </Table>
                <Table >
                </Table>
            </ul>
      </div>
    );
}
export default Home;