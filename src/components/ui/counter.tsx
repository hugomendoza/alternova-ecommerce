import { Minus, Plus } from 'lucide-react'
import { Button } from './button'
import { Input } from './input'
import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState<number>(0)

  function onIncreaseCounter() {
    setCounter(counter + 1)
  }

  function onDecreaseCounter() {
    if (counter === 0) return
    setCounter(counter - 1)
  }

  return (
    <div className="flex col-span-2 border border-slate-200 rounded-lg">
      <Button
        onClick={onDecreaseCounter}
        variant="ghost"
        className="flex-1 has-[>svg]:px-0"
        type="button"
      >
        <Minus />
      </Button>
      <Input className="flex-1 text-black" type="text" value={counter} readOnly />
      <Button
        onClick={onIncreaseCounter}
        variant="ghost"
        className="flex-1 has-[>svg]:px-0"
        type="button"
      >
        <Plus />
      </Button>
    </div>
  )
}