  <script setup>
  import { StarIcon } from "@heroicons/vue/20/solid";
  const props = defineProps({
    project:{
        type: Object,
        required: true
    }
});
console.log(props.project)
</script>
<template>
  <div class="project-container">
    <div class="project-container__left">
      <a href="#" class="project-avatar">
          <img v-if="project.avatatar_url" :src="project.avatar_url" alt="avatar" srcset="">
         <div v-if="!project.avatar_url">{{ project.name.at(0) }}</div>
        </a>
      <div class="project-main">
       
        
        <a class="project-name" href="#">
          <span>
            {{ project.name_with_namespace }} /
          </span>
          <span>
            {{ project.name }}
          </span>
        </a>  
       
        
        <div class="project-title">
          <p>
            {{ project.description }}
          </p>
      </div>
      </div>
      


    </div>
    <div class="project-container__right">
      <div class="stats project-stars">
        <StarIcon
        class="h-5 w-5 flex-none text-gray-400"
        aria-hidden="true"
      />
        <div>{{ project.star_count }}</div>
      </div>
      <div class="stats project-stars">
        <StarIcon
        class="h-5 w-5 flex-none text-gray-400"
        aria-hidden="true"
      />
        <div>{{ project.forks_count }}</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.project-container{ 
  display: flex;
  align-items: flex-start;
  color: #737278;  
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #ececef;
}

.project-container__left{
  display: flex;
  max-width: 625px;
  padding-right: 3rem;
  width: 100%;
  gap: 1rem;
 
}
.project-main{
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
}
.project-avatar {
  min-width: 3rem;
  height: 3rem;
  font-size: 1.1875rem;
  line-height: 1.5rem;
  border: 1px solid #1f1e2414;
  border-radius: 0.5rem;
  background-color: #ecf4ee;
}
.project-avatar div{
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;align-items: center; justify-content: center;
  text-transform: capitalize;

}
.project-name{
  font-weight: 600;
  color: #333238;
  line-height: 1.25rem;
  font-size: 0.875rem;
}
.project-name:hover{
  text-decoration: underline;
}
.project-name span:first-of-type{
  font-weight: 400;
}
.project-title{
  color: #737278;
  line-height: 1.25rem;
  font-size: 0.875rem;
}


.project-container__right{
  display: flex;
  align-items: center;gap:1rem;
}
.project-container__right .stats{
  display: flex;
  align-items: center;gap: 0.5rem;
}

@media only screen and (max-width: 537px) {
  .project-container{
    flex-direction: column;
  }
  .project-container__right{
    margin-left: 3.5rem;
  }
  .project-container__right .stats{
  display: none;
}
.project-container__right .stats:first-of-type{
  display: flex;
}
}
</style>