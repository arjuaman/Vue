<template>
    <div>
        <p>This is the popup component</p>
        <button @click="$emit('closePopup', {name: 'Arju', domain: 25})">Close the popup</button>
    </div>
</template>

<script>
    export default {
        emits: ['closePopup']
    }
</script>

<style scoped>

</style>