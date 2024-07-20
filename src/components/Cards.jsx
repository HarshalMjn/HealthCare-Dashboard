// Cards.js
import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({ icon, title, value, unit, status, backgroundColor }) => {
  return (
    <div className={`mt-4 m-2  flex flex-col font-manrope pl-4 w-[250px] h-[242px]  p-4    rounded-lg shadow-md  items-start`} style={{ backgroundColor }}>
      <div className="ml-0">
        <img src={icon} alt={`${title} icon`} className="w-24 h-24" />
      </div>
      <div>
        <h4 className="mt-2 text- align-left text-richBlue-1 leading-9  ">{title}</h4>
        <p className="font-semibold text-3xl font-manrope">{value} {unit}</p>
        <p className="text-richBlue-1">{status}</p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

export default Cards;
