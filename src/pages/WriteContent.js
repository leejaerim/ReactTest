
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button} from '@mui/material';
import './WriteContent.css';
import Navigation from '../navi';
import Lnb from './lnb.js';

export default function WriteContent(){
    return(
        <div>
            <Navigation/>
            <Lnb></Lnb>
            <div className='formWrapper'>
                <input className="titleInput" type='text' placeholder='제목' />
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
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
        <Button id="submit" className="submit" variant="contained">전송</Button>
        </div>
    );
}

 