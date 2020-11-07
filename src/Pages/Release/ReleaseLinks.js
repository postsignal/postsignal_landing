import React, { Component } from "react";
import {
  CardActions,
  CardMedia,
  Button,
  ButtonGroup,
  Grid,
} from "@material-ui/core";

class ReleaseLinks extends Component {
  render() {
    return (
      <CardActions>
        <ButtonGroup
          orientation="vertical"
          color="secondary"
          variant="text"
          style={{ width: "100%" }}
        >
          {this.props.links.map((link) => (
            <Button
              href={link.url}
              target="_blank"
              key={link.name}
              style={{ padding: 20 }}
            >
              <Grid
                container
                spacing={1}
                justify="space-around"
                alignItems="center"
              >
                <Grid item>
                  <CardMedia
                    component="img"
                    alt={link.name}
                    image={`/img/logos/${link.logoImg}`}
                    style={{ maxWidth: 130 }}
                  />
                </Grid>
                <Grid item>cлушать</Grid>
              </Grid>
            </Button>
          ))}
        </ButtonGroup>
      </CardActions>
    );
  }
}

export default ReleaseLinks;
