import React, { Component } from 'react'
import { default as Select } from "react-select";

const options = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]

const GenderBar = ({onChange}) => (
  <Select options={options} onChange={onChange} />
)

export default GenderBar