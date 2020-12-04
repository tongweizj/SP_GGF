# 金母鹅基金

本应用包含3个模块

- spider  数据爬虫
- api     数据API
- analysis 数据分析

## api

### 功能模块

- 新建基金
- 添加基金一天的价格数据
- 添加基金多天的价格数据
  
## spider 基金蜘蛛

### 功能模块

- 基金抓取调度
- 基金全量历史数据抓取
- 基金当天数据抓取

### 参考

#### nodejs-fund-crawler

https://github.com/nullpointer/fund-crawler



## sprider 基金分析


购买基金可以参考一个法则：

最近一年、两年、三年、五年及成立以来收益率排名同类基金的前1/4
最近三个月、六个月收益率排名同类基金的前1/3
笔者实现了一个应用，依据上述法则筛选基金，降低广大基民踩雷的风险。
