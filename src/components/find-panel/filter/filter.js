/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React from 'react';
import './filter.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/action';

function Filter({
  showLowPrice, showFastFly, showLowPriceFlag, showFastFlyFlag,
}) {
  let price = '';
  let fly = '';

  if (showLowPriceFlag) price = 'flag';
  if (showFastFlyFlag) fly = 'flag';

  return (
    <div className="filter">
      <div
        className={price}
        onClick={showLowPrice}
      >
        Самый дешёвый
      </div>
      <div
        className={fly}
        onClick={showFastFly}
      >
        Самый быстрый

      </div>
      <div>Оптимальный</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  showLowPriceFlag: state.showLowPrice,
  showFastFlyFlag: state.showFastFly,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
