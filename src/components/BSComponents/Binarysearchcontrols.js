import React from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

const Binarysearchcontrols = (props) => {
  return (
    <div>
      <Card style={{'backgroundColor':'#f5f5f5','width':'300px','height':'200px'}}>
        <div>
          <Button style={{'backgroundColor':'#0e2f44'}} label="Generate Array" className="p-button-rounded" onClick={() => props.fillArrayHandler()} />
        </div>

        <div style={{ marginTop: "10px" }}>
          <InputText
            placeholder="Search Value"
            type="text"
            value={props.searchvalue}
            onChange={(event) =>
              props.setSearchValueHandler(event.target.value)
            }
          ></InputText>
        </div>

        <Button label="Search" className="p-button-rounded"
          style={{ 'marginTop': "50px",'backgroundColor':'#0e2f44' }}
          onClick={() => props.searchHandler()}
        />

      </Card>
    </div>
  );
};

export default Binarysearchcontrols;
