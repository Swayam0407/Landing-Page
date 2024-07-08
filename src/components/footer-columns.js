import Property1Variant1 from "./property1-variant1";
import PropTypes from "prop-types";
import styles from "./footer-columns.module.css";

const FooterColumns = ({ className = "" }) => {
  return (
    <div className={[styles.footerColumns, className].join(" ")}>
      <div className={styles.cards}>
        <Property1Variant1
          institutes="Doctors"
          theNumberOfInstitutesWhoH="The number of doctors who have trusted us."
          vector="/vector.svg"
        />
        <Property1Variant1
          institutes="States"
          theNumberOfInstitutesWhoH="The number of states who have trusted us."
          vector="/group-15.svg"
        />
        <Property1Variant1
          institutes="Institutes"
          theNumberOfInstitutesWhoH="The number of institutes who have trusted us."
          vector="/vector-1.svg"
        />
      </div>
    </div>
  );
};

FooterColumns.propTypes = {
  className: PropTypes.string,
};

export default FooterColumns;
