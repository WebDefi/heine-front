import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="val1" name="val1" value={value} onChange={handleChange}>
        <FormControlLabel value="DELTA 20T Набір - USB акумуляторна ручка" control={<Radio />} label="DELTA 20T Набір - USB акумуляторна ручка" />
      </RadioGroup>
    </FormControl>
  );
}