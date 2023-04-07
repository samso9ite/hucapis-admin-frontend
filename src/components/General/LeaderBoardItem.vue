<template>
  <div class="card flex-row" style="padding: 0px 3px; border: none">
    <img
      class="card-img-left example-card-img-responsive"
      src="assets/admin/avatar1.svg"
      :alt="leader.name"
    />
    <div class="card-body mt-3" style="padding-left: 3rem">
      <p class="">
        {{ leader.name }}
        <span style="float: right; padding-right: 2rem"
          >₦{{ leader.incomes_sum_amount_recieved || 0.0 }}</span
        >
      </p>
      <!-- <p class="card-text" ></p> -->
    </div>
  </div>
</template>
  
<script>
export default {
  name: "LeaderBoardItem",
  props: ["leader"],
  computed: {},
  data() {
    return {};
  },

  methods: {},
};
</script>
  
  <style>
.routerLink {
  text-decoration: none !important;
  color: inherit;
}
</style>