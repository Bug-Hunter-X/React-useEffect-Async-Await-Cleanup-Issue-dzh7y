# React useEffect Async/Await Cleanup Issue

This repository demonstrates a common error in React applications involving the use of `async/await` within the `useEffect` hook without proper cleanup.  The issue arises when asynchronous operations are started in `useEffect` without providing a way to cancel them when the component unmounts or updates.  This can lead to memory leaks, unexpected behavior, and race conditions.

The `bug.js` file showcases the incorrect implementation.  The `bugSolution.js` file provides the corrected version.