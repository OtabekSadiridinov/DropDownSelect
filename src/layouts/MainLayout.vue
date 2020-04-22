<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
      <q-btn-dropdown :label="dropdownLabel" flat color="white">
        <q-list>
          <q-item
            v-for="category in categories"
            :key="category.id"
            clickable
            v-close-popup
            @click="onCategoryClick(category.name)"
          >
            <q-item-section>
              <q-item-label>{{category.name}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data() {
    return {
      dropdownLabel: 'Categories',
      categories: [
        {
          id: 0,
          name: 'Facebook',
          url: '/nintendo'
        },
        {
          id: 1,
          name: 'GitHub',
          url: '/nintendo'
        },
        {
          id: 2,
          name: 'Nintendo',
          url: '/nintendo'
        }
      ],

      // Default
      leftDrawerOpen: false,

      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        }
      ]
    }
  },
  methods: {
    onCategoryClick(label) {
      if (
        this.dropdownLabel !== label &&
        label !== localStorage.getItem('dropdownLabel')
      ) {
        localStorage.setItem('dropdownLabel', label)
        localStorage.getItem('dropdownLabel')
        this.dropdownLabel = localStorage.getItem('dropdownLabel')
        this.$router.push('/' + localStorage.getItem('dropdownLabel'))
      } else {
        this.dropdownLabel = 'Categories'
      }
    },
    checkCategory() {
      if (this.$route.path.slice(1) !== localStorage.getItem('dropdownLabel')) {
        localStorage.getItem('dropdownLabel', 'Categories')
        // alert("if is qnfemnflfklfsdm")
      } else if (localStorage.getItem('dropdownLabel') !== this.dropdownLabel) {
        // alert("else if")
        this.dropdownLabel = localStorage.getItem('dropdownLabel')
      } else {
        // alert("else")
        this.dropdownLabel = 'Categories'
      }
    }
  },
  mounted() {
    this.checkCategory()
  }
}
</script>
