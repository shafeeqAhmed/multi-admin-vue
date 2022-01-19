<template>
  <div>
    <b-row>
      <b-col md="8">
        <!------------------------------------------------------------------------->
        <!----------------------Product Information-------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Product Information</h4>
              <hr>
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Product Name"
                      label-for="h-product-name"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-product-name"
                        placeholder="Product Name"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Category"
                      label-for="h-category"
                      label-cols-md="4"
                    >
                      <v-select :options="['Canada', 'United States']" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Brand"
                      label-for="h-brand"
                      label-cols-md="4"
                    >
                      <v-select :options="['Canada', 'United States']" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Minimum Quality"
                      label-for="h-quality"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-quality"
                        type="number"
                        placeholder="Minmum Quality (Numbers)"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Tags"
                      label-for="h-tag"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-tag"
                        type="text"
                        placeholder="Type and hit enter to add tag"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Barcode"
                      label-for="h-barcode"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-barcode"
                        type="text"
                        placeholder="Barcode"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Refundable"
                      label-for="h-refundable"
                      label-cols-md="4"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch1"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch1"
                        >Toggle this switch element</label>
                      </div>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!----------------------------Product Image-------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Product Image</h4>
              <hr>
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Gallery Images (000x000)"
                      label-for="h-gallert"
                      label-cols-md="4"
                    >
                      <b-form-file
                        v-model="file"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                      />
                      <span
                        class="files"
                      >These images are visible in product details page
                        gallery.Use 000x000 size images</span>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Thumbnail Images"
                      label-for="h-Thumbnail"
                      label-cols-md="4"
                    >
                      <b-form-file
                        v-model="file"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                      />
                      <span
                        class="files"
                      >These images are visible in product details page
                        gallery.Use 000x000 size images</span>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!----------------------------Product Videos------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Product Videos</h4>
              <hr>
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Video Provider"
                      label-for="h-video"
                      label-cols-md="4"
                    >
                      <v-select :options="['Youtube', 'Dailymotion']" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Video Link"
                      label-for="h-Thumbnail"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-barcode"
                        type="text"
                        placeholder="Youtube"
                      />
                      <span
                        class="files"
                      >Use proper link without parameter. Don't use short show
                        links</span>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!----------------------------Product Variations--------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Product Variations</h4>
              <hr>
              <b-form @submit.prevent>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Colors"
                      label-for="h-colors"
                      label-cols-md="4"
                    >
                      <v-select
                        multiple
                        :options="['Pink', 'Red', 'Blue', 'Green', 'Yellow']"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Attributes"
                      label-for="h-attributes"
                      label-cols-md="4"
                    >
                      <v-select
                        multiple
                        :options="[
                          'Youtube',
                          'Dailymotion',
                          'Youtube',
                          'Dailymotion',
                        ]"
                      />
                    </b-form-group>
                  </b-col>

                  <span
                    class="files ml-1"
                  >Choose the attributes of this product and then input value
                    of each attributes</span>

                  <b-col
                    cols="12"
                    class="mt-2"
                  >
                    <b-form-group
                      label="Size"
                      label-for="h-size"
                      label-cols-md="4"
                    >
                      <v-select
                        multiple
                        :options="['Pink', 'Red', 'Blue', 'Green', 'Yellow']"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Fabric"
                      label-for="h-fabric"
                      label-cols-md="4"
                    >
                      <v-select
                        multiple
                        :options="[
                          'Youtube',
                          'Dailymotion',
                          'Youtube',
                          'Dailymotion',
                        ]"
                      />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!-------------------------Product price + Stock--------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Product Price + Stock</h4>
              <hr>

              <!--Table-->
              <div class="table-responsive">
                <table class="table  table-bordered text-center">
                  <thead>
                    <tr>
                      <th scope="col">
                        Variant
                      </th>
                      <th scope="col">
                        Variant Price
                      </th>
                      <th scope="col">
                        SKU
                      </th>
                      <th scope="col">
                        Quantity
                      </th>
                      <th scope="col">
                        Photo
                      </th>
                      <th scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Lorg-Test
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-input
                          id="v-width"
                          type="number"
                          value="0"
                        />
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-input
                          id="v-width"
                          type="text"
                        />
                      </td>
                      <td>
                        <b-form-input
                          id="v-width"
                          type="number"
                          value="0"
                        />
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-file
                          v-model="file"
                          placeholder="Choose a file or drop it here..."
                          drop-placeholder="Drop file here..."
                        />
                      </td>
                      <td>
                        <span
                          class="text-danger"
                        ><feather-icon
                          icon="TrashIcon"
                        /></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Lorg-Test
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-input
                          id="v-width"
                          type="number"
                          value="0"
                        />
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-input
                          id="v-width"
                          type="text"
                        />
                      </td>
                      <td>
                        <b-form-input
                          id="v-width"
                          type="number"
                          value="0"
                        />
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-file
                          v-model="file"
                          placeholder="Choose a file or drop it here..."
                          drop-placeholder="Drop file here..."
                        />
                      </td>
                      <td>
                        <span
                          class="text-danger"
                        ><feather-icon
                          icon="TrashIcon"
                        /></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Lorg-Test
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-input
                          id="v-width"
                          type="number"
                          value="0"
                        />
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-input
                          id="v-width"
                          type="text"
                        />
                      </td>
                      <td>
                        <b-form-input
                          id="v-width"
                          type="number"
                          value="0"
                        />
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-file
                          v-model="file"
                          placeholder="Choose a file or drop it here..."
                          drop-placeholder="Drop file here..."
                        />
                      </td>
                      <td>
                        <span
                          class="text-danger"
                        ><feather-icon
                          icon="TrashIcon"
                        /></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Lorg-Test
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-input
                          id="v-width"
                          type="number"
                          value="0"
                        />
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-input
                          id="v-width"
                          type="text"
                        />
                      </td>
                      <td>
                        <b-form-input
                          id="v-width"
                          type="number"
                          value="0"
                        />
                      </td>
                      <td class="pl-1 pr-1">
                        <b-form-file
                          v-model="file"
                          placeholder="Choose a file or drop it here..."
                          drop-placeholder="Drop file here..."
                        />
                      </td>
                      <td>
                        <span
                          class="text-danger"
                        ><feather-icon
                          icon="TrashIcon"
                        /></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!----------------------Product Description-------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Product Description</h4>
              <hr>
              <quill-editor
                ref="myQuillEditor"
                v-model="content"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
              />
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!--------------------------PDF Specification------------------------------>
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>PDF Specification</h4>
              <hr>
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="PDF Specification"
                      label-for="h-gallert"
                      label-cols-md="4"
                    >
                      <b-form-file
                        v-model="file"
                        placeholder="Choose File"
                        drop-placeholder="Drop file her..."
                      />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!------------------------------SEO Meta Tags------------------------------>
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>SEO Meta Tags</h4>
              <hr>
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Meta Title"
                      label-for="h-title"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="v-title"
                        type="text"
                        placeholder="Meta Title"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12">
                    <b-form-group
                      label="Description"
                      label-for="h-description"
                      label-cols-md="4"
                    >
                      <b-form-textarea
                        id="textarea-default"
                        placeholder="Textarea"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12">
                    <b-form-group
                      label="Meta Image"
                      label-for="h-meta"
                      label-cols-md="4"
                    >
                      <b-form-file
                        v-model="file"
                        placeholder="Choose File"
                        drop-placeholder="Drop file her..."
                      />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col md="4">
        <!------------------------------------------------------------------------->
        <!----------------------Shiping Configuration------------------------------>
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Shiping Configuration</h4>
              <hr>
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Volumetric weight shiping"
                      label-for="h-VweightShiping"
                      label-cols-md="9"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Free Shipping"
                      label-for="h-shipping"
                      label-cols-md="9"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch2"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch2"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Flat Rate"
                      label-for="h-Frate"
                      label-cols-md="9"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch3"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch3"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Product Wise Shipping"
                      label-for="h-Pwise"
                      label-cols-md="9"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch4"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch4"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Is Product Quality Multiply"
                      label-for="h-Quality"
                      label-cols-md="9"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch5"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch5"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!----------------------Product Dimensions--------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Product Dimensions</h4>
              <hr>
              <validation-observer ref="simpleRules">
                <b-form>
                  <b-row>
                    <!-- Width -->
                    <b-col cols="12">
                      <b-form-group
                        label="Width"
                        label-for="v-width"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Width"
                          rules="required"
                        >
                          <b-form-input
                            id="v-width"
                            v-model="name"
                            type="number"
                            :state="errors.length > 0 ? false : null"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Height -->
                    <b-col cols="12">
                      <b-form-group
                        label="Height"
                        label-for="v-height"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Height"
                          rules="required"
                        >
                          <b-form-input
                            id="v-height"
                            v-model="name"
                            type="number"
                            :state="errors.length > 0 ? false : null"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Length -->
                    <b-col cols="12">
                      <b-form-group
                        label="Length"
                        label-for="v-length"
                      >
                        <b-form-input
                          id="v-length"
                          type="number"
                          value="0"
                        />
                      </b-form-group>
                    </b-col>

                    <!-- Volumetric Weight -->
                    <b-col cols="12">
                      <b-form-group
                        label="Volumetric Weight"
                        label-for="v-Vweight"
                      >
                        <b-form-input
                          id="v-Vweight"
                          type="number"
                          value="0"
                        />
                      </b-form-group>
                    </b-col>

                    <!-- Weight -->
                    <b-col cols="12">
                      <b-form-group
                        label="Weight"
                        label-for="v-weight"
                      >
                        <b-form-input
                          id="v-weight"
                          type="number"
                          value="0"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-form>
              </validation-observer>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!---------------------Low Stock Quaity Warning---------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Product Dimensions</h4>
              <hr>
              <b-form>
                <b-row>
                  <!--  -->
                  <b-col cols="12">
                    <b-form-group
                      label="Quantity"
                      label-for="v-quantity"
                    >
                      <b-form-input
                        id="v-weight"
                        type="number"
                        value="5"
                      />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!----------------------Stock Visibility State----------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Shiping Configuration</h4>
              <hr>
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Hide Stock"
                      label-for="h-hidestock"
                      label-cols-md="9"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch6"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch6"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Show Stock Quantity"
                      label-for="h-stock"
                      label-cols-md="9"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch7"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch7"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Show Stock with Text Only"
                      label-for="h-Frate"
                      label-cols-md="9"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch8"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch8"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!----------------------------Cash On Delivery----------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Cash On Delivery</h4>
              <hr>
              <span
                class="text-center"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                quam.</span>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!---------------------------------Featured-------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Featured</h4>
              <hr>
              <b-form-group
                label="Status"
                label-for="h-status"
                label-cols-md="9"
              >
                <div class="custom-control custom-switch">
                  <input
                    id="customSwitch10"
                    type="checkbox"
                    class="custom-control-input"
                  >
                  <label
                    class="custom-control-label"
                    for="customSwitch10"
                  />
                </div>
              </b-form-group> </b-col></b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!--------------------------------Todays Deal------------------------------>
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Todays Deal</h4>
              <hr>
              <b-form-group
                label="Status"
                label-for="h-status"
                label-cols-md="9"
              >
                <div class="custom-control custom-switch">
                  <input
                    id="customSwitch10"
                    type="checkbox"
                    class="custom-control-input"
                  >
                  <label
                    class="custom-control-label"
                    for="customSwitch10"
                  />
                </div>
              </b-form-group> </b-col></b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!--------------------------------Flash Deal------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Flash Deal</h4>
              <hr>
              <b-form>
                <b-row>
                  <!-- Add to Flash -->
                  <b-col cols="12">
                    <b-form-group
                      label="Add To Flash"
                      label-for="v-Flash"
                    >
                      <v-select :options="['Canada', 'United States']" />
                    </b-form-group>
                  </b-col>

                  <!-- Discount -->
                  <b-col cols="12">
                    <b-form-group
                      label="Discount"
                      label-for="v-discount"
                    >
                      <b-form-input
                        id="v-discount"
                        type="number"
                        value="0"
                      />
                    </b-form-group>
                  </b-col>

                  <!-- Discount Type -->
                  <b-col cols="12">
                    <b-form-group
                      label="Discount Type"
                      label-for="v-discount"
                    >
                      <v-select :options="['Canada', 'United States']" />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!------------------------Estimate Shipping Time--------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Estimate Shipping Time</h4>
              <hr>
              <b-form>
                <b-row>
                  <!-- Shipping Days -->
                  <b-col cols="12">
                    <b-form-group
                      label="Shipping Days"
                      label-for="v-Shipping"
                    >
                      <b-form-input
                        id="v-Shipping"
                        type="number"
                        value="0"
                      />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

    <!------------------------------------------------------------------------->
    <!---------------------------Publish Buttons------------------------------->
    <!------------------------------------------------------------------------->

    <b-row>
      <b-col lg="12">
        <div class="text-right mb-1">
          <b-button variant="warning">
            Save As Draft
          </b-button>
          <b-button
            variant="primary"
            class="ml-1"
          >
            Save & Unpublish
          </b-button>
          <b-button
            variant="success"
            class="ml-1"
            @click.prevent="validationForm"
          >
            Save & Publish
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  BFormFile,
  BButton,
  BFormTextarea,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {

  components: {
    BCard,
    BRow,
    BButton,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BFormTextarea,
    vSelect,
    ValidationProvider,
    ValidationObserver,
    BFormFile,
    quillEditor,
  },
  data() {
    return {
      required,
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
}
</script>

<style scoped>
.custom-control-label {
  margin-top: 5px;
}

.files {
  font-size: 10px;
}
</style>
