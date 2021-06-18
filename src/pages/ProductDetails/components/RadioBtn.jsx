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
      <RadioGroup
        aria-label="val1"
        name="val1"
        value={value}
        onChange={handleChange}
      >
        {data.map((item) => {
          return (
            <FormControlLabel
              value={item.subcategory.nameRu}
              control={<Radio />}
              label={item.products.configuration}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
