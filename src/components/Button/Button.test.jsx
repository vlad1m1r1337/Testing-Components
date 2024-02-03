import {Button} from "./Button";
import render from "@testing-library/react"

describe("<Button />", () => {
    it("should render successfully and match snapshot", () => {
        const { container } = render(<Button>Click me</Button>);
        expect(container).toMatchSnapshot();
    })
});
