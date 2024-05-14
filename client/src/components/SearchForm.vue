<template>
    <input placeholder="Search..." aria-label="Search" @input="search"/>
</template>

<script setup>
    import { defineEmits } from 'vue';

    const emit = defineEmits(['search']);

    const search = (e) => {
        emit('search', e.target.value);
    }

</script>


<style lang="scss" scoped>

input{
    padding: 10px;
    width: 100%;
    margin: 20px 0px;
}

input:focus{
    border: #82AA4C 1px solid !important;
    background-color: #82AA4C15;
}

</style>