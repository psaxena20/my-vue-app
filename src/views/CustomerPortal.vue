<template>
  <div class="table-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      class="custom-table"
      v-loading="loading"
    >
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="created_at" label="Created At" width="180" />
      <el-table-column prop="updated_at" label="Updated At" width="180" />
      <el-table-column prop="name" label="Name" width="200" />
      <el-table-column prop="type" label="Type" width="150" />
      <el-table-column prop="incomeTaxNo" label="Income Tax No" width="180" />
      <el-table-column prop="gstin" label="GSTIN" width="200" />
      <el-table-column prop="address" label="Address" width="300" />
      <el-table-column prop="email" label="Email" width="250" />
    </el-table>
  </div>
</template>

<script>
import { get } from "@/utils/axiosHelper"; // Import Axios helper

export default {
  data() {
    return {
      tableData: [], // Stores fetched data
      loading: false, // Loading state
    };
  },
  methods: {
    async fetchCustomerList() {
      this.loading = true;
      try {
        const response = await get("/api/tallyCustomerSummary");
        this.tableData = response.data.data; // Assign fetched data
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch customer data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchCustomerList(); // Fetch data when the component loads
  },
};
</script>

<style scoped>
.table-container {
  margin: 20px;

  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 255, 0.2); /* Blue shadow */
}

.custom-table {
  border-radius: 5px;
}
</style>
