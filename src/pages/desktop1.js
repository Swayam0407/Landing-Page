import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PasswordCaptchaInput from "../components/password-captcha-input";
import FooterColumns from "../components/footer-columns";
import CardsContainer from "../components/cards-container";
import styles from "./desktop1.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop4}>
      <section className={styles.wrapperBgParent}>
        <div className={styles.wrapperBg}>
          <img className={styles.bgIcon} alt="" src="/bg.svg" />
        </div>
        <img
          className={styles.medImgIcon}
          loading="lazy"
          alt=""
          src="/med-img@2x.png"
        />
      </section>
      <header className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <img
              className={styles.download2Icon}
              loading="lazy"
              alt=""
              src="/download-2@2x.png"
            />
          </div>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className={styles.navOptions}>
            <div className={styles.logoContainer1}>
              <div className={styles.logoContainer2}>
                <img
                  className={styles.download1Icon}
                  loading="lazy"
                  alt=""
                  src="/download-1@2x.png"
                />
              </div>
              <img
                className={styles.azadiKaAmritMahotsavHindiIcon}
                loading="lazy"
                alt=""
                src="/azadikaamritmahotsavhindilogo1be5e3568cseeklogocom-1@2x.png"
              />
              <div className={styles.logoRow}>
                <img
                  className={styles.g20Logoc086cdd59e99dff909adIcon}
                  loading="lazy"
                  alt=""
                  src="/g20logoc086cdd59e99dff909ad-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.spacer} />
      <section className={styles.loginFormContainerWrapper}>
        <div className={styles.loginFormContainer}>
          <form className={styles.login}>
            <div className={styles.accountLoginContainer}>
              <h1 className={styles.accountLogin}>Account Login</h1>
              <div className={styles.usernameContainer}>
                <div className={styles.usernameFieldContainer}>
                  <div className={styles.username}>Username</div>
                </div>
                <input className={styles.usernameContainerChild} type="text" />
              </div>
            </div>
            <div className={styles.inputFieldsContainer}>
              <PasswordCaptchaInput />
              <div className={styles.inputLabelsContainer}>
                <div className={styles.captchaWrapper}>
                  <div className={styles.captcha}>Captcha</div>
                </div>
                <TextField
                  className={styles.inputLabelsContainerChild}
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#000" },
                    "& .MuiInputBase-root": {
                      height: "68px",
                      borderRadius: "15px",
                    },
                  }}
                />
              </div>
              <Button
                className={styles.inputFieldsContainerChild}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "44",
                  background: "#c39433",
                  borderRadius: "15px",
                  fontSize: "42px",
                  "&:hover": { background: "#c39433" },
                  height: 68,
                }}
              >
                Login
              </Button>
              <div className={styles.forgotPasswordWrapper}>
                <div className={styles.forgotPassword}>Forgot Password?</div>
              </div>
            </div>
          </form>
          <div className={styles.links}>
            <div className={styles.linksWrapper}>
              <h1 className={styles.links1}>Links</h1>
            </div>
            <Button
              className={styles.linksContainer}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "rgba(81, 40, 136, 0.8)",
                fontSize: "24px",
                background: "#e9b26f",
                border: "#000 solid 1px",
                borderRadius: "40px",
                "&:hover": { background: "#e9b26f" },
                height: 45,
              }}
            >
              Admin Registration
            </Button>
            <Button
              className={styles.linksContainer1}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "rgba(81, 40, 136, 0.8)",
                fontSize: "24px",
                background: "#e9b26f",
                border: "#000 solid 1px",
                borderRadius: "40px",
                "&:hover": { background: "#e9b26f" },
                height: 45,
              }}
            >
              Doctor Registration
            </Button>
            <Button
              className={styles.linksContainer2}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "rgba(81, 40, 136, 0.8)",
                fontSize: "24px",
                background: "#e9b26f",
                border: "#000 solid 1px",
                borderRadius: "40px",
                "&:hover": { background: "#e9b26f" },
                height: 45,
              }}
            >
              Institute Registration
            </Button>
            <Button
              className={styles.linksContainer3}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "rgba(81, 40, 136, 0.8)",
                fontSize: "24px",
                background: "#e9b26f",
                border: "#000 solid 1px",
                borderRadius: "40px",
                "&:hover": { background: "#e9b26f" },
                height: 45,
              }}
            >
              Additional Links
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.footerColumnsParent}>
        <FooterColumns />
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <CardsContainer />
      </section>
    </div>
  );
};

export default Desktop1;
