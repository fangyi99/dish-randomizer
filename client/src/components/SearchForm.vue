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
    padding-left: 10px;
    width: 85%;
    margin: 20px;
}

input:focus{
    border: #82AA4C 1px solid !important;
    background-color: #82AA4C15;
}

</style>