<template>
  <div>
    <SideNav />
    <div class="main" style="">
      <TopHeader />
      <div
        class=""
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
                v-for="course in dashboardTopCourses.slice(0,4)"
                :course="course"
              ></course-horizontal>
            </div>

            <div class="col-lg-5 mt-5" style="margin-left: 3.5rem">
              <p>Leaderboard</p>
              <leader-board-item
                :key="leader.name"
                v-for="leader in dashboardLeaderboard.slice(0,6)"
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
  name: "Dashboard",
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
      chart_title: "",
      chart_source: "",
      chart_config: {
        key: "Month",
        values: ["Course", "Instructor", "Student", "Revenue"],
        axis: {
          yTicks: 4,
        },
        currentKey: "January",
        color: {
          keys: {
            Course: "#CBD5E1",
            Instructor: "#FFA360",
            Student: "#6B70EC",
            Revenue: "#6B70EC",
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

::deep .chart {
  &--barchart {
    font-size: 10px;
  }
  &__bar--barchart {
    width: 10px
  }
  &__label--barchart {
    /* your styles */
  }
}
</style>