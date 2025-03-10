# Review tasks

## `features/todo/Element.tsx:6`

- Malformed object type
- Object also may be imported from `./types`

## `features/todo/index.tsx:46`

- Lack of keys for mapped components
- Expected ID as a key

## `features/todo/index.tsx:54`

- Modal does not close after successful submission
- Missing `onAddingSuccess` callback
- State `isPopoverOpen` line:17 should be set to false to close modal

## `features/todo/index.tsx`

- Add a global fixed loader for the app
- Loader should be in the top layer of the app so there's no possibility to click
  on anything below when it's visible
- Loader should appear on the first to do list load and when a user deletes any list element o change done status of any item
- You can use your CSS classes and styles or Tailwind
- Example look of the Loader:
  ![Loader example](public/images/Loader.png)

## `features/todo/AddPopoverContent.tsx`

- The `input` in the `AddPopoverContent` doesn't work properly,
- There's no possibility to save a new To Do list element,
- Investigate the problem and find a solution

#### (For the recruiter)

- In the component `onChange` handler is missing, so the value does not change,
  therefore `onClick` won't work because the `value.length` is `equal 0`,
- Value is not also assigned to the <input/> element,
- To fix the problem `ref` is also needed to be attached to the <input/>

## `components/Button.tsx`

- The `Button` component needs refactor, fix all that comes to your mind in terms of
  good practices and readability of the code

#### (For the recruiter)

- The name of the props can be much better, without the typos, just 'Props' might suffice,
- `MyButtonComponent` name doesn't sound the best, `Button` would be enough,
- Using `interface` instead of `type` for the `Props` type, it's not required but recommended by
  TypeScript creators to use type as much as you can,
- Not-used `onChange` handler, should be removed,
- Not-used `canHandleTheClick` variable, should be removed,
- In `onButtonClick` handler 'if' can be formatted in a more readable and accessible way:

  ```
    if (isDisabled || !onClick) {
      return;
    }

    onClick();
  ```

- But the best way to achieve `disabled button state` would not be in additional `onButtonClick` handler, but
  by using `disabled` prop in the <button/> component
- Instead of using variable to contain the result of the component just `return` it right in the component `return statement`
- Redundant comment, should be removed

## `features/todo/index.tsx:34`

- Variable `filteredAndSortedItems` is not filtered or sorted
- The list should be filtered and sorted based on the parameters selected from `Menu` dropdown

## `utils/dateFormatter.ts:4`

- Used date format pattern is not helpful, use a more user friendly formatting to display date as 01/01/2025 (`dd/MM/yyyy`)

## `features/todo/index.tsx:36`

- Done todos counter is not calculated correctly
- Fix it by using a `reduce` method
