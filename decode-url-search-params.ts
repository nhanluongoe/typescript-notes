import { Union, String } from "ts-toolbelt";

const query = `/home?a=foo&b=wow`;

type Query = typeof query;
type SecondQueryPart = String.Split<Query, "?">[1];
type QueryElements = String.Split<SecondQueryPart, "&">;

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [K in String.Split<QueryElement, "=">[0]]: String.Split<
      QueryElement,
      "="
    >[1];
  };
}[QueryElements[number]];

// we get auto complete here and ts will
// throw error if a param doesn't match
const params: Union.Merge<QueryParams> = {
  a: "foo",
  b: "wow",
  c: "not match",
};
