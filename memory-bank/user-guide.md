# 高新区工资信息管理系统 - 用户指南

## 1. 系统导航

本章节将介绍系统的基本界面布局、菜单结构以及常用的快捷操作，帮助您快速熟悉系统。

### 1.1 主界面布局

系统主界面通常包含以下几个区域：

- **顶部导航栏**: 包含系统Logo、当前用户信息、语言切换等。
- **侧边菜单栏**: 提供系统主要功能的入口，如数据导入、薪资管理、报表中心等。
- **工作区域**: 显示当前选定功能的具体内容和操作界面。

### 1.2 菜单结构

侧边菜单栏按照系统功能模块进行组织，主要包括：

- **核心业务**: 数据导入、薪资数据管理、报表管理。
- **工资单**: 工资单发送。
- **系统配置**: 部门管理、员工信息管理、用户管理、字段映射配置、邮件服务器配置。

点击菜单项即可进入相应的功能页面。

### 1.3 快捷操作

系统提供了一些快捷操作，以提高您的工作效率：

- **搜索功能**: 在某些列表页面，您可以使用搜索框快速查找目标数据。
- **筛选功能**: 在数据展示页面，您可以通过筛选条件精确查找所需数据。
- **批量操作**: 部分功能支持批量导入、导出或删除等操作。

## 2. 核心业务流程

### 2.1 数据导入与转换

本系统支持从外部文件导入薪资数据，并通过转换流程将其整合到系统中。此功能主要通过“文件转换”模块实现。

#### 2.1.1 支持文件格式

系统目前主要支持导入 **Excel (.xlsx, .xls)** 格式的薪资数据文件。请确保您的文件格式正确。

#### 2.1.2 分步骤导入指南

1.  **进入文件转换模块**: 在侧边菜单栏中找到并点击“核心业务” -> “文件转换”。
2.  **选择文件**: 在文件转换页面，点击“选择文件”按钮，选择您要导入的Excel文件。
3.  **配置导入参数**: 根据系统提示，选择对应的工资期间等信息。
4.  **上传并转换**: 点击“上传并转换”按钮，系统将开始上传文件并进行数据转换。
5.  **查看转换结果**: 转换完成后，系统将显示转换结果，包括成功导入的记录数、失败的记录数以及详细的错误信息。

#### 2.1.3 数据校验规则

系统在导入过程中会对数据进行自动校验，以确保数据的准确性。主要的校验规则包括：

- **必填字段检查**: 检查关键字段（如员工编号、姓名、工资月份等）是否为空。
- **数据格式检查**: 检查数字、日期等字段的格式是否符合要求。
- **关联数据检查**: 检查员工编号等是否能在系统中找到对应的员工信息。

#### 2.1.4 常见导入问题处理

- **文件格式错误**: 请确保上传的文件是有效的Excel格式。
- **数据格式不匹配**: 根据错误提示，检查并修正Excel文件中的数据格式。
- **必填字段缺失**: 补充Excel文件中缺失的必填信息。
- **员工信息不匹配**: 确保导入文件中的员工信息与系统中的员工信息一致，或先在“员工信息管理”中添加新员工。
- **转换失败**: 查看详细错误信息，根据错误原因进行排查和修正。

### 2.2 薪资数据管理

“薪资数据管理”模块（对应 SalaryDataViewer 组件）允许用户查看、查询和导出系统中的薪资数据。

#### 2.2.1 薪资查询

-   **基础查询**: 在薪资数据列表上方，您可以使用搜索框根据员工姓名、工号等信息进行快速查询。
-   **高级筛选**: 点击筛选按钮，可以根据部门、单位、工资期间等多个条件进行组合筛选，精确查找所需数据。
-   **自定义视图保存**: 系统支持保存常用的筛选和列显示配置为自定义视图，方便下次快速访问。

#### 2.2.2 数据导出

在薪资数据列表页面，您可以将当前查询结果导出为以下格式：

-   **Excel导出**: 导出数据到Excel文件，方便进一步的数据分析和处理。
-   **PDF导出**: 导出数据到PDF文件，适用于打印或分享。

### 2.3 报表管理

“报表管理”模块（对应 ReportViewer 和 ReportLinkManager 组件）提供了查看标准报表和管理自定义报表链接的功能。

#### 2.3.1 标准报表查看

在“报表管理”页面，您可以选择预定义的标准报表进行查看。这些报表通常涵盖了薪资数据的汇总、统计等信息。

#### 2.3.2 自定义报表链接管理

系统支持添加和管理自定义报表链接。如果您的组织有特定的报表需求，可以将外部报表系统的链接添加到此处，方便快速访问。

#### 2.3.3 报表订阅与分发 (待开发/说明)

（如果系统支持报表订阅和分发功能，请在此处添加详细说明。如果不支持，可以删除此小节或注明“待开发”。）

## 3. 工资单管理

“工资单管理”模块（对应 PayslipSender 组件）用于生成和发送员工工资单。

### 3.1 工资单生成与发送

1.  **进入工资单发送模块**: 在侧边菜单栏中找到并点击“工资单” -> “工资单发送”。
2.  **选择发送对象**: 您可以选择向所有员工、特定单位、特定部门或指定员工发送工资单。
3.  **选择工资期间**: 选择要发送工资单的月份。
4.  **配置邮件信息**: 填写邮件主题和正文。系统可能提供默认模板，您也可以进行修改。
5.  **选择邮件配置**: 选择用于发送邮件的邮箱配置（需要在“系统配置”中提前设置）。
6.  **发送工资单**: 点击发送按钮，系统将生成并发送工资单到员工邮箱。

### 3.2 邮件发送配置

邮件发送功能依赖于正确的邮件服务器配置。请确保在“系统配置”->“邮件服务器配置”中设置了有效的邮箱信息。

### 3.3 发送记录查询 (待开发/说明)

（如果系统支持查看工资单发送记录，请在此处添加详细说明。如果不支持，可以删除此小节或注明“待开发”。）

## 4. 系统配置(管理员专用)

### 4.1 基础数据维护

本节介绍管理员如何进行系统基础数据的维护，包括部门、员工和用户权限的管理。

#### 4.1.1 部门管理

“部门管理”模块（对应 DepartmentManager 组件）用于维护公司的部门和单位信息。

-   **查看部门/单位**: 列表展示现有的部门和单位信息。
-   **添加部门/单位**: 点击添加按钮，填写部门/单位名称等信息进行添加。
-   **编辑部门/单位**: 点击编辑按钮，修改现有部门/单位的信息。
-   **删除部门/单位**: 点击删除按钮，删除不再使用的部门/单位。请注意，删除部门/单位可能会影响关联的员工信息。

#### 4.1.2 员工信息管理

“员工信息管理”模块（对应 EmployeeManager 组件）用于维护员工的基本信息。

-   **查看员工信息**: 列表展示所有员工的基本信息，支持搜索和筛选。
-   **添加员工信息**: 点击添加按钮，填写新员工的各项信息。
-   **编辑员工信息**: 点击编辑按钮，修改现有员工的信息。
-   **删除员工信息**: 点击删除按钮，删除离职或不需要的员工信息。

#### 4.1.3 用户权限管理

“用户权限管理”模块（对应 UserManager 组件）用于管理系统用户的账号和权限。

-   **查看用户信息**: 列表展示所有系统用户信息，包括用户名、角色等。
-   **添加用户**: 点击添加按钮，创建新的系统用户账号并分配角色。
-   **编辑用户**: 点击编辑按钮，修改现有用户的角色或重置密码。
-   **删除用户**: 点击删除按钮，删除不再使用的用户账号。

### 4.2 系统参数配置

本节介绍管理员如何进行系统参数的配置，包括字段映射和邮件服务器设置。

#### 4.2.1 字段映射配置

“字段映射配置”模块（对应 MappingConfigurator 和 SheetMappingManager 组件）用于定义导入文件中的字段与系统内部字段的对应关系，以及不同员工类型的字段规则。

-   **查看字段映射**: 查看当前已配置的字段映射规则。
-   **添加/编辑字段映射**: 配置导入文件列头与系统字段的映射关系。
-   **员工类型字段规则**: 配置不同员工类型（如正式员工、合同工等）适用的字段规则。

#### 4.2.2 邮件服务器配置

“邮件服务器配置”模块（对应 EmailConfigManager 组件）用于设置发送工资单邮件所需的邮箱信息。

-   **查看邮件配置**: 查看已保存的邮件服务器配置。
-   **添加邮件配置**: 添加新的邮箱配置，包括SMTP服务器地址、端口、发件人邮箱、授权码等。
-   **编辑邮件配置**: 修改现有邮箱配置信息。
-   **删除邮件配置**: 删除不再使用的邮箱配置。
-   **测试连接**: 测试配置的邮箱是否能成功连接到邮件服务器。

## 5. AI助手功能

系统集成了智能AI助手，可以帮助您解答使用过程中的问题，提供操作指导。

### 5.1 使用AI助手

- **访问方式**：在系统界面右下角，您会看到一个蓝色的聊天图标，点击即可打开AI助手对话窗口。
- **提问方式**：在对话框中直接输入您的问题，AI助手将根据系统知识库为您提供解答。
- **适用场景**：
  - 系统功能咨询：如"如何导入Excel数据？"、"如何配置邮件服务器？"
  - 操作指导：如"如何筛选特定部门的薪资数据？"、"如何导出报表？"
  - 问题排查：如"为什么我的数据导入失败？"、"为什么邮件发送不成功？"

### 5.2 AI助手使用技巧

- **提供具体信息**：在提问时尽量提供具体的信息，如操作步骤、错误信息等，这样AI助手能更准确地回答您的问题。
- **分步骤提问**：对于复杂的问题，可以分步骤提问，逐步解决问题。
- **反馈机制**：如果AI助手的回答不能解决您的问题，可以进一步说明您的具体情况，AI助手会尝试提供更有针对性的解答。

## 6. 常见问题

本节汇总了用户在使用系统过程中可能遇到的一些常见问题及其解决方法。

### 6.1 数据导入类问题

-   **问题**: 导入Excel文件时提示格式错误。
    **解答**: 请检查文件是否为 `.xlsx` 或 `.xls` 格式，并确保文件内容没有损坏。
-   **问题**: 导入后部分数据缺失或显示异常。
    **解答**: 检查原始Excel文件中对应的数据格式是否正确，例如数字字段是否包含非数字字符，日期格式是否统一。同时查看导入结果中的错误信息，根据提示修正原始数据后重新导入。
-   **问题**: 导入时提示员工信息不存在。
    **解答**: 请先在“系统配置”->“员工信息管理”中添加该员工的信息。

### 5.2 查询显示问题

-   **问题**: 在薪资数据列表中找不到某个员工的数据。
    **解答**: 检查查询条件和筛选条件是否设置正确。确认该员工的薪资数据是否已成功导入系统。
-   **问题**: 列表显示的列不是我需要的。
    **解答**: 使用薪资数据列表上方的列设置功能，选择需要显示的列，并可以保存为自定义视图。

### 5.3 权限相关问题

-   **问题**: 无法访问某个功能模块。
    **解答**: 请联系系统管理员，确认您的用户账号是否具有访问该模块的权限。

### 5.4 系统配置问题

-   **问题**: 邮件发送失败。
    **解答**: 检查“系统配置”->“邮件服务器配置”中的邮箱设置是否正确，包括SMTP服务器地址、端口、发件人邮箱、授权码等。可以使用“测试连接”功能验证配置是否有效。

## 6. 附录

本节提供了一些补充信息，帮助您更好地理解和使用系统。

### 6.1 术语解释

-   **工资期间**: 指薪资数据所属的月份或时间段。
-   **字段映射**: 指导入文件中的列名与系统内部数据字段的对应关系。
-   **员工类型**: 指系统中对员工的分类，可能影响适用的薪资计算规则和字段。
-   **报表链接**: 指向外部报表系统的URL地址。

### 6.2 系统快捷键 (待补充)

（如果系统有常用的键盘快捷键，请在此处列出。）

### 6.3 技术支持联系方式 (待补充)

（请在此处提供系统技术支持的联系方式，如邮箱、电话或内部支持平台链接。）