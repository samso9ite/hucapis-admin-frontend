<template>
  <div class="col-lg-3">
    <div class="card" style="flex-direction: row">
      <img
        class="card-img-left"
        :src="icon"
        alt="Card image"
        width="50"
      />
      <div class="" style="padding-left: 1rem; padding-top: 1rem">
        <h4 class="card-title">
          <b v-if="is_currency">₦{{ $n(heading) }}</b>
          <b v-else>{{ $n(heading) }}</b>
        </h4>
        <p>{{ sub_heading }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatCard",
  components: {},
  props: ["icon", "heading", "sub_heading", "is_currency"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: auto;
}
</style>