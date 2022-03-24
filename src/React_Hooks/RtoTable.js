import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  table: {
    //border: "1px solid black",
    borderCollapse: "collapse",
    width: "775px"
  },
  row: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    paddingRight: "10px",
    paddingTop: "5px"
  },
  textarea: {
    fontSize: "15px",
    width: "480px",
    height: "30px",
    border: "none",
    fontFamily: "normal"
  },
  textarea5: {
    fontSize: "15px",
    width: "480px",
    height: "200px",
    border: "none",
    fontFamily: "normal"
  }
});

const RtoTable = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.main}>
          <table className={classes.table}>
            <tr>
              <td className={classes.row}>1.</td>
              <td className={classes.row}>From Whom Requisition Received: </td>
              <td className={classes.row}>:</td>
              <td className={classes.row}>
                <textarea className={classes.textarea}></textarea>
              </td>
            </tr>
            <tr>
              <td className={classes.row}>2.</td>
              <td className={classes.row}>Date of Receipt of Requisition: </td>
              <td className={classes.row}>:</td>
              <td className={classes.row}>
                <textarea className={classes.textarea}></textarea>
              </td>
            </tr>
            <tr>
              <td className={classes.row}>3.</td>
              <td className={classes.row}>
                Date, Time and Place of Inspector:{" "}
              </td>
              <td className={classes.row}>:</td>
              <td className={classes.row}>
                <textarea className={classes.textarea}></textarea>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Particular of Vehicles:</td>
            </tr>
            <tr>
              <td></td>
              <td>a.Registration Number:</td>
              <td>:</td>
              <td>
                <textarea className={classes.textarea}></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>b.Class of Vehicle:</td>
              <td>:</td>
              <td>
                <textarea className={classes.textarea}></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>c.Make:</td>
              <td>:</td>
              <td>
                <textarea className={classes.textarea}></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>d.Colour:</td>
              <td>:</td>
              <td>
                <textarea className={classes.textarea}></textarea>
              </td>
            </tr>
            <tr>
              <td className={classes.row}>5.</td>
              <td className={classes.row}>
                Mechanical Condition of the Motor Vehicle
                <br />
                damages due to Impact:
              </td>
              <td className={classes.row}>:</td>
              <td className={classes.row}>
                <textarea className={classes.textarea5}></textarea>
              </td>
            </tr>
            <tr>
              <td className={classes.row}>6.</td>
              <td className={classes.row}>Brake System: </td>
              <td className={classes.row}>:</td>
              <td className={classes.row}>
                <textarea className={classes.textarea}></textarea>
              </td>
            </tr>
            <tr>
              <td className={classes.row}>7.</td>
              <td className={classes.row}>
                Observations made at the <br />
                Spot of accident:{" "}
              </td>
              <td className={classes.row}>:</td>
              <td className={classes.row}>
                <textarea className={classes.textarea}>Not Visited</textarea>
              </td>
            </tr>
            <tr>
              <td className={classes.row}>8.</td>
              <td className={classes.row}>
                Brief Particular of Cause of <br />
                Accident should be furnished
              </td>
              <td className={classes.row}>:</td>
              <td className={classes.row}>
                <textarea className={classes.textarea}>
                  I am of the opinion that the said accident was not due to any
                  mechanical defects of the motor vehicle.
                </textarea>
              </td>
            </tr>
            <tr>
              <td className={classes.row}>9.</td>
              <td className={classes.row}>
                General remarks of the Inspector of <br />
                Motor Vehicles{" "}
              </td>
              <td className={classes.row}>:</td>
              <td className={classes.row}>
                <textarea className={classes.textarea}>
                  I.O. is requested to verify the MDL & Documents for further
                  verification.
                </textarea>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default RtoTable;
