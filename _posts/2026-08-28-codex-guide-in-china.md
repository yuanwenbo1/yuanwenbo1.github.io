---
layout: post
title: "国内使用 Codex 教程：下载安装、配置与上手"
date: 2026-08-28
description: "整理国内环境下使用 Codex 的安装方式、基础配置和常见上手流程，覆盖 ChatGPT 桌面端、Codex CLI、IDE 扩展和常用命令。"
categories: [AI工具]
tags: [Codex, ChatGPT, 安装配置, 开发工具, AI辅助]
---

很多人第一次接触 Codex，会先被几个问题卡住：

- 国内怎么安装？
- 需要装哪个版本？
- 是用桌面端、终端，还是编辑器？
- 配置文件和权限怎么管？

其实可以先把它理解成三种入口：

1. ChatGPT 桌面端，适合日常项目协作和长任务。
2. Codex CLI，适合终端里做代码、脚本和自动化。
3. IDE 扩展，适合在编辑器里边写边改。

只要你能稳定访问 OpenAI 官方站点并完成登录，国内也可以按官方文档正常使用。

## 一、先选对入口

如果你是 Windows 用户，优先推荐 ChatGPT 桌面端。

如果你经常在命令行里工作，推荐 Codex CLI。

如果你主要在 VS Code、Cursor 这类编辑器里写代码，推荐 IDE 扩展。

这三种方式不是互斥的，很多人会同时装两个：桌面端负责交互，CLI 负责批量任务。

## 二、安装 ChatGPT 桌面端

官方现在把 Codex 放进了 ChatGPT 桌面端里。安装方式最简单：

1. 打开 ChatGPT 官方下载页。
2. 选择你的系统版本下载安装。
3. 打开应用，使用 ChatGPT 账号登录。
4. 在新建对话或项目入口里切到 Codex。

如果你习惯命令行，也可以用 Windows 官方商店安装入口：

```powershell
winget install --id 9PLM9XGG6VKS -s msstore
```

Windows 版支持原生 PowerShell 和 Windows sandbox，也可以按官方说明切到 WSL2。

这条路线适合：

- 想先体验 Codex 整体能力
- 需要和项目、文件、浏览器协同工作
- 不想一开始就碰终端参数

## 三、安装 Codex CLI

如果你想在终端里直接用 Codex，官方提供了 CLI。

macOS / Linux 的基础安装命令如下：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

安装后进入项目目录运行：

```bash
codex
```

第一次运行时，按提示选择登录方式。官方文档支持 ChatGPT 登录，也支持在部分场景下使用 API key。

这条路线适合：

- 需要终端自动化
- 想让 Codex 直接操作本地仓库
- 习惯用 Git、脚本和 CI

## 四、安装 IDE 扩展

如果你主要在编辑器里工作，可以安装 Codex IDE 扩展。

它的优势是：

- 能直接读取你打开的文件
- 可以把选中文本带进提示词
- 修改和审阅更贴近代码上下文

适合日常改代码、重构、小步调试。

## 五、最重要的几个配置

Codex 会从多个位置读取配置。最常用的是：

- `~/.codex/config.toml`
- 项目内的 `.codex/config.toml`

项目配置只建议放在你信任的仓库里。

如果你希望 Codex 长期遵守项目规则，建议在仓库里加 `AGENTS.md`。

你可以直接运行：

```text
/init
```

它会生成一个 `AGENTS.md` 骨架，你再按项目规范补充即可。

常用的几个命令：

- `/model`：切换模型
- `/permissions`：调整权限策略
- `/status`：查看当前状态
- `/review`：让 Codex 复核当前改动

如果你在项目里做测试开发、测试工具或脚本类工作，我建议把这几个信息写进 `AGENTS.md`：

- 代码风格
- 禁止修改的目录
- 常用测试命令
- 提交前检查项

这样 Codex 每次进入仓库时会更稳定。

## 六、国内环境下的注意点

国内使用时，最关键的不是“技巧”，而是基础连接和登录链路是否稳定。

建议先确认这几件事：

1. 能打开 OpenAI 官方站点和文档页。
2. 能正常登录 ChatGPT 账号。
3. 系统时间正确。
4. 终端里能正确识别 `codex` 命令。
5. 仓库权限和公司代理策略不会拦截下载、登录或本地文件访问。

如果你在企业环境里使用，还要留意管理员是否下发了统一的配置或权限策略。

## 七、一个推荐的上手流程

对于新仓库，我一般会这样用：

1. 打开项目目录。
2. 先执行 `/init` 生成项目约束。
3. 用 `/permissions` 确认当前权限。
4. 用 `/model` 选择合适模型。
5. 让 Codex 先解释项目结构，再让它做小改动。
6. 修改前后保留 Git 提交点。
7. 最后用 `/review` 做一遍自检。

这样比一上来就让它“大改一把”稳很多。

## 八、给测试工程师的一个建议

如果你是测试工程师，不妨先拿 Codex 做三件小事：

- 读需求，提炼测试点
- 根据历史缺陷整理回归清单
- 把重复的测试记录整理成模板

先从“辅助理解”和“整理资产”开始，再逐步让它参与脚本、报告和复核。

## 九、参考

- [ChatGPT 快速开始](https://developers.openai.com/codex/quickstart)
- [Windows 版 ChatGPT 桌面端](https://learn.chatgpt.com/docs/windows/windows-app)
- [Codex CLI](https://developers.openai.com/codex/cli)
- [Codex 配置基础](https://developers.openai.com/codex/config-basic)
- [Codex 开发者命令](https://developers.openai.com/codex/developer-commands)
- [AGENTS.md 说明](https://developers.openai.com/codex/agent-configuration/agents-md)
