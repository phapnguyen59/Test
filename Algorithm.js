var lengthOfLongestSubstring = function(s) {
    let res = 0;
      let set = new Set();
      let i = 0;
      let j = 0;
      while (i < s.length && j < s.length) {
        if (!set.has(s[j])) {
          set.add(s[j]);
          j++;
          if (j - i > res) res = j - i;
        } else {
          set.delete(s[i]);
          i++;
        }
      }
      return res;
    };