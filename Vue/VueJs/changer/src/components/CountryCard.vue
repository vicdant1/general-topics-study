<template>
    <div class="cardContainer">
        <div class="textContainer">
            <h6 class="title">
                <slot name="title"/>
            </h6>
            Capital: <slot name="capital"/><br/>
            Language(s): <slot name="language"/><br/>
            Currencie: <slot name="currencie"/><br/>
        </div>
        <slot name="flag"/>
    </div>    
</template>

<script>
export default{
    name: 'CountryCard',
}

</script>

<style scoped>

*{
    color: rgb(131, 131, 131);
}

.cardContainer{
    width: 100%;
    min-height: 140px;
    border-radius: 4px;
    background-color: #FFF;
    position: relative;
    padding: .5rem;
    transition: .4s transform;
    box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
}

.cardContainer:hover{
    transform: scale(1.1);
}

.cardContainer img{
    position: absolute;
    width: 35px;
    top: 3px;
    right: 3px;
    border-radius: 3px;
}
</style>
