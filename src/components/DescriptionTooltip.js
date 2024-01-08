import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Popover } from "react-bootstrap";
import PopoverContent from "./PopoverContent";

function DescriptionTooltip({ description }) {
    const [placement, setPlacement] = useState("right");
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1200) { // Bootstrap's small breakpoint
          setPlacement("bottom-start");
        } else {
          setPlacement("right");
        }
      };
  
      // Set initial value
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    const popover = (
        <Popover
            id='popover-basic'
            style={{ maxWidth: "none", width: "300px" }}
        >
            <Popover.Header as='h3'>
                {description?.popoverHeader}
            </Popover.Header>
            <Popover.Body>
                <PopoverContent text={description?.descriptionText} />
            </Popover.Body>
        </Popover>
    );
    return (
        <OverlayTrigger
            placement={placement}
            trigger={["hover", "focus"]}
            overlay={popover}
        >
            <Button variant='outline-primary'>
                <i
                    className='bi bi-question-circle'
                    style={{ cursor: "pointer", fontSize: "1rem" }}
                ></i>
            </Button>
        </OverlayTrigger>
    );
}

export default DescriptionTooltip;
