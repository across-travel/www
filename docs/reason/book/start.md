# 开始
第一步是安装 `Reason`。`BuckleScript` 默认会提供` Reason`，`BuckleScript` 就是实现了 `Reason` 转换到 `JavaScript` 的编译器。

**先决条件**: 任一 `npm` （包含 node）或 `Yarn`。

全局安装 `BuckleScript & Reason`:

```bash
yarn global add bs-platform
```

> npm 使用 `npm install -g bs-platform`

## ReasonML在线游乐场

ReasonML网站包含一个[在线游乐场](https://reasonml.github.io/en/try.html)，对于查看语言的工作原理以及相应的JavaScript和OCaml代码非常有用。它也可以从OCaml转换为ReasonML（稍后会详细介绍）。

## rtop，交互式ReasonML命令行

rtop是ReasonML的交互式命令行，通过rtopshell 启动。一旦运行，与它进行交互看起来如下。

```reason
Reason # 3 + 4;
- : int = 7
```

您已经可以看到ReasonML中的所有内容都具有静态类型。您可以rtop通过Ctrl-D或通过#quit退出;

## 新建项目

全局安装会附带一个简单的项目生成器，试试：

```bash
bsb -init my-new-project -theme basic-reason
```

编译 & 运行刚刚创建的项目：

```bash
cd my-new-project
yarn build # or npm run build, for npm
node src/Demo.bs.js
```

配置完成。 我们使用 `BuckleScript` 将 Reason 编译为 `javascrip`t，然后使用 NodeJS 运行 javascript。 可以放心使用生成出来的 JS 文件，就像这是你自己写的一样。

在开发过程中，不用每次都运行 `npm run build`，运行 `npm run start` 会启动一个程序，文件更改后自动重新编译。

`basic-reason` 创建的项目，默认将生成的 JS 文件，放在对应 Reason 文件相同的位置。 这是我们这样做的[原因](https://bucklescript.github.io/docs/en/build-overview#tips-tricks)。
如果希望将生成的文件保留在其他位置，请编辑 `bsconfig`，将 `in-source` 设置为` false`；之后 JS 文件将输出到 `lib/JS` 目录。

如果要 创建一个 **[ReasonReact](https://reasonml.github.io/reason-react/docs/en/installation.html)** 应用，使用 这里提到的[方法](https://reasonml.github.io/reason-react/docs/en/installation)。

## 打开项目

您可以通过熟悉的命令将工具链本地安装到现有项目中：

```bash
yarn add --dev bs-platform
```

> npm 使用 `npm install -g bs-platform`

其余的与上面相同。
