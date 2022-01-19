<template>
  <b-card>
    <div class="angry-grid">
      <div id="item-0">
        &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Provident voluptatum consequuntur alias quasi, iste suscipit maiores
        quisquam labore cum qui maxime unde iusto. Assumenda asperiores quos
        temporibus inventore eveniet placeat.
      </div>
      <div id="item-1">
        &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur tempore error suscipit. Expedita corrupti hic facere fuga.
        Porro debitis molestias totam ullam, dolore facilis, repellat quae,
        provident rem rerum odit.
      </div>
      <div id="item-2">
        &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate minima vero eum nam beatae voluptatum alias sunt tempora,
        dolore consequuntur repudiandae nisi quasi ea ducimus? Repellat,
        necessitatibus repudiandae. Aliquid, fugiat!
      </div>
      <div id="item-3">
        &nbsp; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non est
        amet ullam fugit tempore. Blanditiis aperiam quia corporis doloremque
        nemo nesciunt, voluptatibus minima. Cumque ullam, quisquam facere velit
        dolorum unde!
      </div>
      <div id="item-4">
        &nbsp; Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
        excepturi dolorem pariatur porro aliquid suscipit rerum provident. Eius,
        recusandae nisi voluptate magni soluta fuga minus animi, quia deleniti
        numquam nostrum.
      </div>
    </div>
  </b-card>
</template>
<script>
import {
  BCard,
  // BAvatar,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    // BAvatar,
  },
}
</script>
<style scoped>
.angry-grid {
  display: grid;
  grid-template-rows: 320px 1fr 1fr;
  grid-template-columns: 320px 1fr 1fr 1fr 1fr;
  gap: 10px;
  height: 100%;
}

#item-0 {
  background-color: #55fd9d;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 3;
}

#item-1 {
  background-color: #d77a57;
  grid-row-start: 1;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-column-end: 4;
}

#item-2 {
  background-color: #ddd69d;
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 3;
  grid-column-end: 4;
}

#item-3 {
  background-color: #edf7de;
  grid-row-start: 1;
  grid-column-start: 4;
  grid-row-end: 2;
  grid-column-end: 5;
}

#item-4 {
  background-color: #9a7bef;
  grid-row-start: 2;
  grid-column-start: 4;
  grid-row-end: 3;
  grid-column-end: 5;
}
</style>
