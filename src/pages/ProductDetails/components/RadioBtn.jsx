import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioBtn({}) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products/category/1");
      const jsonResponse = await res.json();
      setData(jsonResponse.subcategories);
    };

    getData();
  }, [setData]);

  return (
    <FormControl component="fieldset">
      
        {data.map((item) => {
          return (
            <RadioGroup
            aria-label={item.subcategory.id}
            name={item.subcategory.name}
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={item.subcategory.name}
              control={<Radio />}
              label={item.subcategory.name}
            />
             </RadioGroup>
          );
        })}
     
    </FormControl>
  );
}
