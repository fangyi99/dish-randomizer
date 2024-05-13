<template>
    <div class="popup">
        <div class="popup-inner">
            <h3><b>Choose a thumbnail</b></h3>
            <div class="gallery">
                <div v-for="(thumbnail, index) in thumbnails" :key="thumbnail.id" class="gallery-item">
                    <img 
                        :src="getImgSrc(thumbnail.src)" 
                        :class="['gallery-image', { 'selected': selectedIndex === index }]" 
                        @click="$emit('clickedThumbnail', thumbnail.src); toggleSelection(index)"
                    />
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default{
    props: ['TogglePopup'],
    data: function() {
        return {
            selectedIndex: null,
            thumbnails: [
                {
                    id:"1",
                    src:"meat-1.png",
                },
                {
                    id:"2",
                    src:"meat-2.png",
                },
                {
                    id:"3",
                    src:"meat-3.png",
                },
                {
                    id:"4",
                    src:"meat-4.png",
                },
                {
                    id:"5",
                    src:"veg-1.png",
                },
                {
                    id:"6",
                    src:"veg-2.png",
                },
                {
                    id:"7",
                    src:"veg-3.png",
                },
                {
                    id:"8",
                    src:"veg-4.png",
                },
                {
                    id:"9",
                    src:"soup-1.png",
                },
                {
                    id:"10",
                    src:"soup-2.png",
                },
                {
                    id:"11",
                    src:"soup-3.png",
                },
                {
                    id:"12",
                    src:"soup-4.png",
                },
                {
                    id:"13",
                    src:"others-1.png",
                },
                {
                    id:"14",
                    src:"others-2.jpg",
                },
                {
                    id:"15",
                    src:"others-3.png",
                },
                {
                    id:"16",
                    src:"others-4.png",
                }
        ]}
    },
    methods:{
      getImgSrc: function (path) { 
        return require('@/assets/thumbnails/' + path);
      },
      toggleSelection(index) {
        if (this.selectedIndex === index) {
            this.selectedIndex = null;
        } else {
            this.selectedIndex = index;
        }
        }
    }

}

</script>

<style lang="scss" scoped>

.popup{
    position: fixed;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    z-index:99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-inner{
    margin: auto;
    background: #FFF;
    padding: 30px;
    border-radius: 5px;
}

//gallery

.gallery{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 15px 0;
    width: 300px;
}

.gallery-image{
    flex-wrap: wrap;
    width: 70px;
    height: 70px;
    margin: 15px 0;
}

.selected{
    border: #82AA4C solid 2px;
    border-radius: 5px;
}



</style>
