<script setup>
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import {ref} from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const thisMonster = ref({})

async function MonsterDetails(monsterId){
    const reponse = await fetch("https://metallo.ew.r.appspot.com/monsters/"+monsterId)
    const monstre = await reponse.json()
    thisMonster.value = monstre
    console.log(thisMonster.value)
    
}
MonsterDetails(route.params.id)

</script>

<template>


    <!-- About Start -->
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded" :src="thisMonster.image" style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="border-start border-5 border-primary ps-5 mb-5">
                        <h6 class="text-primary text-uppercase">{{ thisMonster.category }}</h6>
                        <h1 class="display-5 text-uppercase mb-0">{{ thisMonster.name }}</h1>
                    </div>
                    <h4 class="text-body mb-4">{{thisMonster.description}}</h4>
                 
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->

</template>