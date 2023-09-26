import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

describe("Card", function () {
  let testImage = TEST_IMAGES[0];
  let testCard = {
    src: testImage.src,
    caption: testImage.caption,
    currNum: 1,
    totalNum: 3
  };

  test("renders without errors", function () {
    render(<Card {...testCard}/>);
  });

  test("matches snapshot", function () {
    const { container, debug } = render(
      <Card  {...testCard}/>
    );
    debug(container);
    expect(container).toMatchSnapshot();
  });


});