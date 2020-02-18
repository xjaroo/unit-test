import { cold } from "jasmine-marbles";
import { from } from "rxjs";
import { concatMap, map, mapTo, mergeMap, switchMap } from "rxjs/operators";
class testA  {}
class testB  {}

describe("Marble testing operators", () => {
  describe("From", () => {
    it('should  emitted', () => {
    const source = from([new testA(),new testB()]);
    expect(source).toBeObservable(source);
    });
  });
});
