```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using async/await inside useEffect without returning a cleanup function
    async function fetchData() {
      const response = await fetch('/some-api');
      const data = await response.json();
      // ... use data ...
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```