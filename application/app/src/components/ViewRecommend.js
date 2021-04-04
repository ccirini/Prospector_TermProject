import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const ViewRecommends = () =>{
    return(
        <div className="viewRecommends">
            <h1>Recommendations</h1>
            <Form>
                <Button href="/prohome" variant="outline-dark">Search Students</Button>
            </Form>
        </div>

    );
}

export default ViewRecommends;