<template>
  <div>
    <span class="pl-1 cursor">
      <i
        class="fa fa-file-pdf-o"
        aria-hidden="true"
        @click="generateReport()"
      />
    </span>
    <vue-html2pdf
      ref="html2Pdf"
      :show-layout="false"
      :float-layout="true"
      :enable-download="false"
      :preview-modal="true"
      filename="hehehe"
      :paginate-elements-by-height="0"
      :pdf-quality="2"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="100%"
      :manual-pagination="true"
      @progress="onProgress($event)"
      @beforeDownload="beforeDownload($event)"
      @hasDownloaded="hasDownloaded($event)"
    >
      <section slot="pdf-content">
        <!-- PDF Content Here -->
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">
                Id
              </th>
              <th scope="col">
                First Name
              </th>
              <th scope="col">
                Parent Name
              </th>
              <th scope="col">
                Commision Rate
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                1
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>50%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import {} from 'bootstrap-vue'
import VueHtml2pdf from 'vue-html2pdf'

export default {
  components: {
    // BButton,
    VueHtml2pdf,
  },
  methods: {
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
    generateReport() {
      this.$refs.html2Pdf.generatePdf()
    },

  },
}
</script>

<style scoped>
table {
  page-break-inside: auto;
}
tr {
  page-break-inside: avoid;
  page-break-after: auto;
}
thead {
  display: table-header-group;
}
tfoot {
  display: table-footer-group;
}
</style>
