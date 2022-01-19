<template>
  <b-row>
    <b-card>
      <b-col
        md="12"
        class="d-flex justify-content-between"
      >
        <h4>Support Desk</h4>
        <b-form-input
          placeholder="Type ticket code & Enter"
          class="w-75"
        />
      </b-col>
      <b-col md="12">
        <b-table
          small
          bordered
          :fields="fields"
          :items="items"
          responsive="sm"
          class="text-center mt-2"
        >
          <!-- A virtual column -->
          <template #cell(TickerID)="data">
            {{ data.index }}
          </template>

          <!-- A custom formatted column -->
          <template #cell(date)="data">
            {{ data.value }}
          </template>

          <!-- A custom formatted column -->
          <template #cell(user)="data">
            {{ data.value }}
          </template>

          <template #cell(order_status)="data">
            <b-badge
              pill
              :variant="data.value.variant"
            >
              {{ data.value.status }}
            </b-badge>
          </template>

          <!-- A virtual composite column -->
          <template #cell(last)="data">
            {{ data.value }}
          </template>

          <!-- Optional default data cell scoped slot -->
          <template #cell(options)="data">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              :variant="data.value.variant"
              class="btn-icon rounded-circle"
            >
              <feather-icon icon="EyeIcon" />
            </b-button>
          </template>
        </b-table>
      </b-col>
    </b-card>
  </b-row>
</template>

<script>
import {
  BTable, BBadge, BButton, BCard, BFormInput,
} from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BBadge,
    BButton,
    BCard,
    BFormInput,
  },
  data() {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        'TicketID',
        // A column that needs custom formatting
        { key: 'date', label: 'Sending Date' },
        'Subject',
        // A regular column
        { key: 'user', label: 'User' },
        // A regular column
        { key: 'order_status', label: 'Status' },
        // A virtual column made up from two fields
        { key: 'last', label: 'Last Reply' },
        // A virtual column made up from two fields
        { key: 'options', label: 'Options' },
      ],
      items: [
        {
          TicketID: '#32332432',
          date: '14-07-2021',
          Subject: 'Duration of delivery time',
          user: 'John Micheal',
          order_status: { status: 'Pending', variant: 'danger' },
          last: '12-08-2021',
          options: { variant: 'info' },
        },
        {
          TicketID: '#24332432',
          date: '14-07-2021',
          Subject: 'Delivery Address',
          user: 'Ben Stoke',
          order_status: { status: 'Solved', variant: 'success' },
          last: '12-08-2021',
          options: { variant: 'info' },
        },
        {
          TicketID: '#74332432',
          date: '11-02-2021',
          Subject: 'Order Taking',
          user: 'Faf Allen',
          order_status: { status: 'Pending', variant: 'danger' },
          last: '9-10-2021',
          options: { variant: 'info' },
        },
        {
          TicketID: '#74332432',
          date: '11-02-2021',
          Subject: 'Order Taking',
          user: 'Faf Allen',
          order_status: { status: 'Pending', variant: 'danger' },
          last: '9-10-2021',
          options: { variant: 'info' },
        },
      ],
    }
  },
}
</script>
