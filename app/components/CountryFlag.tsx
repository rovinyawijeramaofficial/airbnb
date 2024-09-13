import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useCountries } from "../lib/getCountries";

interface CountryFlagProps {
  location: string; // Country code, e.g., 'US'
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ location }) => {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);

  return (
    <div className="flex items-center">
      <ReactCountryFlag
        countryCode={location}
        svg
        style={{
          width: '1.5em',
          height: '1.5em',
          borderRadius: '50%',
          marginRight: '0.5em',
        }}
        title={location}
      />
      {country?.label} / {country?.region}
    </div>
  );
};
