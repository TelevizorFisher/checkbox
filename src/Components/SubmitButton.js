import React from "react";
import { Button, ButtonToolbar } from "rsuite";

function SubmitButton(props) {
  let handleClick = () => {
    console.log("По ссылке кликнули.");
    props.submit();
    console.log(`props`, props);
  };
  let numberListAll = Object.keys(props.list.listAll.filter(Boolean)).length;
  console.log(`numberListAll`, numberListAll);
  return (
    <div>
      <ButtonToolbar>
        <Button onClick={handleClick} color="green">
          SubmitButton
        </Button>
      </ButtonToolbar>

      {numberListAll === 0
        ? props.list.listAllChoice.map((i) => <div key={i.id}>{i.name}</div>)
        : props.list.listAll.map((i) => <div key={i.id}>{i.name}</div>)}
    </div>
  );
}

export default SubmitButton;
