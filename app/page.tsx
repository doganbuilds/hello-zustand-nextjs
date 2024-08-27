"use client"

import useCounterStore from "@/utils/counterState"

export default function Home() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <Counter />
      <div>Main Component Count: {count}</div>
      <button className="bg-blue-500 px-4 py-3 rounded-md font-bold text-white" onClick={increment}>Increment</button>
      <button className="bg-red-500 px-4 py-3 rounded-md font-bold text-white" onClick={decrement}>Decrement</button>
    </main>
  )
}

function Counter() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)

  return (
    <>
      <h1>Count: {count}</h1>
      <button className="bg-blue-500 px-4 py-3 rounded-md font-bold text-white" onClick={increment}>Increment</button>
      <button className="bg-red-500 px-4 py-3 rounded-md font-bold text-white" onClick={decrement}>Decrement</button>
    </>
  )
}
