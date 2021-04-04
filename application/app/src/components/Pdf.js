import React, {useState, useEffect} from 'react';
import { Page } from 'react-pdf'
import { Document } from 'react-pdf/dist/esm/entry.webpack';

const Pdf= (props) =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    
    return (
        <div>
            <Document
                file="./john-doe.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}

export default Pdf;