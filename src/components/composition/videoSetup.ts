import { ref } from 'vue'

export const videoSetup = () => {
  const myCount = ref(0)

  function add () {
    myCount.value++
  }

  function sayHi () {
    return 'hi'
  }

  return {
    myCount,
    add,
    sayHi
  }
}
