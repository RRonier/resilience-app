import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { H1, Body1 } from "../../../component";
import { routes } from "../../../routing";
import RequestSentIllustration from "./RequestSentIllustration";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "auto",
    marginTop: "2rem",
    width: "8rem",
  },
}));

export default function SuccessPage() {
  const { pathname } = useLocation();
  const classes = useStyles();
  return (
    <Box margin="0rem 1rem" display="flex" flexDirection="column">
      {pathname === routes.request.success.donation ? (
        <ByDonationSuccess />
      ) : pathname === routes.request.success.payment ? (
        <ByPaymentSuccess />
      ) : null}

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to={routes.home}
      >
        Continue
      </Button>
    </Box>
  );
}

const ByDonationSuccess = () => (
  <>
    <H1 color="textPrimary" align="left" gutterBottom>
      Request via donation sent!
    </H1>
    <Body1 color="textPrimary" align="left" gutterBottom>
      Once we receive a donation and confirm with the farms, we will notify you prior to delivery.
    </Body1>
  </>
);

const ByPaymentSuccess = () => (
  <>
    <H1 color="textPrimary" align="left" gutterBottom>
      Request Sent!
    </H1>
    <Box display="flex" justifyContent="center" margin="2rem">
      <RequestSentIllustration />
    </Box>
    <Body1 paragraph={true}>
      <b>Thank you for supporting local farms!</b>
    </Body1>
    <Body1 paragraph={true}>Curbside pick up is on Sunday morning between 8:00am-11:00am at:</Body1>
    <Body1 paragraph={true}>
      <i>Weddington Golf & Tennis</i> <br />
      4141 Whitsett Ave.
      <br />
      Studio City, CA
    </Body1>
    <Body1 paragraph={true}>For deliveries, all you need to do is wait!</Body1>
    <Body1 paragraph={true}>The organizer will contact you prior to pick up or delivery.</Body1>
  </>
);
