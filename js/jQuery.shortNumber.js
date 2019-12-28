/*
  Usage: $(node).shortNumber(4711) sets the contents of `node` (to "4.7k")
         $(node).shortNumber() reads that actual number back from the node

  If you want to pre-shorten some DOM node with a value on the server side,
  be sure to set the data-shortnumber="4711" or whatever number on it, too:

  Likes: <span data-shortnumber="<% _num %>"><% short_number _num %></span>

  (To just format arbitrary numbers to tiny strings use shortNumber(4711).)
*/

(function(global, $) {
  var name = 'shortNumber';
  global[name] = shortenNumber;

  $.fn[name] = function(set_to) {
    return set_to != null ? this.text(shortenNumber(set_to)).data(name, set_to)
                          : this.data(name) || +/\d+/.exec(this.text());
  };

  name = name.toLowerCase(); // using lowercase data attributes dodges problems

  // shortenNumber(n): fit integers in 4 chars w/SI suffixes (5 for negatives)
  // 1 000..9 999 => 1k..9.9k;         10 000..999 999 => 10k..999k;
  // 1 000 000..9 999 999 => 1M..9.9M; 10 000 000..999 999 999 => 10M..999M; ...
  function shortenNumber(n) {
    if ('number' !== typeof n) n = Number(n);
    var sgn      = n < 0 ? '-' : ''
      , suffixes = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
      , overflow = Math.pow(10, suffixes.length * 3 + 3)
      , suffix, digits;
    n = Math.abs(Math.round(n));
    if (n < 1000) return sgn + n;
    if (n >= 1e100) return sgn + 'many';
    if (n >= overflow) return (sgn + n).replace(/(\.\d*)?e\+?/i, 'e'); // 1e24

    do {
      n      = Math.floor(n);
      suffix = suffixes.shift();
      digits = n % 1e6;
      n      = n / 1000;
      if (n >= 1000) continue; // 1M onwards: get them in the next iteration
      if (n >= 10 && n < 1000 // 10k ... 999k
       || (n < 10 && (digits % 1000) < 100) // Xk (X000 ... X099)
         )
        return sgn + Math.floor(n) + suffix;
      return (sgn + n).replace(/(\.\d).*/, '$1') + suffix; // #.#k
    } while (suffixes.length)
    return sgn + 'many';
  }
})(this, jQuery);
