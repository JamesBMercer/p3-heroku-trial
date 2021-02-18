import React, { Component } from 'react'
import { default as Select } from "react-select";

const options = [
  { value: 'AU', label: 'AU' },
  { value: 'BR', label: 'BR' },
  { value: 'CA', label: 'CA' },
  { value: 'CH', label: 'CH' },
  { value: 'DE', label: 'DE' },
  { value: 'DK', label: 'DK' },
  { value: 'ES', label: 'ES' },
  { value: 'FI', label: 'FI' },
  { value: 'FR', label: 'FR' },
  { value: 'GB', label: 'GB' },
  { value: 'IE', label: 'IE' },
  { value: 'IR', label: 'IR' },
  { value: 'NO', label: 'NO' },
  { value: 'NL', label: 'NL' },
  { value: 'NZ', label: 'NZ' },
  { value: 'TR', label: 'TR' },
  { value: 'US', label: 'US' },
]

const CountryBar = ({onChange}) => (
  <Select options={options} onChange={onChange}/>
)

export default CountryBar