import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../services/items';
import { MultipleChoicesError } from '../types/Errors';

function Home() {
  const [count, setCount] = useState(0);

  async function fetchItems() {
    try {
      await getItems();
    } catch (err) {
      if (err instanceof MultipleChoicesError) {
        console.log('WAZZAP');
      }
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/items">
          <p>
            Page has been open for
            {' '}
            <code>{count}</code>
            {' '}
            seconds.
          </p>
        </Link>
      </header>
    </div>
  );
}

export default Home;
