import { expect, test } from "vitest";

const likes = (names: Array<string>) => {
  const lastName = names[names.length - 1]
  const namesString = names.slice(0, names.length - 1).join(', ')

  switch (names.length) {
    case 0:
      return `no one likes this`
      break;

      case 1:
      return `${names} likes this`
      break;

      case 2:
        return `${namesString} and ${lastName} like this`
      break;

      case 3:
        return `${namesString} and ${lastName} like this`
      break;
  
    default:    
      return `${names.slice(0, names.length - 2).join(', ')} and ${names.length - 2} others like this`
      break;
  }

};

test("12. Who likes it?", () => {
  expect(likes([])).eq("no one likes this");
  expect(likes(["Peter"])).eq("Peter likes this");
  expect(likes(["Jacob", "Alex"])).eq("Jacob and Alex like this");
  expect(likes(["Max", "John", "Mark"])).eq("Max, John and Mark like this");
  expect(likes(["Alex", "Jacob", "Mark", "Max"])).eq(
    "Alex, Jacob and 2 others like this"
  );
});
