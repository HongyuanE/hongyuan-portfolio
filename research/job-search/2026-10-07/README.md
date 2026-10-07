# 澳新技术岗位研究：2027 年 7 月起可入职

核查日期：2026-10-07。目标地区：澳大利亚、新西兰；方向：graduate / junior software、backend、cloud / platform、DevOps / SRE。

## 结论与边界

- **3 条 TikTok 正式招聘线索**：公布的 2027 年内入职窗口与 7 月之后兼容，但没有保证具体晚入职日期、签证接受或录用。三条是同一家公司的备选岗位。
- **1 条 Eagle Technology GIS 意向登记（EOI）**：页面列 2027 年 7 月和 2028 年 2 月，但同页一般性“6 月底”表述有冲突，需确认具体日期。属于 GIS 解决方案/支持，12 个月固定期，不是专门软件工程岗。
- **15 条观察清单**：包括后续批次、已关闭历史岗位、日期/学历有歧义的岗位，不能算作已确认可在目标期入职的开放职位。
- **12 条排除记录**：保留时间、地区、毕业窗口或公民/PR 条件不符的依据，避免重复筛选。
- 没有任何条目构成保证 2027 年 6 月后入职的 offer。EOI、项目主页和未来批次推测都不等于正式岗位已开放。

## 文件

- [Excel 清单](au-nz-jobs-july-2027-onward.xlsx)：已交付工作簿原样保存，四张表为入职期有依据、待确认与下轮、排除记录与背景与筛选口径；清单保留可填写的进度和备注列。
- [结构化数据](jobs.json)：与工作簿一致的研究输入。包含 `shortlist`（4）、`watchlist`（15）、`excluded`（12）、`profile`（公开作品集匹配依据及筛选假设）、`notes`（分类解释）。

`jobs.json` 每条岗位记录的 `source1` / `source2` 是原始招聘或项目链接；`status`、`start`、`timing`、`rights`、`eligibility`、`risk` 分别保留招聘状态、日期证据、时间限制、工作权、学历要求及风险。`deadline: null` 表示未公布或未核实固定日期，须结合 `deadline_note`，不能理解为永不截止。所有状态均是核查日快照。

## 优先核查

1. [TikTok SRE Graduate – Technical Infrastructure，A26539B](https://lifeattiktok.com/search/7658157129630517557)：云基础设施、Linux、Python 和自动化方向最贴近项目证据。
2. 第二岗位在 [Multimedia Platform，A30508A](https://lifeattiktok.com/search/7657821105365027077) 与 [Trust and Safety Engineering，A144848](https://lifeattiktok.com/search/7605166042878068997) 中选择。
3. [Eagle GIS Graduate Programme](https://www.eagle.co.nz/graduates)：仅作为相邻技术方向选择，先确认 July intake 日期及毕业资格。雇主要求 CV/求职信由申请者本人撰写，不使用 AI。

TikTok 岗位页写最多两岗并按申请顺序考虑；[官方 FAQ](https://lifeattiktok.com/earlycareers/faq/?language=en) 写每个项目、每个半年申请期两岗。保守按两岗处理，先核实既往申请，不要将三条全部投递。

## 筛选假设及下一步

- 最早可入职日期按需求设为 **2027-07-01**，不是已核实的毕业日或雇主承诺。
- 假设届时具备目标国家有效全职工作许可，**不假设公民、PR 或安全许可**。澳洲工作权不自动适用于新西兰；具体签证种类、有效期与条件仍须核实。
- 公开作品集显示 Monash IT 硕士 2025–2027；具体完成与授予学位日期未核实。未找到独立 CV，也未核实付薪工程师工作经验。
- 个人 AWS/Python/FastAPI、Terraform、Docker、CI/CD 和 Unity/C# 项目作为技能证据，不折算为商业生产、SRE 值班或工作年限；Kubernetes 仍在学习，AWS 认证为进行中。
- 每次申请前重新打开原始招聘页，确认岗位仍开放、具体起始日、毕业窗口、签证条件与截止日。当前/立即入职岗位不可默认延期，未宣布的 2028 批次不可写成已开放。
- 本研究未提交申请、登记 EOI 或联系招聘方。

本目录仅保存研究文档与数据，不接入作品集网站页面。公开仓库中仅包含本次岗位研究及公开职业项目资料。
