module.exports = {
  replace: require("./replace/replace"),
  replaceBy: require("./replace-by/replace-by"),

  count: require("./array__count/count"),
  countBy: require("./array__count-by/count-by"),
  distinct: require("./array__distinct/distinct"),
  dropLast: require("./array__drop-last/drop-last"),
  filter: require("./array__filter/filter"),
  filterBy: require("./array__filter-by/filter-by"),
  find: require("./array__find/find"),
  findBy: require("./array__find-by/find-by"),
  flatten: require("./array__flatten/flatten"),
  forEach: require("./array__for-each/for-each"),
  has: require("./array__has/has"),
  hasWith: require("./array__has-with/has-with"),
  head: require("./array__head/head"),
  hist: require("./array__hist/hist"),
  indexBy: require("./array__index-by/index-by"),
  join: require("./array__join/join"),
  map: require("./array__map/map"),
  max: require("./array__max/max"),
  min: require("./array__min/min"),
  pluck: require("./array__pluck/pluck"),
  push: require("./array__push/push"),
  reduce: require("./array__reduce/reduce"),
  remove: require("./array__remove/remove"),
  repeat: require("./array__repeat/repeat"),
  sort: require("./array__sort/sort"),
  tail: require("./array__tail/tail"),
  toggle: require("./array__toggle/toggle"),
  zipToObj: require("./array__zip-to-obj/zip-to-obj"),

  deepEqual: require("./core__deep-equal/deep-equal"),
  i: require("./core__i/i"),
  ifThen: require("./core__if-then/if-then"),
  isEmpty: require("./core__is-empty/is-empty"),
  isMatch: require("./core__is-match/is-match"),
  pipe: require("./core__pipe/pipe"),
  raise: require("./core__raise/raise"),
  throttle: require("./core__throttle/throttle"),
  type: require("./core__type/type"),

  findFiles: require("./fs__find-files/find-files"),
  renameFile: require("./fs__rename-file/rename-file"),

  coinToss: require("./number__coin-toss/coin-toss"),
  random: require("./number__random/random"),

  get: require("./object__get/get"),
  hasKey: require("./object__has-key/has-key"),
  merge: require("./object__merge/merge"),
  pick: require("./object__pick/pick"),
  set: require("./object__set/set"),

  contains: require("./string__contains/contains"),
  endsWith: require("./string__ends-with/ends-with"),
  escapeHTML: require("./string__escapeHTML/escapeHTML"),
  escapeRegExp: require("./string__escapeRegExp/escapeRegExp"),
  split: require("./string__split/split"),
  toLower: require("./string__to-lower/to-lower"),
  trim: require("./string__trim/trim"),
}
