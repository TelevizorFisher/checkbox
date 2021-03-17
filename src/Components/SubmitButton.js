import React from "react";
import { Button, ButtonToolbar } from "rsuite";

function SubmitButton(props) {
  debugger;
  let handleClick = () => {
    console.log("По ссылке кликнули.");
    props.submit();
  };

  return (
    <div>
      <ButtonToolbar>
        <Button onClick={handleClick} color="green">
          SubmitButton
        </Button>
      </ButtonToolbar>
      {props.list.listAll.map((i) => (
        <div key={i.id}>{i.name}</div>
      ))}
    </div>
  );
}

export default SubmitButton;
