# Arnold

[![Build Status](https://secure.travis-ci.org/Baggz/Arnold.png)](http://travis-ci.org/Baggz/Arnold)

Arnold is tiny JavaScript library for string manipulation. You can use it on server side as well on client side.

#### Features

* Arnold has **no dependencies**
* **AMD compatible**, you can load it via [RequireJS](https://github.com/jrburke/requirejs)
* Lightweight
* Fully **documented**

## Download

To install **Arnold**, use [NPM](http://npmjs.org/).

```
$ npm install arnold
```

Releases are available for download from GitHub.

| **Version** | **Description** | **Size** | **Action** |
|:------------|:----------------|:---------|:-----------|
| `arnold.js` | *uncompressed, with comments* | 1 KB | [Download](https://raw.github.com/Baggz/Arnold/master/src/arnold.js) |
| `arnold.min.js` | *compressed, without comments* | 1 KB | [Download](https://raw.github.com/Baggz/Arnold/master/dist/arnold.min.js) |

# Documentation

* [capitalize](#capitalize)
* [chars](#chars)
* [chop](#chop)
* [count](#count)
* [countCharacters](#countCharacters)
* [countLines](#countLines)
* [countSentences](#countSentences)
* [countWords](#countWords)
* [escape](#escape)
* [getLongestWord](#getLongestWord)
* [getShortestWord](#getShortestWord)
* [includes](#includes)
* [join](#join)
* [lines](#lines)
* [ltrim](#ltrim)
* [reverse](#reverse)
* [rtrim](#rtrim)
* [stripTags](#stripTags)
* [titleize](#titleize)
* [toBoolean](#toBoolean)
* [toFloat](#toFloat)
* [toInt](#toInt)
* [toLowercase](#toLowercase)
* [toNumber](#toNumber)
* [toUppercase](#toUppercase)
* [trim](#trim)
* [truncate](#truncate)
* [unescape](#unescape)
* [words](#words)

<a name="capitalize">
### Capitalize

```javascript
Arnold.capitalize('lorem ipsum dolor isamet'); // => Lorem ipsum dolor isamet
```

<a name="chars">
### Chars

```javascript
Arnold.chars('lorem'); // => ['l', 'o', 'r', 'e', 'm']
```

<a name="chop">
### Chop

```javascript
Arnold.chop('lorem ipsum dolor', 4); // => ['lore', 'm ip', 'sum ', 'dolo', 'r']
```

<a name="count">
### Count

```javascript
Arnold.count('lorem ipsum dolor', 'lor'); // => 2
```

<a name="countCharacters">
### CountCharacters

```javascript
Arnold.countCharacters('lorem'); // => 5
```

<a name="countLines">
### CountLines

```javascript
Arnold.countLines('Lorem ipsum.\n Dolor isamet.'); // => 2
```

<a name="countWords">
### CountWords

```javascript
Arnold.countWords('lorem ipsum'); // => 2
```

<a name="escape">
### Escape

```javascript
Arnold.escape('<strong>'); // => &ltstrong&gt
```

<a name="getLongestWord">
### GetLongestWord

```javascript
Arnold.getLongestWord(['lorem', 'ipsum', 'dolor', 'isamet']); // => isamet
```

<a name="getShortestWord">
### GetShortestWord

```javascript
Arnold.getShortestWord(['lo', 'rem']); // => lo
```

<a name="includes">
### Includes

```javascript
Arnold.includes('lorem ipsum', 'rem'); // => true
```

<a name="join">
### Join

```javascript
Arnold.join(['Hello', 'World'], ' '); // => Hello World
```

<a name="lines">
### Lines

```javascript
Arnold.lines('Lorem ipsum.\n Dolor isamet.'); // => ['Lorem ipsum.', 'Dolor isamet.']
```

<a name="ltrim">
### LTrim

```javascript
Arnold.ltrim('  Hello!  '); // => "Hello!  "
```

<a name="reverse">
### Reverse

```javascript
Arnold.reverse('Hello!'); // => !olleH
```

<a name="rtrim">
### RTrim

```javascript
Arnold.rtrim('  Hello!  '); // => "  Hello!"
```

<a name="stripTags">
### StripTags

```javascript
Arnold.stripTags('<strong>Hello!</strong>'); // => Hello!
```

<a name="titleize">
### Titleize

```javascript
Arnold.titleize('lorem ipsum dolor'); // => Lorem Ipsum Dolor
```

<a name="toBoolean">
### ToBoolean

```javascript
Arnold.toBoolean(1); // => true
```

<a name="toFloat">
### ToFloat

```javascript
Arnold.toFloat('12.345 lorem ipsum'); // => 12.345
```

<a name="toInt">
### ToInt

```javascript
Arnold.toInt(12.345); // => 12
```

<a name="toLowercase">
### ToLowercase

```javascript
Arnold.toLowercase('HELLO!'); // => hello!
```

<a name="toNumber">
### ToNumber

```javascript
Arnold.toNumber('123'); // => 123
```

<a name="toUppercase">
### ToUppercase

```javascript
Arnold.toUppercase('hello!'); // => HELLO!
```

<a name="trim">
### Trim

```javascript
Arnold.trim('  Hello!  '); // => Hello!
```

<a name="truncate">
### Truncate

```javascript
Arnold.truncate('Lorem ipsum dolor isamet pidet quidu delime.', 10); // => Lorem ipsu...
Arnold.truncate('Lorem ipsum dolor isamet pidet quidu delime.', 10, '---'); // => Lorem ipsu---
```

<a name="unescape">
### Unescape

```javascript
Arnold.unescape('&ltstrong&gt'); // => <strong>
```

<a name="words">
### Words

```javascript
Arnold.words('Lorem ipsum dolor isamet pidet quidu delime.'); // => ['Lorem', 'ipsum', 'dolor', 'isamet', 'pidet', 'quidu', 'delime.']
```

# Running Tests

```
$ npm test
```

# License

(The MIT License)

Copyright (c) 2011 František Hába &lt;hello@frantisekhaba.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.