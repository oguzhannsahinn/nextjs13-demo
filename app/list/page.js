import { Suspense } from 'react';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await res.json();

  await delay(2000);

  return response;
}

async function DataComponent({ dataPromise }) {
  const data = await dataPromise;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item?.name || item?.title}</li>
      ))}
    </ul>
  );
}

export default function List() {
  const data = fetchData();

  return (
    <div>
      <h3>List</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent dataPromise={data} />
      </Suspense>
    </div>
  );
}
