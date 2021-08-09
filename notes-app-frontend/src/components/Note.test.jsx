import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Note from "./Note";

test("renders content", () => {
  const note = {
    content: "component testing is done with react-testing library",
    important: true,
  };

  const component = render(<Note note={note} />);

  // method1
  expect(component.container).toHaveTextContent(
    "component testing is done with react-testing library"
  );
});

test("clicking the button calls event handler once", () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };

  const mockHandler = jest.fn();

  const component = render(
    <Note note={note} toggleThisImportance={mockHandler} />
  );

  const button = component.getByText("mark not important");
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
