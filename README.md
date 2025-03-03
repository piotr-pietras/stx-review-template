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
- Loader should appear on the first to do list load, and when a user deletes any list element
- You can use your CSS classes and styles or Tailwind
- Example look of the Loader:
  ![Loader example](public/images/Loader.png)

## `features/todo/AddPopoverContent.tsx`

- The input in the AddPopoverContent doesn't work properly,
- There's no possibility to save a new To Do list element,
- Investigate the problem and find a solution

#### (For the recruiter)

- In the component onChange handler is missing, so the value does not change,
  therefore onClick won't work because value.length = 0,
- Value is not also assgined to the <input/> element,
- To fix the problem Ref is also needed to be attached to the <input/>
