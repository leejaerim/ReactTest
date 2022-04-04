
import React , { useState }from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button} from '@mui/material';
import './WriteContent.css';
import Navigation from '../navi';
import Lnb from './lnb.js';
import axios from "axios";
import { Redirect } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

export default function WriteContent(){
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const sendMessage = ()=> {
        if(title==""||text==""){
            alert("정보를 정확히 입력해주세요.");
        }else if(sessionStorage.getItem("uid") == null) {
            return <Redirect to="/" />;
        }else{
            axios.post("http://localhost:8000/app/post/", {
                author : sessionStorage.getItem("uid"),
                title : title,
                text : text
            })
            //정상 수행
            .then(Response => {
                debugger;
              if (Response.status === 201 || Response.status === 200){
                if(Response.data.status === 'Success') {
                  alert("글쓰기 성공");
                }else{
                  alert(Response.data.Error)
                }
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
    return(
        <div>
            <Navigation/>
            <Lnb></Lnb>
            <div className='formWrapper'>
                <input className="titleInput" type='text' placeholder='제목' onChange={(e)=>{setTitle(e.target.value)}} />
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setText(data)
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        <Button id="submit" className="submit" variant="contained" onClick={sendMessage}>전송</Button>
        </div>
    );
}

 