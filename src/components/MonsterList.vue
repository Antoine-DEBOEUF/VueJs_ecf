<script setup>
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import { RouterLink } from 'vue-router';
import {ref} from 'vue'

const localMonsters = ref([])

async function listeMonstres(){
    const reponse = await fetch("https://metallo.ew.r.appspot.com/monsters")
    const monstres = await reponse.json()
    localMonsters.value = monstres
    console.log(localMonsters.value)
}
listeMonstres()

</script>

<template>



    <!-- Blog Start -->
    <div class="container py-5">
        <div class="row">
            <!-- Monster list Start -->
            <div class="col">
                <div class="mb-5">
                    <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Every Monsters</h3>
                    <div class="d-flex overflow-hidden mb-3 bg-light" v-for="monster in localMonsters" :key="monster.id">
                       <img class="img-fluid" :src="monster.image" style="width: 100px; height: 100px; object-fit: cover;" alt="{{ monster.name }}">
                        <RouterLink :to="'/Monster/'+monster._id" class="h5 d-flex align-items-center bg-light px-3 mb-0">{{ monster.name }}
                        </RouterLink>
                    </div>
                   
                </div>
            </div>
            <!-- Monster list End -->

          
        </div>
    </div>
    <!-- Blog End -->



</template>

<style scoped></style>