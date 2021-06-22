# Getting Started with Create React App

## フォーム

[Formik](https://github.com/formium/formik) が挙げられている

https://ja.reactjs.org/docs/forms.html

> 入力値のバリデーション、訪問済みフィールドの追跡やフォーム送信を含む完全なソリューションをお探しの場合は、Formik が人気のある選択肢のひとつです。しかしながらこれは制御されたコンポーネントや state の管理と同じ原理で作成されていますので、これらについて学ぶことを無視しないようにしましょう。

## 属性の展開/Spread Attributes

> コンポーネントが利用する適当なプロパティを取り出しつつ、残りのすべてのプロパティに対してスプレッド演算子を利用することもできます。

```jsx
const Button = (props) => {
  const { kind, ...other } = props;
  const className = kind === 'primary' ? 'PrimaryButton' : 'SecondaryButton';
  return <button className={className} {...other} />;
};
```

https://ja.reactjs.org/docs/jsx-in-depth.html

## hooks linter

https://ja.reactjs.org/docs/hooks-rules.html

> フックは JavaScript の関数ですが、それらを使う際には以下の 2 つのルールに従う必要があります。我々は自動的にこのルールを強制するための [linter プラグイン](https://www.npmjs.com/package/eslint-plugin-react-hooks) を提供しています。

create-react-app プロジェクトの場合はインストール不要っぽい。

> このプラグインは Create React App ではデフォルトで含まれています。

rules の追記は必要？

```json
// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
```

## フックのルール

> 条件付きで副作用を走らせたい場合は、その条件をフックの内部に入れることができます

```jsx
useEffect(function persistForm() {
  // 👍 We're not breaking the first rule anymore
  if (name !== '') {
    localStorage.setItem('formData', name);
  }
});
```

https://ja.reactjs.org/docs/hooks-rules.html

## カスタムフック/独自フック

> カスタムフックとは、名前が ”use” で始まり、ほかのフックを呼び出せる JavaScript の関数のことです。例えば、以下の useFriendStatus が我々の最初のカスタムフックの例です：

```jsx
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

https://ja.reactjs.org/docs/hooks-custom.html

## ここから

https://ja.reactjs.org/docs/hooks-rules.html

## TODO

https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/

https://qiita.com/sonatard/items/617f324228f75b9c802f

https://yo7.dev/articles/redux-async-hook
