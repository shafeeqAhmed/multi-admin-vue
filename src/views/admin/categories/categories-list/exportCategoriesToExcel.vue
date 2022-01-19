<template>
  <div>
    <button @click="generateReport">
      Download
    </button>
    <vue-html2pdf
      ref="html2Pdf"
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="hee hee"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="landscape"

      pdf-content-width="800px"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
    >
      <section slot="pdf-content">
        <!-- PDF Content Here -->
        <b-table
          responsive
          :items="fetchData"
          :fields="json_fields"
          class="mb-0"
        >
          <template #cell(Phone)="data">
            <span class="text-nowrap">
              {{ data.value }}
            </span>
          </template>

          <!-- Optional default data cell scoped slot -->
          <template #cell()="data">
            {{ data.value }}
          </template>
        </b-table>
      </section>
    </vue-html2pdf>
  </div>
</template>
<script>
import VueHtml2pdf from 'vue-html2pdf'
import { BTable } from 'bootstrap-vue'

export default {
  components: {
    VueHtml2pdf,
    BTable,
  },
  data() {
    return {
      json_fields: [
        { key: 'id', sortable: true, label: 'id' },
        { key: 'name', sortable: true, label: 'name' },
        { key: 'commission_rate', sortable: true, label: 'comission' },
        { key: 'banner', label: 'Image' },
        { key: 'status', sortable: true },
        { key: 'actions' },
      ],
    }
  },
  methods: {
    async fetchData() {
      const response = await this.$http.get('categories')
      return response.data.data.categories.data
    },
    generateReport() {
      this.$refs.html2Pdf.generatePdf()
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
