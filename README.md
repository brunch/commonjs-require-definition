# CommonJS require definition

Simple [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) `require()` definition.

## Usage

Include on top of your file and register modules with `require.register(name, fn)`


```html
<script src="require.js"></script>
<script>
require.register("module", function(exports, require, module) {
  // Expose `count` externally.
  exports.count = 42;
});
console.log(require("module").count);
</script>
```

## API

* `require(name)` — loads registered module and returns its `exports`.
* `require.register(name, fn)` — registers new module. `fn` callback receives `exports, require, module`.
* `require.list()` — lists all registered modules.

## License

The MIT License (MIT)

Copyright (c) 2020 Paul Miller (https://paulmillr.com/)
