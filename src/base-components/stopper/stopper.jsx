import React from "react";
import PropTypes from "prop-types";
import "./stopper.scss";

export function Stopper({ id }) {
  return (
    <div id="stopper-container">
      <div className="stopper">abc:80</div>
    </div>
  );
}

Stopper.propTypes = {
  id: PropTypes.string,
};

Stopper.defaultProps = {};
