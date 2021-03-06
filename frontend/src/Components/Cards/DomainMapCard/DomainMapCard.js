import React from "react";

import { withStyles } from "@material-ui/core/styles";

import ExpandablePanel from "../../../components/Common/ExpandablePanel";
import Loader from "../../../components/Common/Loader";
import Map from "../../../components/DomainMap/Map";
import Button from "../../../components/Common/Button";
import { t, res } from "../../../services/i18nService";

const styles = theme => ({
  panel: {
    width: "100%"
  },
  wrapper: {
    width: "100%"
  }
});

const formatDomainName = domain => {
  const region =
    (domain.city ? domain.city + " " : "") +
    (domain.region_name ? domain.region_name + " " : "");
  const country = domain.country_name ? domain.country_name : "";
  const fullName = (region ? region + ", " : "") + country;
  return fullName || "Unknown";
};

const createLocateDomainOptions = items => {
  return items.map(item => ({
    primaryLabel: item.domain,
    secondaryLabel: formatDomainName(item),
    value: item.domain
  }));
};

class DomainMap extends React.Component {
  state = {
    selectedDomain: undefined
  };

  handleSelectDomain = (key, domain) => {
    this.setState({
      selectedDomain: domain
    });
  };

  handleSelectDomainDialogOpen = () => {
    const domainItem = {
      key: "domainMap",
      primaryLabel: t(res.LOCATE_DOMAIN),
      selectedValue: undefined,
      options: createLocateDomainOptions(this.props.vals.uniqueDomains)
    };
    this.props.onDomainSelectOpen(
      t(res.LOCATE_DOMAIN),
      domainItem,
      this.handleSelectDomain
    );
  };

  render() {
    const { classes, vals, app, isLoading } = this.props;
    const { selectedDomain } = this.state;
    let content = <Loader speed={2} height={230} />;
    let footer = <React.Fragment />;

    if (!isLoading && vals.uniqueDomains) {
      content = (
        <Map
          domains={vals.uniqueDomains}
          selectedDomain={selectedDomain}
          positions={vals.positions}
          themeType={app.themeType}
        />
      );
      footer = (
        <div style={{ width: "100%", textAlign: "right" }}>
          <Button
            buttonText={t(res.LOCATE_DOMAIN)}
            onClick={this.handleSelectDomainDialogOpen}
          />
        </div>
      );
    }

    return (
      <ExpandablePanel
        className={classes.panel}
        title={t(res.DOMAIN_MAP)}
        expanded={false}
        footer={footer}
      >
        <div className={classes.wrapper} key="DomainMap">
          {content}
        </div>
      </ExpandablePanel>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DomainMap);
