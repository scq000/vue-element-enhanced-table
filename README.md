# 描述

由于目前element ui的表格组件不支持单元格合并，所以修改了其源码，实现合并单元格的功能。



# 效果图

![](https://ws3.sinaimg.cn/large/006tNc79gy1fjd3s99mnoj30yq0bwab0.jpg)





# 开发

```javascript
npm run dev
```

# 使用方法

该组件依赖element-ui,所以在使用之前需要引入element-ui。
同时，合并单元格的功能需要table和table-column两个组件共同使用才能生效。因此，需要同时注册该两个组件：

```
Vue.use(Element);

Vue.component('VTable', VTable);
Vue.component('VTableColumn', VTableColumn);
```

在原有element-ui 的table组件上，添加了两个新的prop：

| 参数          | 说明                                       | 类型      | 可选值        | 默认值   |
| ----------- | ---------------------------------------- | ------- | ---------- | ----- |
| merge-cells | 是否启用合并单元格                                | Boolean | true/false | false |
| merge-id    | 用来识别单条数据的合并记录,如merge-id为`name`的时候, 则只会合并带有相同name数据的记录。 | String  |            |       |



在 table-column组件上，添加了一个新的prop:

| 参数            | 说明                           | 类型           | 可选值  | 默认值  |
| ------------- | ---------------------------- | ------------ | ---- | ---- |
| relative-prop | 用来指定关联的属性值，所有关联属性值都相同的数据才会合并 | String/Array |      |      |

