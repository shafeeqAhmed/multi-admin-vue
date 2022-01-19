<template>
  <div class="container-fluid">
    <b-card>
      <!-- Table Top -->
      <b-button
        variant="outline-primary"
        size="sm"
      >
        <feather-icon
          icon="ArrowLeftIcon"
          class="mr-50"
        />
        <span class="align-middle">Back</span>
      </b-button>
      <b-row>
        <!-- Per Page -->
        <b-col
          cols="12"
          md="6"
        >
          <b-alert
            show
            variant="primary"
          >
            <div class="alert-body">
              <feather-icon
                class="mr-25"
                icon="MoreVerticalIcon"
              />
              <span class="ml-25">
                {{ grandParent }}
              </span>
            </div>
          </b-alert>
        </b-col>

        <!-- Search -->
        <b-col
          cols="12"
          md="6"
        >
          <b-form-input
            v-model="searchCategory"
            class="d-inline-block mr-1"
            placeholder="Search..."
          />
          <!-- <b-button
                variant="primary"
                @click="addCategory"
              >
                <span class="text-nowrap">Add Sub Category</span>
              </b-button> -->
        </b-col>
      </b-row>

      <b-row class="d-flex flex-wrap">
        <b-col
          class="col"
          tabindex="0"
        >
          1 of 5
        </b-col>
        <b-col
          class="col"
          tabindex="0"
        >
          1 of 5
        </b-col>
        <b-col
          class="col"
          tabindex="0"
        >
          1 of 5
        </b-col>
        <b-col
          class="col"
          tabindex="0"
        >
          1 of 5
        </b-col>
      </b-row>

      <b-alert
        v-height-fade
        show
        dismissible
        fade
        class="mb-0"
        variant="primary"
      >
        <div class="alert-body">
          <span><b>Electronic</b> > Computor Monitors > Video</span>
        </div>
      </b-alert>

      <!-- <div class="row">
        <div
          class="col"
          tabindex="0"
        >
          1 of 5
        </div>
        <div
          class="col"
          tabindex="0"
        >
          2 of 5
        </div>
        <div
          class="col"
          tabindex="0"
        >
          3 of 5
        </div>
        <div
          class="col"
          tabindex="0"
        >
          4 of 5
        </div>
        <div
          class="col"
          tabindex="0"
        >
          5 of 5
        </div>
        <div
          class="col"
          tabindex="0"
        >
          5 of 5
        </div>
        <div
          class="col"
          tabindex="0"
        >
          5 of 5
        </div>
        <div
          class="col"
          tabindex="0"
        >
          5 of 5
        </div>
      </div> -->

      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Company Name"
        label-for="input-default"
      >
        <b-form-input
          id="input-default"
          placeholder="Company Name"
        />
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Commision Rate"
        label-for="input-default"
      >
        <b-form-input
          id="input-default"
          placeholder="Commision Rate"
        />
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Banner"
        label-for="input-default"
      >
        <b-form-file
          id="wildcard"
          accept="image/*"
        />
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Icons"
        label-for="input-default"
      >
        <b-form-file
          id="wildcard"
          accept="image/*"
        />
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Text Area"
        label-for="input-default"
      >
        <b-form-textarea
          id="input-default"
          placeholder="Text Area"
        />
      </b-form-group>

      <b-button variant="primary">
        Save your SubCategory
      </b-button>

      <b-button
        variant="primary"
        class="ml-1"
      >
        Back to SubCategory
      </b-button>
    </b-card>
  </div>
</template>

<script>
import {
  BAlert,
  BButton,
  BCard,
  BFormInput,
  BFormGroup,
  BFormTextarea,
  BFormFile,
  BRow,
  BCol,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BAlert,
    BCard,
    BFormInput,
    BFormGroup,
    BFormTextarea,
    BButton,
    BFormFile,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 0px;
}

.col:hover {
  background-color: #107cd3;
}

.col:focus {
  background-color: #107cd3;
}
.col {
  pointer-events: none;
}

.col {
  flex: 0 0 12%;
  /* The important bit. This percentage decides your columns.
            The percent can be px. It just represents your minimum starting width.
             */
  margin: 1px;
  background: #49a7f4;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: left;
}
</style>
