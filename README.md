## 参考資料

### 構築の参考

- https://future-architect.github.io/typescript-guide/reactenv.html

- https://dev.to/kumar_abhirup/next-js-docker-made-easy-2bok

### コーディングの参考

- https://qiita.com/oekaki-hoho-ron/items/f6761b8438445fc0cdde

- https://qiita.com/tetsutaroendo/items/c7171286137d963cdecf

- https://qiita.com/matamatanot/items/1735984f40540b8bdf91

### 詰まったこと

`app/pages/posts/index.js`から`app/lib/posts.js`をimportしたとき、importした関数が正しく使われてないと`Module not found: Error Can't resolve 'fs' ...`と出てきた。全然違うじゃん！*もうアイドルやめる！*
