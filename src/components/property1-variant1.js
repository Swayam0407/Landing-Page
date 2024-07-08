import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./property1-variant1.module.css";

const Property1Variant1 = ({
  className = "",
  institutes,
  theNumberOfInstitutesWhoH,
  vector,
}) => {
  return (
    <div className={[styles.property1variant3, className].join(" ")}>
      <div className={styles.institutesParent}>
        <h1 className={styles.institutes}>{institutes}</h1>
        <div className={styles.theNumberOf}>{theNumberOfInstitutesWhoH}</div>
        <Button
          className={styles.frameChild}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#d2f1db",
            fontSize: "64",
            background: "#272c2e",
            borderRadius: "25px",
            "&:hover": { background: "#272c2e" },
            width: 389,
            height: 97,
          }}
        >
          10000+
        </Button>
      </div>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} loading="lazy" alt="" src={vector} />
      </div>
    </div>
  );
};

Property1Variant1.propTypes = {
  className: PropTypes.string,
  institutes: PropTypes.string,
  theNumberOfInstitutesWhoH: PropTypes.string,
  vector: PropTypes.string,
};

export default Property1Variant1;
