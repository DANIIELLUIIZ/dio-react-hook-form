import {Button} from "./styles"

export default function button({name,variant=false}) {
  return (
    <Button variant={variant} >{name}</Button>
  )
}
