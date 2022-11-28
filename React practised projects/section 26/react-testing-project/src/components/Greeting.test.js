import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting component ", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //... nothing

    //Assert
    //   const helloWorldElement = screen.getByText("Hello World"); //this looks fro exact match but actually world! is there not world so fail
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders" good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test('renders "Changed!" if the button was clicked ', () => {
    //Arrange
    render(<Greeting />);
    //Act : since on the button there is an action coming
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  //a diffrent case
  test('does not render "good to see you " if the button was clicked ', () => {
    //Arrange
    render(<Greeting />);
    //Act : since on the button there is an action coming
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
