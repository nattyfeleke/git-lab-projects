
<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";
import GitlabLogo from "./icons/GitlabLogo.vue";

const products = [
  {
    name: "GitLab: the DevOps platform",
    href: "#",
  },
  {
    name: "Explore GitLab",
    href: "#",
  },
  {
    name: "Install GitLab",
    href: "#",
  },
  {
    name: "How GitLab compares",
    href: "#",
  },
  {
    name: "Get started",
    href: "#",
  },
  {
    name: "GitLab docs",
    href: "#",
  },
  {
    name: "GitLab Learn",
    href: "#",
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="bg-gitlab">
    <nav
      class="flex max-w-7xl items-center justify-between p-6 lg:px-8 gap-x-3"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <GitlabLogo />
        </a>
      </div>
     
      <PopoverGroup class="hidden lg:flex lg:gap-x-6 sm:hidden">
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-200"
          >
            About GitLab
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-max p-2 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
             
                <div
                  v-for="item in products"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-200"
                >
                  <div class="flex-auto">
                    <a
                      :href="item.href"
                      class="block font-normal text-gray-600"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                  </div>
                </div>
              
            </PopoverPanel>
          </transition>
        </Popover>

        <a href="#" class="text-sm font-semibold leading-6 text-gray-200"
          >Pricing</a
        >
        <a href="#" class="text-sm font-semibold leading-6 text-gray-200"
          >Talk to an expert</a
        >
        <a href="#" class="text-sm font-semibold leading-6 text-gray-200"
          >Company</a
        >
      </PopoverGroup>
    </nav>
 
  </header>
</template>
<style scoped>
.bg-gitlab {
  background-color: #292961;
}
</style>