/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

// @material-ui/icons
import { Archive, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const { t } = useTranslation()

  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={t('site.programs')}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Archive}
          dropdownList={[
            <NavLink to="#programarchive" className={classes.dropdownLink}>
              {t('site.audioprograms')}
            </NavLink>,
            <NavLink to="#programarchive" className={classes.dropdownLink}>
              {t('site.videoprograms')}
            </NavLink>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={t('site.donate')}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={MonetizationOnIcon}
          dropdownList={[
            <Link to="https://www.parvizshahbazi.com/support_ir.html" className={classes.dropdownLink}>
              {t('site.iran')}
            </Link>,
            <Link to="https://www.parvizshahbazi.com/support_us.html" className={classes.dropdownLink}>
              {t('site.usa')}
            </Link>,
            <Link to="https://www.parvizshahbazi.com/support_eu.html" className={classes.dropdownLink}>
              {t('site.europe')}
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.parvizshahbazi.com/live_radio.php"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> {t('site.download')}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="http://parvizshahbazi.com/ganj_videos/register.php"
          color="transparent"
          target="_blank"
          className={classes.navLink} >
          <AssignmentIndIcon className={classes.icons} /> {t('site.subscribe')}
        </Button>
      </ListItem>
    </List>
  );
}
