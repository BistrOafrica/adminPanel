import { faMapMarkerAlt, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormControl, InputGroup} from 'react-bootstrap';
import React from 'react-dom';
import dispatchMap from '../dispatchMap';


function DispatchForm(){
    return(
        <>
            <div className="DispatchForm">
                <Form>
                    <h1 className="FormHeading">Where To?</h1>
                    <InputGroup className="pick-up inputGroup">
                    <InputGroup.Text className="fa_addon" id="basic-addon1"><FontAwesomeIcon className="icon" icon={faMapMarkerAlt}/> </InputGroup.Text>
                        <FormControl
                        className="form_area"
                        placeholder="pick-up location"
                        aria-label="PickUpLocation"
                        aria-describedby="basic-addon1"
                        />
                    
                    </InputGroup>
                    <InputGroup className="drop-off inputGroup">
                    <InputGroup.Text className="fa_addon" id="basic-addon1"><FontAwesomeIcon className="icon" icon={faStopCircle}/> </InputGroup.Text>
                        <FormControl
                        className="form_area"
                        placeholder="drop-off location"
                        aria-label="DropOffLocation"
                        aria-describedby="basic-addon1"
                        />
                    
                    </InputGroup>
                </Form>
            </div>
        </>
    );
}

function Dispatch(){
    return(
        <>
            <DispatchForm />
            <dispatchMap />
        </>
    );
}
export default Dispatch