<template>
    <div>
        <v-table
                border
                :data="tableData"
                style="width: 100%">
            <v-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="address"
                    label="地址">
            </v-table-column>
            <v-table-column
                    prop="collapse1"
                    label="合并1">
            </v-table-column>
            <v-table-column
                    prop="collapse2"
                    label="合并2"
                    sortable
            >
            </v-table-column>
            <v-table-column
                    prop="collapse3"
                    label="合并3">
                <template scope="scope">
                    <!--<div>{{renderScope(scope)}}</div>-->
                    <input type="text" v-model="scope.row.collapse3[scope.index]">
                </template>
            </v-table-column>
        </v-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        collapse1: ['红', '橙', '黄'],
                        collapse2: ['红1', '橙1'],
                        collapse3: ['a', 'b', 'c', 'd'],
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        collapse1: ['红', '橙'],
                        collapse2: ['红2', '橙2'],
                        collapse3: ['a', 'xs', 'c', 'd', 'a'],
                    },
                ],
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