# express - crud

## 起步

- 初始化
- 模板处理

## 路由设计


| 请求方法 | 请求路径 | get 参数 | post 参数 | 备注 |
| :----: | :----:  | :----: | :----: | :----: |
| GET     | /studens       |       |      |  渲染首页   |
| GET     | /studens/new      |       |      |  新增学生页面   |
| POST     | /studens      |       |name、age、gender、hobbies    |  新增学生接口   |
| GET     | /studens/edit      |    id   |    |  渲染编辑页面   |
| POST     | /studens/edit      |     |  id、name、age、gender、hobbies  |  处理编辑请求   |
| GET     | /studens/delete      |  ud   |    |  处理删除请求   |

