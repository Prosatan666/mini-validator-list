import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    backgroundColor: theme.palette.type === "light" ? "#eee" : undefined,
    boxShadow: "none",
    border: "1px solid #ccc"
  }
});

function SimpleCard(props) {
  const { classes, description, value } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {value}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SimpleCard);
