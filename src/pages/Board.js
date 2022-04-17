import React , { useState, useEffect  }from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navigation from '../navi';
import Lnb from './lnb.js';
import axios from "axios";
import { Redirect } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'author', headerName: 'Author', width: 130 },
  { field: 'title', headerName: 'Title', width: 130 },
  {
    field: 'text',
    headerName: 'Text',
    width: 500,
  },
  {
    field: 'create_at',
    headerName: 'Create_Time',
    description: 'The time when post was created.',
    type:'number'
  },
];
export default function DataTable() {
    function getData() {
        const res = [];
        if(sessionStorage.getItem("uid") == null) {
            return <Redirect to="/" />;
        }else{
            axios.get("http://localhost:8000/app/post/")
            //정상 수행
            .then(Response => {
              if (Response.status === 201 || Response.status === 200){
                for(let i=0; i<Response.data.items.length;i++){
                    Response.data.items[i].fields.id = Response.data.items[i].pk
                    res.push(Response.data.items[i].fields)
                }
                setRows(res);
              } else {
                alert("글쓰기 실패");
              }
            })
            //에러
            .catch(err => {
              console.log(err);
            });
          }
    }
    const [rows, setRows] = useState([]);
    useEffect(() => {
        getData();
      }, []); // rows가 바뀔 때만 effect를 재실행합니다.
  return (
    <div style={{ height: 400, width: '100%' }}>
            <Navigation/>
            <Lnb></Lnb>
      <DataGrid className="Grid"
        style={{margin: '0px 0px 0px 10px'}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onCellDoubleClick={(params, event) => {
          window.location.href = "/viewcontent/"+params.id;
        }}
        initialState={{
          sorting: {
            sortModel: [{ field: 'id', sort: 'desc' }],
          },
        }}
      />
    </div>
  );
}