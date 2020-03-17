import currencyFormatter from "../currencyFormatter";

it('formats currency to "{code} {number}" pattern', () => {
  const result = currencyFormatter("EUR", 20.2132);
  expect(result).toMatchInlineSnapshot(`"€20.21"`);
});
it("formats currency with accurate fraction digits", () => {
  const result = currencyFormatter("EUR", 20.2132, 4);
  expect(result).toMatchInlineSnapshot(`"€20.2132"`);
});
