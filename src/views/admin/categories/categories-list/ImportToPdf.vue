<template>
  <div>
    <span class="pl-1 cursor">
      <i
        class="fa fa-file-pdf-o"
        aria-hidden="true"
        @click="generateReport()"
      />
    </span>
    <div>
      <vue-html2pdf
        ref="html2Pdf"
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
        :preview-modal="true"
        filename="Sample Download"
        :paginate-elements-by-height="1100"
        :pdf-quality="2"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="100%"
        :manual-pagination="false"
        @progress="oProgress($event)"
        @beforeDownnload="beforeDownload($event)"
        @hasDownloaded="hasDownloaded($event)"
      >
        <section
          slot="pdf-content"
          class="table-responsive"
        >
          <!-- PDF Content Here -->

          <table
            class="table"
          >
            <tr>
              <th>
                Id
              </th>
              <th>
                Name
              </th>
              <th>
                Commission Rate
              </th>
              <th>
                Parent Name
              </th>
            </tr>
            <tbody>
              <tr
                v-for="category in categories"
                :key="category.id"
              >
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>{{ commission_rate }} %</td>
                <td v-if="category.parent !== null">
                  {{ category.parent.name }}
                </td>
                <td v-else>
                  Parent
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </vue-html2pdf>
    </div>
  </div>
</template>

<script>
import {} from 'bootstrap-vue'
import VueHtml2pdf from 'vue-html2pdf'

export default {
  components: {
    VueHtml2pdf,
  },
  data() {
    return {
      categories: [],
    }
  },
  methods: {
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
          */
    generateReport() {
      this.$http.get('category/all/record').then(response => {
        this.categories = response.data
        this.$refs.html2Pdf.generatePdf()
      })
    },
  },
}
</script>

<style scoped>
table {
  page-break-inside: auto;
  text-align: center;
}
tr {
  page-break-inside: avoid;
  page-break-after: auto;
}
.cursor {
  font-size: 18px;
  color: lightgrey;
  cursor: pointer;
}
.cursor:hover {
  color: gray;
  display: block;
}
</style>
