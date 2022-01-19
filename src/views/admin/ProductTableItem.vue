<template lang="html">
  <b-card>
    <!-- search input -->
    <div class="custom-search d-flex justify-content-end">
      <b-form-group>
        <div class="d-flex align-items-center">
          <b-form-input
            v-model="searchTerm"
            placeholder="Search"
            type="text"
            class="d-inline-block"
          />
        </div>
      </b-form-group>
    </div>
    <!-- Table -->
    <div class="table-responsive">
      <table class="table ps-table">
        <thead>
          <tr>
            <th>
              Img
            </th>
            <th>Status<br>
              <select
                id="exampleFormControlSelect1"
                class="selectField"
              >
                <option>Buyable</option>
                <option>Not Buyable</option>
              </select>
            </th>
            <th>ID</th>
            <th>Select</th>
            <th width="250px">
              Title
            </th>
            <th width="80px">
              SKU
            </th>
            <th>Stock Depo</th>
            <th>Stock Available</th>
            <th>30Days Sale</th>
            <th>
              Selling Price
            </th>
            <th>
              MRP
            </th>
            <th>Delivery Days</th>
            <th>
              Action
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img
              :src="require('@/assets/images/portrait/small/avatar-s-2.jpg')"
              alt=""
              width="30px"
              height="30px"
            ></td>
            <td>Buyable</td>
            <td>1252</td>
            <td><input type="checkbox"></td>
            <td>Table Product Title</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>0</td>
            <td>Yes</td>
            <td>0</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>
              <select
                id="exampleFormControlSelect1"
                class="selectField"
              >
                <option>Days</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select></td>
            <td>
              <feather-icon
                icon="MoreVerticalIcon"
                size="20"
              />
            </td>
          </tr>
          <tr>
            <td><img
              :src="require('@/assets/images/portrait/small/avatar-s-1.jpg')"
              alt=""
              width="30px"
              height="30px"
            ></td>
            <td>Buyable</td>
            <td>1252</td>
            <td><input type="checkbox"></td>
            <td>Table Product Title</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>0</td>
            <td>Yes</td>
            <td>0</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>
              <select
                id="exampleFormControlSelect1"
                class="selectField"
              >
                <option>Days</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select></td>
            <td>
              <feather-icon
                icon="MoreVerticalIcon"
                size="20"
              />
            </td>
          </tr>
          <tr>
            <td><img
              :src="require('@/assets/images/portrait/small/avatar-s-6.jpg')"
              alt=""
              width="30px"
              height="30px"
            ></td>
            <td>Buyable</td>
            <td>1252</td>
            <td><input type="checkbox"></td>
            <td>Table Product Title</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>0</td>
            <td>Yes</td>
            <td>0</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>
              <select
                id="exampleFormControlSelect1"
                class="selectField"
              >
                <option>Days</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select></td>
            <td>
              <feather-icon
                icon="MoreVerticalIcon"
                size="20"
              />
            </td>
          </tr>
          <tr>
            <td><img
              :src="require('@/assets/images/portrait/small/avatar-s-3.jpg')"
              alt=""
              width="30px"
              height="30px"
            ></td>
            <td>Buyable</td>
            <td>1252</td>
            <td><input type="checkbox"></td>
            <td>Table Product Title</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>0</td>
            <td>Yes</td>
            <td>0</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>
              <select
                id="exampleFormControlSelect1"
                class="selectField"
              >
                <option>Days</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select></td>
            <td>
              <feather-icon
                icon="MoreVerticalIcon"
                size="20"
              />
            </td>
          </tr>
          <tr>
            <td><img
              :src="require('@/assets/images/portrait/small/avatar-s-4.jpg')"
              alt=""
              width="30px"
              height="30px"
            ></td>
            <td>Buyable</td>
            <td>1252</td>
            <td><input type="checkbox"></td>
            <td>Table Product Title</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>0</td>
            <td>Yes</td>
            <td>0</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>
              <select
                id="exampleFormControlSelect1"
                class="selectField"
              >
                <option>Days</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select></td>
            <td>
              <feather-icon
                icon="MoreVerticalIcon"
                size="20"
              />
            </td>
          </tr>
          <tr>
            <td><img
              :src="require('@/assets/images/portrait/small/avatar-s-5.jpg')"
              alt=""
              width="30px"
              height="30px"
            ></td>
            <td>Buyable</td>
            <td>1252</td>
            <td><input type="checkbox"></td>
            <td>Table Product Title</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>0</td>
            <td>Yes</td>
            <td>0</td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td><input
              type="text"
              class="textfield"
            ></td>
            <td>
              <select
                id="exampleFormControlSelect1"
                class="selectField"
              >
                <option>Days</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select></td>
            <td>
              <feather-icon
                icon="MoreVerticalIcon"
                size="20"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-row>
      <b-col
        cols="12"
        class="d-flex justify-content-between"
      >
        <b-form-select
          v-model="selected"
          :options="options"
          class="w-25"
        />
        <b-pagination
          size="lg"
          class="my-0"
        />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard,
  BFormGroup,
  BFormInput,
  BPagination,
  BFormSelect,
  // BAvatar,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BFormGroup,
    BFormInput,
    BPagination,
    BFormSelect,
    // BAvatar,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Per Page' },
        { value: '1', text: '3' },
        { value: '2', text: '5' },
        { value: '3', text: '10' },
      ],
    }
  },
}
</script>

<style scoped>
.table{
    text-align: center;
}
.textfield {
    border: 1px solid lightgrey;
    width: 100%;
    height: 30px;
}
.selectField{
    border: 1px solid lightgrey;
    width: 100%;
    height: 30px;
}
[dir] .table th, [dir] .table td {
    padding: 10px 8px;
}
input:focus {
    outline: none !important;
    border-color: #719ECE;
    /* box-shadow: 0 0 10px #719ECE; */
}
</style>
