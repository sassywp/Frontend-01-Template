## 1.写一个正则表达式 匹配所有 Number 直接量

```
^-?\d+$|^(-?\d+)(\.\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$

```

## 2.写一个 UTF-8 Encoding 的函数

```
function utf8Encode(str) {
  let utf8 = [];
  for (let i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c < 0x80) utf8.push(c);
      else if (c < 0x800) {
          utf8.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
      } else if (c < 0xd800 || c >= 0xe000) {
          utf8.push(
              0xe0 | (c >> 12),
              0x80 | ((c >> 6) & 0x3f),
              0x80 | (c & 0x3f)
          );
      } else {
          i++;
          c = ((c & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff);
          utf8.push(
              0xf0 | (c >> 18),
              0x80 | ((c >> 12) & 0x3f),
              0x80 | ((c >> 6) & 0x3f),
              0x80 | (c & 0x3f)
          );
      }
  }
  return utf8;
}
```

## 3.写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

```
[\u0021-\u007E]+|[\x21-\x7E]+|(['"])(?:(?!\1).)*?
```