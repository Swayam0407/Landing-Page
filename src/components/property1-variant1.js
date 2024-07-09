import React, { useRef, useEffect, useState } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import styles from "./property1-variant1.module.css";

const Property1Variant1 = ({
  className = "",
  institutes,
  theNumberOfInstitutesWhoH,
  vector,
}) => {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      className={[styles.property1variant3, className].join(" ")}
      ref={counterRef}
    >
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
            fontSize: "32px", // Reduced font size
            background: "#272c2e",
            borderRadius: "25px",
            "&:hover": { background: "#272c2e" },
          }}
        >
          {isVisible && (
            <CountUp
              start={0}
              end={10000}
              duration={1.5}
              separator=","
              suffix="+"
            />
          )}
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
