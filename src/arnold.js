(function() {

  /**
   * Arnold
   *
   * @constructor
   */
  var Arnold = function() {

    // Version
    this.version = [0, 1, 0].join('.');

  };

  // List of entities
  var entities = {
  	'&quot': '\u0022',
  	'&amp': '\u0026',
  	'&apos': '\u0027',
  	'&lt': '\u003c',
  	'&gt': '\u003e',
  	'&nbsp': '\(160)',
  	'&iexcl': '\u00a1',
  	'&cent': '\u00a2',
  	'&pound': '\u00a3',
  	'&curren': '\u00a4',
  	'&yen': '\u00a5',
  	'&brvbar': '\u00a6',
  	'&sect': '\u00a7',
  	'&uml': '\u00a8',
  	'&copy': '\u00a9',
  	'&ordf': '\u00aa',
  	'&laquo': '\u00ab',
  	'&not': '\u00ac',
  	'&shy': '\(173)',
  	'&reg': '\u00ae',
  	'&macr': '\u00af',
  	'&deg': '\u00b0',
  	'&plusmn': '\u00b1',
  	'&sup2': '\u00b2',
  	'&sup3': '\u00b3',
  	'&acute': '\u00b4',
  	'&micro': '\u00b5',
  	'&para': '\u00b6',
  	'&middot': '\u00b7',
  	'&cedil': '\u00b8',
  	'&sup1': '\u00b9',
  	'&ordm': '\u00ba',
  	'&raquo': '\u00bb',
  	'&frac14': '\u00bc',
  	'&frac12': '\u00bd',
  	'&frac34': '\u00be',
  	'&iquest': '\u00bf',
  	'&Agrave': '\u00c0',
  	'&Aacute': '\u00c1',
  	'&Acirc': '\u00c2',
  	'&Atilde': '\u00c3',
  	'&Auml': '\u00c4',
  	'&Aring': '\u00c5',
  	'&AElig': '\u00c6',
  	'&Ccedil': '\u00c7',
  	'&Egrave': '\u00c8',
  	'&Eacute': '\u00c9',
  	'&Ecirc': '\u00ca',
  	'&Euml': '\u00cb',
  	'&Igrave': '\u00cc',
  	'&Iacute': '\u00cd',
  	'&Icirc': '\u00ce',
  	'&Iuml': '\u00cf',
  	'&ETH': '\u00d0',
  	'&Ntilde': '\u00d1',
  	'&Ograve': '\u00d2',
  	'&Oacute': '\u00d3',
  	'&Ocirc': '\u00d4',
  	'&Otilde': '\u00d5',
  	'&Ouml': '\u00d6',
  	'&times': '\u00d7',
  	'&Oslash': '\u00d8',
  	'&Ugrave': '\u00d9',
  	'&Uacute': '\u00da',
  	'&Ucirc': '\u00db',
  	'&Uuml': '\u00dc',
  	'&Yacute': '\u00dd',
  	'&THORN': '\u00de',
  	'&szlig': '\u00df',
  	'&agrave': '\u00e0',
  	'&aacute': '\u00e1',
  	'&acirc': '\u00e2',
  	'&atilde': '\u00e3',
  	'&auml': '\u00e4',
  	'&aring': '\u00e5',
  	'&aelig': '\u00e6',
  	'&ccedil': '\u00e7',
  	'&egrave': '\u00e8',
  	'&eacute': '\u00e9',
  	'&ecirc': '\u00ea',
  	'&euml': '\u00eb',
  	'&igrave': '\u00ec',
  	'&iacute': '\u00ed',
  	'&icirc': '\u00ee',
  	'&iuml': '\u00ef',
  	'&eth': '\u00f0',
  	'&ntilde': '\u00f1',
  	'&ograve': '\u00f2',
  	'&oacute': '\u00f3',
  	'&ocirc': '\u00f4',
  	'&otilde': '\u00f5',
  	'&ouml': '\u00f6',
  	'&divide': '\u00f7',
  	'&oslash': '\u00f8',
  	'&ugrave': '\u00f9',
  	'&uacute': '\u00fa',
  	'&ucirc': '\u00fb',
  	'&uuml': '\u00fc',
  	'&yacute': '\u00fd',
  	'&thorn': '\u00fe',
  	'&yuml': '\u00ff',
  	'&OElig': '\u0152',
  	'&oelig': '\u0153',
  	'&Scaron': '\u0160',
  	'&scaron': '\u0161',
  	'&Yuml': '\u0178',
  	'&fnof': '\u0192',
  	'&circ': '\u02c6',
  	'&tilde': '\u02dc',
  	'&Alpha': '\u0391',
  	'&Beta': '\u0392',
  	'&Gamma': '\u0393',
  	'&Delta': '\u0394',
  	'&Epsilon': '\u0395',
  	'&Zeta': '\u0396',
  	'&Eta': '\u0397',
  	'&Theta': '\u0398',
  	'&Iota': '\u0399',
  	'&Kappa': '\u039a',
  	'&Lambda': '\u039b',
  	'&Mu': '\u039c',
  	'&Nu': '\u039d',
  	'&Xi': '\u039e',
  	'&Omicron': '\u039f',
  	'&Pi': '\u03a0',
  	'&Rho': '\u03a1',
  	'&Sigma': '\u03a3',
  	'&Tau': '\u03a4',
  	'&Upsilon': '\u03a5',
  	'&Phi': '\u03a6',
  	'&Chi': '\u03a7',
  	'&Psi': '\u03a8',
  	'&Omega': '\u03a9',
  	'&alpha': '\u03b1',
  	'&beta': '\u03b2',
  	'&gamma': '\u03b3',
  	'&delta': '\u03b4',
  	'&epsilon': '\u03b5',
  	'&zeta': '\u03b6',
  	'&eta': '\u03b7',
  	'&theta': '\u03b8',
  	'&iota': '\u03b9',
  	'&kappa': '\u03ba',
  	'&lambda': '\u03bb',
  	'&mu': '\u03bc',
  	'&nu': '\u03bd',
  	'&xi': '\u03be',
  	'&omicron': '\u03bf',
  	'&pi': '\u03c0',
  	'&rho': '\u03c1',
  	'&sigmaf': '\u03c2',
  	'&sigma': '\u03c3',
  	'&tau': '\u03c4',
  	'&upsilon': '\u03c5',
  	'&phi': '\u03c6',
  	'&chi': '\u03c7',
  	'&psi': '\u03c8',
  	'&omega': '\u03c9',
  	'&thetasym': '\u03d1',
  	'&upsih': '\u03d2',
  	'&piv': '\u03d6',
  	'&ensp': '\u2002',
  	'&emsp': '\u2003',
  	'&thinsp': '\u2009',
  	'&ndash': '\u2013',
  	'&mdash': '\u2014',
  	'&lsquo': '\u2018',
  	'&rsquo': '\u2019',
  	'&sbquo': '\u201a',
  	'&ldquo': '\u201c',
  	'&rdquo': '\u201d',
  	'&bdquo': '\u201e',
  	'&dagger': '\u2020',
  	'&Dagger': '\u2021',
  	'&bull': '\u2022',
  	'&hellip': '\u2026',
  	'&permil': '\u2030',
  	'&prime': '\u2032',
  	'&Prime': '\u2033',
  	'&lsaquo': '\u2039',
  	'&rsaquo': '\u203a',
  	'&oline': '\u203e',
  	'&frasl': '\u2044',
  	'&euro': '\u20ac',
  	'&image': '\u2111',
  	'&weierp': '\u2118',
  	'&real': '\u211c',
  	'&trade': '\u2122',
  	'&alefsym': '\u2135',
  	'&larr': '\u2190',
  	'&uarr': '\u2191',
  	'&rarr': '\u2192',
  	'&darr': '\u2193',
  	'&harr': '\u2194',
  	'&crarr': '\u21b5',
  	'&lArr': '\u21d0',
  	'&uArr': '\u21d1',
  	'&rArr': '\u21d2',
  	'&dArr': '\u21d3',
  	'&hArr': '\u21d4',
  	'&forall': '\u2200',
  	'&part': '\u2202',
  	'&exist': '\u2203',
  	'&empty': '\u2205',
  	'&nabla': '\u2207',
  	'&isin': '\u2208',
  	'&notin': '\u2209',
  	'&ni': '\u220b',
  	'&prod': '\u220f',
  	'&sum': '\u2211',
  	'&minus': '\u2212',
  	'&lowast': '\u2217',
  	'&radic': '\u221a',
  	'&prop': '\u221d',
  	'&infin': '\u221e',
  	'&ang': '\u2220',
  	'&and': '\u2227',
  	'&or': '\u2228',
  	'&cap': '\u2229',
  	'&cup': '\u222a',
  	'&int': '\u222b',
  	'&there4': '\u2234',
  	'&sim': '\u223c',
  	'&cong': '\u2245',
  	'&asymp': '\u2248',
  	'&ne': '\u2260',
  	'&equiv': '\u2261',
  	'&le': '\u2264',
  	'&ge': '\u2265',
  	'&sub': '\u2282',
  	'&sup': '\u2283',
  	'&nsub': '\u2284',
  	'&sube': '\u2286',
  	'&supe': '\u2287',
  	'&oplus': '\u2295',
  	'&otimes': '\u2297',
  	'&perp': '\u22a5',
  	'&sdot': '\u22c5',
  	'&lceil': '\u2308',
  	'&rceil': '\u2309',
  	'&lfloor': '\u230a',
  	'&rfloor': '\u230b',
  	'&lang': '\u27e8',
  	'&rang': '\u27e9',
  	'&loz': '\u25ca',
  	'&spades': '\u2660',
  	'&clubs': '\u2663',
  	'&hearts': '\u2665',
  	'&diams': '\u2666'
  };

  /**
   * Methods
   *
   * List of all available methods.
   */
  var methods = {

    /**
     * Chop
     *
     * @param {string} input
     * @param {number} step
     */
    chop: function(input, step) {

      if (typeof step !== 'number') {
        return undefined;
      }

      var result = [];
      for (var i = 0, len = input.length; i < len;) {
        result.push(input.slice(i, i + step));
        i = (i + step);
      }
      return result;

    },

    /**
     * Join
     *
     * @param {array} input
     * @param {string} separator
     */
    join: function(input, separator) {
      return input.join(separator);
    },

    /**
     * Reverse
     *
     * @param {string} input
     */
    reverse: function(input) {
      return Array.prototype.reverse.call(input.split('')).join('');
    },

    /**
     * Trim
     *
     * @param {string} input
     */
    trim: function(input) {
      return String.prototype.trim.call(input);
    },

    /**
     * Ltrim
     *
     * @param {string} input
     */
    ltrim: function(input) {
      return String.prototype.trimLeft.call(input);
    },

    /**
     * Rtrim
     *
     * @param {string} input
     */
    rtrim: function(input) {
      return String.prototype.trimRight.call(input);
    },

    /**
     * Truncate
     *
     * @param {string} input
     * @param {number} length
     * @param {string} replacement
     */
    truncate: function(input, length, replacement) {

      if (typeof length !== 'number') {
        return undefined;
      }

      return input.slice(0, length) + (replacement || '...');

    },
    
    /**
     * Lines
     *
     * @param {string} input
     */
    lines: function(input) {
      return input.split('\n');
    },

    /**
     * Words
     *
     * @param {string} input
     */
    words: function(input) {
      return input.split(' ');
    },

    /**
     * Chars
     *
     * @param {string} input
     */
    chars: function(input) {
      return input.split('');
    },

    /**
     * Includes
     *
     * @param {string} input
     * @param {string} substring
     */
    includes: function(input, substring) {
      return input.indexOf(substring) !== -1;
    },

    /**
     * Count
     *
     * @param {string} input
     * @param {string} substring
     */
    count: function(input, substring) {

      if (typeof substring !== 'string') {
        return undefined;
      }

      var count = 0, 
          index,
          sublen = substring.length;

      for (var i = 0, len = input.length; i < len;) {
        index = input.indexOf(substring, i);
        if (index === -1) {
          break;
        }
        count++;
        i = (index + sublen);
      }

      return count;

    },

    /**
     * CountSentences
     *
     * @param {string} input
     */
    countSentences: function(input) {
      return input.split(/[?|!|.|;]/gi).length - 1;
    },

    /**
     * CountWords
     *
     * @param {string} input
     */
    countWords: function(input) {
      return input.split(' ').length;
    },
  
    /**
     * CountCharacters
     *
     * @param {string} text
     */
    countCharacters: function(input) {
      return input.replace(/ /gi, '').length;
    },
    
    /**
     * CountLines
     *
     * @param {string} input
     */
    countLines: function(input) {
      return input.split('\n').length;
    },

    /**
     * StripTags
     *
     * @param {string} input
     */
    stripTags: function(input) {
      return input.replace(/<\/?[^>]+>/ig, '');
    },

    /**
     * GetShortestWord
     *
     * @param {string|array} input
     */
    getShortestWord: function(input) {
      return input.reduce(function(memo, word) {
        return (word.length < memo.length) ? word : memo;
      });
    },

    /**
     * GetLongestWord
     *
     * @param {string|array} input
     */
    getLongestWord: function(input, callback) {
      return input.reduce(function(memo, word) {
        return (word.length > memo.length) ? word : memo;
      });
    },

    /**
     * Capitalize
     *
     * @param {string} text
     */
    capitalize: function(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },

    /**
     * Titleize
     *
     * @param {string} text
     */
    titleize: function(text) {
      var output = text.split(' ');
      for (var i = 0, len = output.length - 1; i <= len; i++) {
        output[i] = this.capitalize(output[i]);
      }
      return output.join(' ');
    },

    /**
     * Escape
     *
     * @param {string} html
     */
    escape: function(html) {
      for (var key in entities) {
        if (entities.hasOwnProperty(key)) {
          html = html.replace(new RegExp(entities[key], 'ig'), key);
        }
      }
      return html;
    },

    /**
     * Unescape
     *
     * @param {string} html
     */
    unescape: function(html) {
      for (var key in entities) {
        if (entities.hasOwnProperty(key)) {
          html = html.replace(new RegExp(key, 'ig'), entities[key]);
        }
      }
      return html;
    },

    /**
     * ToFloat
     *
     * @param {string} input
     */
    toFloat: function(input) {
      return parseFloat(input);
    },

    /**
     * ToInt
     *
     * @param {string} input
     */
    toInt: function(input) {
      return parseInt(input);
    },

    /**
     * ToNumber
     *
     * @param {string} input
     */
    toNumber: function(input) {
      return input * 1;
    },
    
    /**
     * ToBoolean
     *
     * @param {string} input
     */
    toBoolean: function(input) {
      return (methods.toNumber(input) === 1) ? true : false;
    },

    /**
     * ToUppercase
     *
     * @param {string} input
     */
    toUppercase: function(input) {
      return String.prototype.toUppercase.call(input);
    },

    /**
     * ToLowercase
     *
     * @param {string} input
     */
    toLowercase: function(input) {
      return String.prototype.toLowercase.call(input);
    }

  };

  /**
   * GenerateMethod
   *
   * @param {string} method
   * @param {functio} fn
   */
  var generateMethod = function(method, fn) {

    Arnold.prototype[method] = function() {
      if ([undefined, null].indexOf(typeof arguments[0]) !== -1 || arguments.length === 0) {
        return undefined;
      }
      return fn.apply(methods, arguments);
    };

  };

  // Goes through all available methods
  for (var method in methods) {
    if (methods.hasOwnProperty(method)) {
      generateMethod(method, methods[method]);
    }
  }

  // Export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = new Arnold();
  } else if (typeof define !== 'undefined') {
    define(function() {
      return new Arnold();
    });
  } else {
    this.Arnold = new Arnold();
  }

}());