import React, { useState } from "react";
import PropTypes from 'prop-types';
import Datetime from "react-datetime";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Schedule from "@material-ui/icons/Schedule";
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

import { FixedSizeList } from "react-window";
import { useTranslation } from "react-i18next";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import CustomTabs from "components/CustomTabs/CustomTabs";
import VideoPlayer from "components/Video/VideoPlayer";

const useStyles = makeStyles(styles);

export default function SectionVideo() {

  const [URL, setURL] = useState(null)
  const [isAudio, setAudio] = useState(false)
  const [selectedNum, setselectedNum] = useState(0)
  const classes = useStyles();
  const { t, i18n } = useTranslation()

  function renderRow(props) {
    const { index, style } = props;
    const text = isAudio ? t("site.audioprogram") : t("site.videoprogram")
    if (selectedNum + index + 1 > 827) {
      return <div>...</div>
    }
    else {
      return (
        <ListItem button style={style} key={index} onClick={() => clickHandler(selectedNum + index + 1)}>
          <ListItemText primary={text + ' #' + (selectedNum + index + 1)} />
        </ListItem >
      );
    }
  }
  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };
  function renderFirstRow(props) {
    const { index, style } = props;
    const series = index * 100;
    return (
      <ListItem button style={style} key={index} onClick={() => clickSeriesHandler(series)} >
        <ListItemText primary={`${index * 100}-${series + 100}`} />
      </ListItem >
    );
  }
  renderFirstRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };
  const clickOnTabs = (e) => {
    console.log(e)
    if (e === 1) {
      setAudio(true)
    } else {
      setAudio(false)
    }
  }
  const clickHandler = (e) => {
    setURL(e)
  }
  const clickSeriesHandler = (e) => {
    setselectedNum(e)
  }
  const tabContentFunction = () => (
    <GridContainer dir={i18n.dir()}>
      <GridItem xs={5} sm={5} md={5} lg={5}>
        <FixedSizeList height={240} itemSize={46} itemCount={9} style={{ direction: i18n.dir() }} className={'scrollableProps'}>
          {renderFirstRow}
        </FixedSizeList>
      </GridItem>
      <GridItem xs={7} sm={7} md={7} lg={7}>
        <FixedSizeList height={240} itemSize={46} itemCount={100} style={{ direction: i18n.dir() }} className={'scrollableProps'}>
          {renderRow}
        </FixedSizeList>
      </GridItem>
    </GridContainer>
  )
  return (
    < div className={classes.section} >
      <div className={classes.container}>
        <h3 id={"programarchive"} className={classes.titr}>{t("site.programarchive")}</h3>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} style={{ margin: 'auto' }}>
            <CustomTabs
              clickOnTabs={clickOnTabs}
              headerColor="primary"
              tabs={[
                {
                  tabName: t("site.video"),
                  tabIcon: OndemandVideoIcon,
                  tabContent: (tabContentFunction())
                },
                {
                  tabName: t("site.audio"),
                  tabIcon: AudiotrackIcon,
                  tabContent: (tabContentFunction())
                },
                {
                  tabName: t("site.schedule"),
                  tabIcon: Schedule,
                  tabContent: (
                    <Datetime style={{ margin: 'auto' }} input={false} timeFormat={false} />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6} style={{ margin: 'auto' }}>
            <VideoPlayer classList={classes.reactPlayer} URL={URL} />
          </GridItem>
        </GridContainer>
      </div>
    </div >
  );
}