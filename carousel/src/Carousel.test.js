import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

describe("Carousel", function () {
  test("renders without errors", function () {
    render(<Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);
  });

  test("works when you click on the right arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
  });

  test("works when you click on the left arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    // Move to 2nd item
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
  });

  test("hides left arrow when you load initially (at first img)", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    let leftArrow = container.querySelector(".bi-arrow-left-circle");
    const rightArrow = container.querySelector(".bi-arrow-right-circle");

    expect(leftArrow).not.toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    fireEvent.click(rightArrow);
    leftArrow = container.querySelector(".bi-arrow-left-circle");
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    fireEvent.click(rightArrow);
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).not.toBeInTheDocument();
  });

  test("matches snapshot", function () {
    const { container, debug } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    debug(container);
    expect(container).toMatchSnapshot();
  });
});
