<template>
  <div class="list-table-box">
    <div class="list-table-header">
      <slot name="header" />
    </div>
    <div class="list-table-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.list-table-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
}
.list-table-header{
    width: 100%;
    padding: 10px;
    text-align: center;
}
.list-table-content{
    width: 100%;
    padding: 10px;
}
</style>