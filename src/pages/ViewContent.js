
import React , { useState }from 'react';
import { Button} from '@mui/material';
import Navigation from '../navi';
import Lnb from './lnb.js';
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

export default function ViewContent(){
    // function getData() {
    //     const res = [];
    //     if(sessionStorage.getItem("uid") == null) {
    //         return <Redirect to="/" />;
    //     }else{
    //         axios.get("http://localhost:8000/app/post/")
    //         //정상 수행
    //         .then(Response => {
    //           if (Response.status === 201 || Response.status === 200){
    //             for(let i=0; i<Response.data.items.length;i++){
    //                 Response.data.items[i].fields.id = Response.data.items[i].pk
    //                 res.push(Response.data.items[i].fields)
    //             }
    //             setRows(res);
    //           } else {
    //             alert("글쓰기 실패");
    //           }
    //         })
    //         //에러
    //         .catch(err => {
    //           console.log(err);
    //         });
    //       }
    // }
    // const [rows, setRows] = useState([]);
    // useEffect(() => {
    //     getData();
    //   }, []); // rows가 바뀔 때만 effect를 재실행합니다.
    return(
        <div>
            <Navigation/>
            <Lnb></Lnb>
            <div className='ContentWrapper' style={{marginLeft:"10px"}}>
                <main>
                        <h2> TEST</h2>
                        <div style={{height:"500px", border:"1px solid #333333"}}>
                            TEST
                        </div>
                </main>
            </div>
            <Button id="submit" className="submit" variant="contained" style={{marginTop:"10px"}}>뒤로</Button>
        </div>
    );
}

 