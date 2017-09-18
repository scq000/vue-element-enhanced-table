<template>
    <div>
        <v-table
                border
                merge-cells
                merge-id="name"
                :data="tableData"
                style="width: 100%">
            <v-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="collapse"
                    sortable
                    label="合并1">
            </v-table-column>

            <v-table-column
                    relative-prop="collapse"
                    prop="collapse2"
                    label="合并2">
            </v-table-column>

            <v-table-column
                    prop="collapse3"
                    label="合并3">
            </v-table-column>
        </v-table>

        <v-table
                border
                :data="tableData2"
                style="width: 100%"
        >
            <v-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </v-table-column>

            <v-table-column
                    prop="collapse1"
                    label="合并1">
            </v-table-column>

            <v-table-column
                    prop="collapse2"
                    label="合并2">
            </v-table-column>

        </v-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {name: 'ni', collapse: 'b', collapse2: 'b1', collapse3: 'x1'},
          {name: 'ni', collapse: 'b', collapse2: 'b2', collapse3: 'x1'},
          {name: 'ni', collapse: 'c', collapse2: 'b1', collapse3: 'x1'},
          {name: 'ni', collapse: 'c', collapse2: 'b3', collapse3: 'x1'},

          {name: 'a', collapse: 'c', collapse2: 'x3', collapse3: 'x1'},
          {name: 'a', collapse: 'd', collapse2: 'x4', collapse3: 'x1'},
          {name: 'a', collapse: 'd', collapse2: 'x5', collapse3: 'x2'},
          {name: 'a', collapse: 'e', collapse2: 'x6', collapse3: 'x2'},
        ],
        tableData2: [
          {name: 'ni', collapse1: 1, collapse2: 'a'},
          {name: 'ni', collapse1: 1, collapse2: 'a'},
          {name: 'ni', collapse1: 2, collapse2: 'a'},
        ]
      };
    },
    methods: {
      renderScope(scope) {
        return scope.row.collapse3[scope.index];
      },
      handleClick() {
        console.log(this.tableData[0].collapse3);
      },
    },
  };
</script>