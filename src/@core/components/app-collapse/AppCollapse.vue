<template>
  <div
    role="tablist"
    class="collapse-icon"
    :class="collapseClasses"
  >
    <slot />
    <feather-icon
      v-if="isSubmited"
      icon="CheckIcon"
      class="icons"
      size="26"
    />
    <feather-icon
      v-else
      icon="XIcon"
      size="23"
      class="xicons"
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'default',
    },
    isSubmited: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapseID: '',
    }
  },
  computed: {
    collapseClasses() {
      const classes = []

      // Collapse Type
      const collapseVariants = {
        default: 'collapse-default',
        border: 'collapse-border',
        shadow: 'collapse-shadow',
        margin: 'collapse-margin',
      }
      classes.push(collapseVariants[this.type])
      return classes
    },
  },
  created() {
    this.collapseID = uuidv4()
  },
}
</script>
<style scoped>
.collapse-icon{
  position: relative;
}
.icons{
  position: absolute;
  top:15px;
  right:40px;
  color:#3DC672;
}
.xicons{
  position: absolute;
  top:15px;
  right:40px;
  color:red;
}
</style>
