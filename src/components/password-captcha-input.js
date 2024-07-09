import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./password-captcha-input.module.css";

const PasswordCaptchaInput = ({ className = "" }) => {
  return (
    <div className={[styles.passwordCaptchaInput, className].join(" ")}>
      <div className={styles.passwordWrapper}>
        <div className={styles.password}>Password</div>
      </div>
      <TextField
        className={styles.passwordSpacing}
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#000" },
          "& .MuiInputBase-root": { height: "66.3px", borderRadius: "15px" },
        }}
      />
    </div>
  );
};

PasswordCaptchaInput.propTypes = {
  className: PropTypes.string,
};

export default PasswordCaptchaInput;
