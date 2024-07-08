import PropTypes from "prop-types";
import styles from "./cards-container.module.css";

const CardsContainer = ({ className = "" }) => {
  return (
    <footer className={[styles.cardsContainer, className].join(" ")}>
      <div className={styles.footerItems}>
        <div className={styles.footerContent}>
          <div className={styles.footerRowsWrapper}>
            <div className={styles.footerRows}>
              <div className={styles.manualsParent}>
                <div className={styles.manuals}>Manuals</div>
                <div className={styles.state}>State</div>
                <div className={styles.district}>District</div>
                <div className={styles.institute}>Institute</div>
              </div>
              <div className={styles.appStoreContainer}>
                <div className={styles.support}>Support</div>
                <div className={styles.contactUs}>Contact Us</div>
                <div className={styles.supportPortal}>Support Portal</div>
              </div>
              <div className={styles.appDownload}>
                <img
                  className={styles.cibappStoreIosIcon}
                  loading="lazy"
                  alt=""
                  src="/cibappstoreios.svg"
                />
                <img
                  className={styles.mageplaystoreIcon}
                  loading="lazy"
                  alt=""
                  src="/mageplaystore1.svg"
                />
                <div className={styles.downloadSandesApp}>
                  Download Sandes App
                </div>
              </div>
              <div className={styles.copyright}>
                <img
                  className={styles.download21}
                  loading="lazy"
                  alt=""
                  src="/download-2-1@2x.png"
                />
                <div className={styles.sandesServices}>Sandes Services</div>
                <div className={styles.governmentInstantMessagingContainer}>
                  <p
                    className={styles.governmentInstantMessaging}
                  >{`Government Instant Messaging System `}</p>
                  <p
                    className={styles.enabledApplication}
                  >{`enabled Application `}</p>
                </div>
                <div className={styles.allRightsReservedContainer}>
                  <p className={styles.p}>© 2010 - 2024</p>
                  <p className={styles.allRightsReserved}>
                    All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.websiteDesignedAnd}
          >{`Website designed and maintained by National Informatics Centre, Haryana `}</div>
        </div>
        <div className={styles.preview}>
          <img
            className={styles.nicPreview15082f03c0847e7ffIcon}
            loading="lazy"
            alt=""
            src="/nic-preview15082f03c0847e7ff9844-1@2x.png"
          />
        </div>
      </div>
    </footer>
  );
};

CardsContainer.propTypes = {
  className: PropTypes.string,
};

export default CardsContainer;
