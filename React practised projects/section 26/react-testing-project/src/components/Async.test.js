import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn(); //this creates a dummy function fro you
    //by above code we replaced our fetch function with dummy fnction
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    //now we rae not really sending a request and is simulating it ,simulating the success case
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
