<template>
  <div class="go-blank">
      {{info}}
  </div>
</template>
<script>
    export default{
        props: {
            info: {
                type: String,
                default:'暂无相关信息'
            }
        }
    }
</script>
