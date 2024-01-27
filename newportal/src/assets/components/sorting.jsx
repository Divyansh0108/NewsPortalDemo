import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/sorting.css";
function SortButton() {
  const sortOptions = ["Relevance", "Newest", "Last Week", "Last Month"];
  return (
    <Dropdown  as={ButtonGroup}>
      <Button variant="success">Sort by</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        {sortOptions.map((cur) => (
          <Dropdown.Item href="#/action-1">{cur}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortButton;
