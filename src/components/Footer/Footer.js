/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(styles);

export default function Footer(props) {

  const { t } = useTranslation()

  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/b3hr4d/ganje-hozour"
                className={classes.block}
                target="_blank" >
                {t('site.ganjehozour')}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/about"
                className={classes.block}
                target="_blank" >
                {t('site.aboutus')}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.parvizshahbazi.com/"
                className={classes.block}
                target="_blank" >
                {t('site.blog')}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://www.ganjnama.com/"
                className={classes.block}
                target="_blank" >
                {t('site.ganjnama')}
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , {t('site.madewith')}{" "}
          <Favorite className={classes.icon} /> {t('site.by')}{" "}
          <a
            href="https://github.com/b3hr4d"
            className={aClasses}
            target="_blank">
            B3HR4D
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
