import React from "react";
import { makeStyles } from "@mui/styles";
import RtoTable from "./RtoTable";

const useStyles = makeStyles({
  root: {
    display: "flex",
    //border: "2px solid black",
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    border: "none",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "140px",
  },
  boxBorder: {
    border: "1px solid black",
  },
  box: {
    paddingTop: "10px",
  },
  label: {
    fontSize: "12px",
    fontWeight: "bold",
    paddingLeft: "10px",
  },
  mainText: {
    textAlign: "center",
    width: "400px",
    paddingTop: "10px",
    paddingRight: "10px"
  },
  text1: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  text2: {
    fontSize: "12px",
  },
  text3: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  table: {
      padding: "10px"
  },
  footer: {
    width: "770px",
      padding: "10px"
  },
  signature: {
      textAlign: "right"
  },
  bottomText: {
      paddingLeft: "10px"
  },
  date: {
      paddingBottom: "10px" 
  },
});

const RtoFile = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.mainText}>
            <div className={classes.text1}>GOVERNMENT OF KARNATAKA</div>
            <div className={classes.text2}>TRANSPORT DEPARTMENT</div>
            <div className={classes.text3}>MOTOR VEHICLE ACCIDENT REPORT</div>
          </div>

          <div className={classes.box}>
            <div className={classes.boxBorder}>
              <label className={classes.label}>C.R. No. : </label>
              <input className={classes.input} type="text" />
            </div>
            <div className={classes.boxBorder}>
              <label className={classes.label}>Sec : </label>
              <input className={classes.input} type="text" />
            </div>
          </div>
        </div>
        <div className={classes.table}>
          <RtoTable />
        </div>
        <div className={classes.footer}>
          <div>
            <div className={classes.date}>Date: <input className={classes.input} type="text"/></div>
            <div className={classes.place}>Place: <input className={classes.input} type="text"/></div>
          </div>

          <div className={classes.signature}>Name & Signature of I.M.V</div>
        </div>
      </div>

      <div className={classes.bottomText}>
            Report forward to the Circle / Sub –Inspector of the Police
            ..................................................................................................
          </div>
    </>
  );
};

export default RtoFile;
