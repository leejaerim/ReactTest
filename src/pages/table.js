import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
function Table(){
    return(
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
                        찌개
            </Button>
            <Button variant="primary" size="lg">
                        계란말이
            </Button>
            <Button variant="primary" size="lg">
                        추가 - 1000원
            </Button>
            <Button variant="primary" size="lg">
                        소주/맥주 - 4000원
            </Button>
            <Button variant="primary" size="lg">
                        계산
            </Button>
            <Alert variant='primary'>
                총액 
            </Alert>
        </div>
    );
}
export default Table;