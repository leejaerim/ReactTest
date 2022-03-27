import React, { Component, useState } from "react";
import { Drawer, Button, Typography} from '@mui/material';

function Drawer_lnb(){
    const [sidebar, setSidebar] = useState(true);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setSidebar(false);
      };
    return(
        <div>
            <Drawer
                anchor={"left"}
                open={sidebar}
                onClose={toggleDrawer(false)}
            >
                <Typography variant="h3">
                    Check this out!
                </Typography>
            </Drawer>
        </div>
    )
}
export default Drawer_lnb;