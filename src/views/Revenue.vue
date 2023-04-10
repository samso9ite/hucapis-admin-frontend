<template>
  <div>
    <SideNav />
    <div class="main" style="">
      <TopHeader />
      <div
        class="container"
        style="margin: 2rem; margin-right: 2rem !important"
      >
        <div class="col-lg-12">
          <div class="row" style="margin-right: 2rem">
            <stat-card
              :key="header_stat.sub_heading"
              v-for="header_stat in header_stats"
              :icon="header_stat.icon"
              :heading="header_stat.heading"
              :sub_heading="header_stat.sub_heading"
              :is_currency="header_stat.currency"
            ></stat-card>
          </div>
          <div class="row" style="margin-right: 2rem">
            <div class="col-lg-12 mt-5" style="margin-left: 3.5rem">
              <D3BarChart
                :config="chart_config"
                :datum="chart_data"
                :title="chart_title"
                :source="chart_source"
              ></D3BarChart>
            </div>
          </div>
          <!-- Top Courses Section -->
          <div class="row">
            <div class="col-lg-6 mt-5">
              <p>Top Courses</p>
              <course-horizontal
                :key="course.id"
                v-for="course in dashboardTopCourses"
                :course="course"
              ></course-horizontal>
            </div>

            <div class="col-lg-5 mt-5" style="margin-left: 3.5rem">
              <p>Leaderboard</p>
              <leader-board-item
                :key="leader.name"
                v-for="leader in dashboardLeaderboard"
                :leader="leader"
              ></leader-board-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/General/SideNav.vue";
import TopHeader from "@/components/General/TopHeader.vue";
import StatCard from "../components/General/StatCard.vue";
import { mapGetters } from "vuex";
import CourseHorizontal from "../components/General/CourseHorizontal.vue";
import LeaderBoardItem from "../components/General/LeaderBoardItem.vue";
import { D3BarChart } from "vue-d3-charts";

export default {
  name: "Revenue",
  components: {
    TopHeader,
    SideNav,
    StatCard,
    CourseHorizontal,
    LeaderBoardItem,
    D3BarChart,
  },
  computed: {
    ...mapGetters({
      header_stats: "headerStats",
      dashboardStatistics: "dashboardStatistics",
      dashboardTopCourses: "dashboardTopCourses",
      dashboardLeaderboard: "dashboardLeaderboard",
      chart_data: "chart_data",
    }),
  },
  data() {
    return {
      chart_title: "Revenue by Month",
      chart_source: "",
      chart_config: {
        key: "Month",
        values: ["Revenue"],
        axis: {
          yTicks: 4,
        },
        currentKey: "January",
        color: {
          keys: {
            Revenue: "#FFA360",
          },
        },
      },
    };
  },
  mounted() {
    this.$store.dispatch("DashboardCount");
    this.$store.dispatch("DashboardLeaderboard");
    this.$store.dispatch("DashboardStatistics");
    this.$store.dispatch("DashboardTopCourses");
  },
};
</script>

<style scoped>
.card {
  width: auto;
}
</style>