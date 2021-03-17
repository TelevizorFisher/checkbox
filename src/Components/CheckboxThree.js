import React from "react";
import { Checkbox, CheckboxGroup } from "rsuite";

class CheckboxThree extends React.Component {
  handleToggle(item) {
    this.props.update(item, !item.checked);
  }

  render() {
    return (
      <div>
			<h3>Список - 3</h3>
        <CheckboxGroup onChange={this.handleChange}>
          {this.props.list.map((item, i) => (
            <Checkbox
              key={item.id}
              onChange={() => this.handleToggle(item)}
              checked={item.checked}
            >
              {item.name}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
    );
  }
}

export default CheckboxThree;
