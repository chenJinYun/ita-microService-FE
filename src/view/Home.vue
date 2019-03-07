<template>
  <HelloWorld></HelloWorld>
</template>
<script>
import {test} from "@/api/api.js"
import HelloWorld from "@/components/HelloWorld.vue"
export default {
  components:{HelloWorld},
  created(){
    test("8a80cb816955fdb50169560317020002").then(res=> {
      console.log(res)
    })
  }
}
</script>
<style scoped>

</style>

