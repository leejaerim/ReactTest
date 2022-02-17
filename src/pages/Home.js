import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
function Home(){
    return(
        <div className="d-grid gap-2">
            <ul>
                <Button variant="primary" size="lg">
                    Block level button
                </Button>
                <Button variant="primary" size="lg">
                    Block level button
                </Button>
            </ul>
            <ul>
                <Button variant="primary" size="lg">
                    Block level button
                </Button>
                <Button variant="primary" size="lg">
                    <Link to= '/Table' className="links">
                        4 - Table
                    </Link>
                </Button>
            </ul>
      </div>
    );
}
export default Home;