### Installation

Install using NPM

```
npm install --save bapple
```

### Basic Usage

Just import and call one of these: `message`, `success`, `error`, `warning`, `info`

```es6
import Bapple from 'bapple';
Bapple.message('Info toast', 'This is a toast to inform you of...', 5000);
// You can ignore description and timeout params.
Bapple.message('Successfully done!');
// And so on...
Bapple.success(...);
Bapple.error(...);
Bapple.warning(...);
Bapple.info(...);
```

### More

Or if you want more control over your toast, you can use `add` function:

#### Global Options

Customize default options with `Bapple.config`, This will affect every toast.

* `direction`: This determines the text direction, Left-to-Right or Right-to-Left.
  Available: `ltr`, `rtl`
  Default: `ltr`

* `position`: By default, toasts appear in the left-bottom of your pages. But you are free to choose the right-bottom position.
  Available: `left`, `right`
  Default: `left`

* `size`: Customize the size of your toast.
  Available: `small`, `normal`, `large`
  Default: `normal`

* `timeout`: How long the toast will be visible, in milliseconds. This would be override for each toast, as mentioned above.
  Default: `5000`

#### Example:

```es6
Bapple.config({
  direction: 'error',
  title: 'Your title here...',
  description: 'Description here...',
  timeout: 6000
});
```

#### Options for each Toast

If you want more control over a single toast, you can use `Bapple.add` instead of `Bapple.error` or `Bapple.success` or...

* `type`: This determines the style of your toast.
  Available: `success`, `info`, `error`, `warning`, `message`
  Default: `message`

* `title`: Toast title

* `description`: Toast description

* `timeout`: How long the toast will be visible, in milliseconds.
  This will override the `timeout` from global options.

#### Example

```es6
Bapple.add({
  type: 'error',
  title: 'Your title here...',
  description: 'Description here...',
  timeout: 6000
});
```
