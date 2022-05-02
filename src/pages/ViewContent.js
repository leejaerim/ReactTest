import React , { useState, useEffect  }from 'react';
import { Button} from '@mui/material';
import Navigation from '../navi';
import Lnb from './lnb.js';
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

export default function ViewContent({match}){
    const id = match.params.id;
    function getData() {
        let res = {};
        if(sessionStorage.getItem("uid") == null) {
            return <Redirect to="/" />;
        }else{
            axios.get("http://localhost:8000/app/post/"+id)
            //정상 수행
            .then(Response => {
              if (Response.status === 201 || Response.status === 200){
                for(let i=0; i<Response.data.items.length;i++){
                    Response.data.items[i].fields.id = Response.data.items[i].pk;
                    res = Response.data.items[i].fields;
                }
                setRows(res);
              } else {
                alert("데이터를 읽어오는데 실패하였습니다.");
              }
            })
            //에러
            .catch(err => {
              console.log(err);
            });
        }
    } 
    const [rows, setRows] = useState({});
    useEffect(() => {
        getData();
      }, []); // rows가 바뀔 때만 effect를 재실행합니다.
    return(
        <div>
            <Navigation/>
            <Lnb></Lnb>
            <div className='ContentWrapper' style={{marginLeft:"10px"}}>
                <main>
                    <div>
                        <h2> {rows.title}</h2>
                        <Link to="/game" className="menu-bars">
                            <Button id="submit" className="submit" variant="contained" >뒤로</Button>
                        </Link>
                    </div>
                        <div style={{height:"500px", border:"1px solid #333333"}}>
                            <div dangerouslySetInnerHTML={ {__html: rows.text} }>
                            </div>
                        </div>
                </main>
            </div>
            
            
        </div>
    );
}

 