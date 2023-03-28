<template>
  <div id="Index">
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
  </div>
</template>
<script>
import Page1 from '@/components/IndexPage/Page1'
import Page2 from '@/components/IndexPage/Page2'
import Page3 from '@/components/IndexPage/Page3'
import Page4 from '@/components/IndexPage/Page4'
import Page5 from '@/components/IndexPage/Page5'
export default {
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5
  },
  data(){
    return {
    }
  },
  mounted() {
  },
}
</script>
<style lang="sass">
#index
</style>