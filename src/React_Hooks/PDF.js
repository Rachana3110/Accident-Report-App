import React from 'react';
import { makeStyles } from "@mui/styles";
import ReactTOPdf from "react-to-pdf";
import RtoFile from './RtoFile';

const useStyles = makeStyles({
    main: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        //backgroundColor:"grey",
    },
    downloadButton: {
        padding: "20px",
        display: "flex",
        justifyContent: "left",
    }
  });

const ref = React.createRef();

const PDF = () => {
    const classes = useStyles();
  return (
    <>
      <div className={classes.main} >
        <div className={classes.pdf_container} ref={ref}>
          <RtoFile/>
        </div>
        <div className={classes.downloadButton}>
        <ReactTOPdf targetRef={ref} >
          {({ toPdf }) => 
            <button onClick={toPdf} className={classes.get_started}>
              Download
            </button>
          }
        </ReactTOPdf>
        </div>
      </div>
    </>
  )
}

export default PDF;