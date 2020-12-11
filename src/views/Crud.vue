<template>
  <div>
    crud
  </div>
</template>

<script>
import userService from '../api/user.api'

export default {
  name: 'crud',

  components: {
  },

  props: {
    type: String
  },

  data () {
    return {
    }
  },

  computed: {
  },

  beforeMount () {
    alert('asd');
  },

  beforeDestroy () {

  },

  watch: {

  },

  methods: {

  }
}
</script>
