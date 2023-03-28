<script setup>
import Project from "../components/Project.vue";
const project =   {
        "id": 44685220,
        "description": "My awesome project",
        "name": "pipelines-for-merge-trains-a4fcee278294c60f",
        "name_with_namespace": "gitlab-qa-sandbox-group-3 / qa-test-2023-03-28-06-12-53-bb036287ee8164bc / pipelines-for-merge-trains-a4fcee278294c60f",
        "path": "pipelines-for-merge-trains-a4fcee278294c60f",
        "path_with_namespace": "gitlab-qa-sandbox-group-3/qa-test-2023-03-28-06-12-53-bb036287ee8164bc/pipelines-for-merge-trains-a4fcee278294c60f",
        "created_at": "2023-03-28T06:19:13.056Z",
        "default_branch": "main",
        "tag_list": [],
        "topics": [],
        "ssh_url_to_repo": "git@gitlab.com:gitlab-qa-sandbox-group-3/qa-test-2023-03-28-06-12-53-bb036287ee8164bc/pipelines-for-merge-trains-a4fcee278294c60f.git",
        "http_url_to_repo": "https://gitlab.com/gitlab-qa-sandbox-group-3/qa-test-2023-03-28-06-12-53-bb036287ee8164bc/pipelines-for-merge-trains-a4fcee278294c60f.git",
        "web_url": "https://gitlab.com/gitlab-qa-sandbox-group-3/qa-test-2023-03-28-06-12-53-bb036287ee8164bc/pipelines-for-merge-trains-a4fcee278294c60f",
        "readme_url": null,
        "forks_count": 0,
        "avatar_url": null,
        "star_count": 0,
        "last_activity_at": "2023-03-28T06:19:13.056Z",
        "namespace": {
            "id": 65599028,
            "name": "qa-test-2023-03-28-06-12-53-bb036287ee8164bc",
            "path": "qa-test-2023-03-28-06-12-53-bb036287ee8164bc",
            "kind": "group",
            "full_path": "gitlab-qa-sandbox-group-3/qa-test-2023-03-28-06-12-53-bb036287ee8164bc",
            "parent_id": 53328385,
            "avatar_url": null,
            "web_url": "https://gitlab.com/groups/gitlab-qa-sandbox-group-3/qa-test-2023-03-28-06-12-53-bb036287ee8164bc"
        }
    }

</script>
<template>
  <section class="px-6">
 <h1 class="text-gray-800 font-semibold py-3 text-2xl">Explore Projects</h1>
  <div class="bg-white">
    <nav class="flex border-b">
      <a
        href="#"
        class="text-gray-600 py-3 px-4 block hover:text-blue-500 text-gray-800 border-b-2 font-medium border-blue-500"
      >
        All</a
      ><a
        href="#"
        class="text-gray-600 py-3 px-4 block hover:border-b-2 hover:border-blue-200"
      >
        Most starred</a
      ><a
        href="#"
        class="text-gray-600 py-3 px-4 block hover:border-b-2 hover:border-blue-200"
      >
        Trending</a
      >
    </nav>
  </div>
  <Project :project="project" />
  </section>
 
</template>


<style lang="scss" scoped>
</style>