<template>
  <div>
    <b-row>
      <b-col md="12">
        <app-collapse :is-submited="isSubmitProductCollapse('images')">
          <app-collapse-item
            title="Product Images"
            :is-visible="isOpenProductCollapse('images')"
          >
            <b-card>
              <hr>
              <b-form @submit.prevent>
                <b-row>
                  <b-col cols="12">
                    <!--<b-form-group
                  label="Banner (1920x500)"
                  label-for="h-banner"
                  label-cols-md="4"
                >-->
                    <b-row>
                      <b-col md="4">
                        <!-- <h5>Product Image</h5> -->
                        <br>
                        <p align="justify">
                          Product images are one of the most important factors
                          in any customer's decisions to buy product.Provide as
                          many images as it possible.Product images are one of
                          the most important factors in any customer's decisions
                          to buy product.
                        </p>
                        <ul>
                          <li>Min size 600px x 600px</li>
                          <li>Max size 900px x 900px</li>
                          <li>Max file size 15MB</li>
                        </ul>
                        <p align="justify">
                          Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandas.
                        </p>
                      </b-col>
                      <b-col md="8">
                        <b-row>
                          <b-col md="6">
                            <b-form-file
                              id="primaryImage"
                              v-model="primary.file"
                              class="file"
                              @change="previewImage($event, primary)"
                            />
                            <div
                              v-if="primary.src === ''"
                              class="aspect-ratio-box1"
                              @click="chooseFile('primaryImage')"
                            >
                              <b-avatar
                                :square="true"
                                variant="light"
                                target="_blank"
                                class="pointer aspect-ratio1 avatar-primary"
                              >
                                <feather-icon
                                  icon="CameraIcon"
                                  size="120"
                                  class="camera"
                                />
                              </b-avatar>
                            </div>
                            <div
                              v-else
                              class="aspect-ratio-box1"
                            >
                              <b-avatar
                                :square="true"
                                :src="primary.src"
                                target="_blank"
                                class="pointer aspect-ratio1 avatar-primary"
                              />
                              <b-button-close
                                v-wave="{
                                  color: 'red',
                                  easing: 'ease-out',
                                  duration: 0.4,
                                  initialOpacity: 0.3,
                                  finalOpacity: 0.4,
                                  cancellationPeriod: 75,
                                }"
                                class="remover"
                                @click="removeImage(primary)"
                              />
                            </div>
                          </b-col>
                          <b-col md="6">
                            <b-row>
                              <b-col md="6 pl-lg-0">
                                <b-form-file
                                  id="image1"
                                  v-model="file1.file"
                                  class="file"
                                  @change="previewImage($event, file1)"
                                />
                                <div
                                  v-if="file1.src === ''"
                                  class="aspect-ratio-box"
                                  @click="chooseFile('image1')"
                                >
                                  <b-avatar
                                    :square="true"
                                    variant="light"
                                    target="_blank"
                                    class="pointer aspect-ratio avatar"
                                  >
                                    <feather-icon
                                      icon="CameraIcon"
                                      size="50"
                                      class="camera"
                                    />
                                  </b-avatar>
                                </div>
                                <div
                                  v-else
                                  class="aspect-ratio-box"
                                >
                                  <b-avatar
                                    :square="true"
                                    :src="file1.src"
                                    target="_blank"
                                    class="pointer aspect-ratio avatar"
                                  />
                                  <b-button-close
                                    v-wave="{
                                      color: 'red',
                                      easing: 'ease-out',
                                      duration: 0.4,
                                      initialOpacity: 0.3,
                                      finalOpacity: 0.4,
                                      cancellationPeriod: 75,
                                    }"
                                    class="remover"
                                    @click="removeImage(file1)"
                                  />
                                </div>
                              </b-col>
                              <b-col cols="6 pl-lg-0">
                                <b-form-file
                                  id="image2"
                                  v-model="file2.file"
                                  class="file"
                                  @change="previewImage($event, file2)"
                                />
                                <div
                                  v-if="file2.src === ''"
                                  class="aspect-ratio-box"
                                  @click="chooseFile('image2')"
                                >
                                  <b-avatar
                                    :square="true"
                                    variant="light"
                                    target="_blank"
                                    class="pointer aspect-ratio avatar"
                                  >
                                    <feather-icon
                                      icon="CameraIcon"
                                      size="50"
                                      class="camera"
                                    />
                                  </b-avatar>
                                </div>
                                <div
                                  v-else
                                  class="aspect-ratio-box"
                                >
                                  <b-avatar
                                    :square="true"
                                    :src="file2.src"
                                    target="_blank"
                                    class="pointer aspect-ratio avatar"
                                  />
                                  <b-button-close
                                    v-wave="{
                                      color: 'red',
                                      easing: 'ease-out',
                                      duration: 0.4,
                                      initialOpacity: 0.3,
                                      finalOpacity: 0.4,
                                      cancellationPeriod: 75,
                                    }"
                                    class="remover"
                                    @click="removeImage(file2)"
                                  />
                                </div>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col md="6 pl-lg-0 mt-1">
                                <b-form-file
                                  id="image3"
                                  v-model="file3.file"
                                  class="file"
                                  @change="previewImage($event, file3)"
                                />
                                <div
                                  v-if="file3.src === ''"
                                  class="aspect-ratio-box"
                                  @click="chooseFile('image3')"
                                >
                                  <b-avatar
                                    :square="true"
                                    variant="light"
                                    target="_blank"
                                    class="pointer aspect-ratio avatar"
                                  >
                                    <feather-icon
                                      icon="CameraIcon"
                                      size="50"
                                      class="camera"
                                    />
                                  </b-avatar>
                                </div>
                                <div
                                  v-else
                                  class="aspect-ratio-box"
                                >
                                  <b-avatar
                                    :square="true"
                                    :src="file3.src"
                                    target="_blank"
                                    class="pointer aspect-ratio avatar"
                                  />
                                  <b-button-close
                                    v-wave="{
                                      color: 'red',
                                      easing: 'ease-out',
                                      duration: 0.4,
                                      initialOpacity: 0.3,
                                      finalOpacity: 0.4,
                                      cancellationPeriod: 75,
                                    }"
                                    class="remover"
                                    @click="removeImage(file3)"
                                  />
                                </div>
                              </b-col>
                              <b-col cols="6 pl-lg-0 mt-1">
                                <b-form-file
                                  id="image4"
                                  v-model="file4.file"
                                  class="file"
                                  @change="previewImage($event, file4)"
                                />
                                <div
                                  v-if="file4.src === ''"
                                  class="aspect-ratio-box"
                                  @click="chooseFile('image4')"
                                >
                                  <b-avatar
                                    :square="true"
                                    variant="light"
                                    target="_blank"
                                    class="pointer aspect-ratio avatar"
                                  >
                                    <feather-icon
                                      icon="CameraIcon"
                                      size="50"
                                      class="camera"
                                    />
                                  </b-avatar>
                                </div>
                                <div
                                  v-else
                                  class="aspect-ratio-box"
                                >
                                  <b-avatar
                                    :square="true"
                                    :src="file4.src"
                                    target="_blank"
                                    class="pointer aspect-ratio avatar"
                                  />
                                  <b-button-close
                                    v-wave="{
                                      color: 'red',
                                      easing: 'ease-out',
                                      duration: 0.4,
                                      initialOpacity: 0.3,
                                      finalOpacity: 0.4,
                                      cancellationPeriod: 75,
                                    }"
                                    class="remover"
                                    @click="removeImage(file4)"
                                  />
                                </div>
                              </b-col>
                            </b-row>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                    <!-- </b-form-group>-->
                  </b-col>
                </b-row>
                <b-col class="col-md-12 text-right pr-lg-0 mt-1">
                  <b-button
                    variant="primary"
                    @click="submitImages"
                  >
                    <b-spinner
                      v-if="getLoader('loaderFoure')"
                      small
                    />
                    Submit
                  </b-button>
                </b-col>
              </b-form>
            </b-card>
          </app-collapse-item>
        </app-collapse>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  // BFormGroup,
  BForm,
  BAvatar,
  BFormFile,
  BButtonClose,
  BButton,
  BSpinner,
} from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import store from '@/store'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BAvatar,
    // BFormGroup,
    BForm,
    BFormFile,
    BButtonClose,
    BButton,
    AppCollapse,
    AppCollapseItem,
    BSpinner,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      primary: {
        file: [],
        src: '',
        loading: false,
      },
      file1: {
        file: [],
        src: '',
        loading: false,
      },
      file2: {
        file: [],
        src: '',
        loading: false,
      },
      file3: {
        file: [],
        src: '',
        loading: false,
      },
      file4: {
        file: [],
        src: '',
        loading: false,
      },
    }
  },
  mounted() {
    const getProductData = store.getters['adminProduct/getProductData']
    if (typeof getProductData.images !== 'undefined') {
      this.productId = getProductData.id
      getProductData.images.forEach((value, index) => {
        // eslint-disable-next-line eqeqeq
        if (value.is_primary == 1) {
          this.primary.src = value.url
        } else if (index === 1) {
          this.file1.src = value.url
        } else if (index === 2) {
          this.file2.src = value.url
        } else if (index === 3) {
          this.file3.src = value.url
        } else if (index === 4) {
          this.file4.src = value.url
        }
      })
    }
  },
  methods: {
    // chooseFile(imageId) {
    //   document.getElementById(imageId).click()
    // },
    previewImage(event, primary) {
      const file = event.target.files[0]
      const imbObj = primary
      imbObj.file = file
      const fileReader = new FileReader()
      fileReader.readAsDataURL(imbObj.file)
      fileReader.addEventListener('load', () => {
        imbObj.src = fileReader.result
      })
    },
    removeImage(fileObject) {
      // eslint-disable-next-line no-param-reassign
      fileObject.file = []
      // eslint-disable-next-line no-param-reassign
      fileObject.src = ''
    },
    submitImages() {
      const data = new FormData()
      data.append('product_id', this.productId)
      data.append('primary', this.primary.file)
      data.append('file1', this.file1.file)
      data.append('file2', this.file2.file)
      data.append('file3', this.file3.file)
      data.append('file4', this.file4.file)
      this.updateLoader('loaderFoure', true)
      this.$http
        .post('products/update-product-images', data)
        .then(response => {
          // eslint-disable-next-line no-shadow
          const { data } = response
          if (data.status) {
            this.updateMenu('images', { open: false, submit: true })
            this.updateMenu('category', { open: true, submit: true })
          } else {
            this.errorAlert(data.message)
          }
        })
        .catch(() => {
          this.toastDanger('There is a Error in Your Product Images Form')
        })

        .then(() => {
          this.updateLoader('loaderFoure', false)
        })
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>

<style scoped>
.searchProduct {
  margin-top: 7px;
}
.file {
  display: none;
}
.camera {
  color: #7f7c8a;
}
.avatar-primary {
  background-color: #eaeaea;
  border: 1px black;
  border-radius: 0px;
  border-style: dashed;
}
.avatar {
  object-fit: contain;
  position: relative;
  background-color: #eaeaea;
  border: 1px black;
  border-radius: 0px;
  border-style: dashed;
  object-fit: cover;
}
.remover {
  position: absolute;
  font-size: 35px;
  top: -5px;
  right: 0px;
}
.aspect-ratio-box {
  position: relative;
}
.aspect-ratio-box::after {
  display: block;
  content: "";
  /* 16:9 aspect ratio */
  padding-bottom: 100%;
}
.aspect-ratio {
  /* Image should match parent box size */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.aspect-ratio-box1 {
  position: relative;
}
.aspect-ratio-box1::after {
  display: block;
  content: "";
  /* 16:9 aspect ratio */
  padding-bottom: 100%;
}
.aspect-ratio1 {
  /* Image should match parent box size */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 104%;
}
</style>
