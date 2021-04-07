import axios from 'axios'
import "./Pdf.css"
import React, { useState, useEffect } from 'react'
// import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
// import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import Button from 'react-bootstrap/Button'

const API_BASE = 'http://54.70.249.83:5000'

const Pdf = () => {

    const [resume, setResume] = useState('');
    const [buf, setBuf] = useState('');
    const mimeType = 'application/pdf';

    useEffect(() => {
        axios.get(`${API_BASE}/resume?userId=2`)
        .then(res => {
            const buffer = res.data[0].data;
            const b64 = new Buffer(buffer).toString('base64');
            setResume(b64);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);


    return(
        <div>
            {/* <img src={`${objectURL}`} /> */}
            {/* <a href={`data: application/pdf; base64,${resume}`}>Download pdf</a> */}

            {/* <iframe src={`data: application/pdf; base64,${resume}`} title="title" className="thumbnail">
                Presss me: <a href={`data: application/pdf; base64,${resume}`}>Download PDF</a>
            </iframe> */}

            <a href={`data: application/pdf; base64,${resume}`} download><Button>Download Resume</Button></a>


            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                <div style={{ height: '750px' }}>
                    <Viewer fileUrl={`data: image/jpeg; base64,${resume}`} />
                </div>
            </Worker> */}
        </div>
    );
}

export default Pdf;