import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({type, setType}) {

  const handleChange = (event, newAlignment) => {
    setType(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={type}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="aleatorio">Lider Aleatorio</ToggleButton>
      <ToggleButton value="predefinido">Lider Predefinido</ToggleButton>
    </ToggleButtonGroup>
  );
}