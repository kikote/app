import { splitString } from "./helper";

test("splitString - test 1", () => {
  expect(splitString("foo.json", ".", 0)).toEqual("foo");
});

test("splitString - test 2", () => {
  expect(splitString("bar..csv", ".", 0)).toEqual("bar");
});

test("splitString - test 3", () => {
  expect(splitString("bar.geojson.", ".", 0)).toEqual("bar");
});
