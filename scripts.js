const action = process.argv[2];
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const buildPath = path.join(__dirname, "build");

const actions = {
  install() {
    // 安装桌面的依赖
    const install = spawn("yarn", [], {
      cwd: path.resolve(__dirname, "web/desktop"),
      shell: true,
    });
    spawnCB(install, "web桌面依赖");
  },

  "dev:d"() {
    const build = spawn("yarn", ["start"], {
      cwd: path.resolve(__dirname, "web/desktop"),
      shell: true,
    });
    spawnCB(build, "web桌面开发");
  },
  async "build:server"() {
    // 服务端打包
    const cwd = path.resolve(__dirname, "server");
    try {
      fs.unlinkSync(`${buildPath}/main.exe`);
      console.log("移除上次打包文件成功！");
    } catch (e) {}
    try {
      fs.unlinkSync(`${buildPath}/config.json`);
      console.log("移除上次配置文件成功！");
    } catch (e) {}

    // 复制配置文件
    fs.copyFileSync(
      path.join(cwd, "config.json"),
      path.join(buildPath, "config.json")
    );
    const build = spawn(
      "go",
      ["build", "-o", `${buildPath}/main.exe`, "main.go"],
      {
        cwd,
        shell: true,
        env: process.env,
      }
    );
    await spawnCB(build, "服务端打包");
  },
  async "build:desktop"() {
    // web桌面打包
    const build = spawn("yarn", ["build"], {
      cwd: path.resolve(__dirname, "web/desktop"),
      shell: true,
    });
    await spawnCB(build, "web桌面打包");
  },
  async build() {
    await this["build:server"]();
    await this["build:desktop"]();
  },
  async "dev:server"() {
    await this["build:server"]();
    const server = spawn(`main.exe`, {
      cwd: buildPath,
      shell: true,
    });
    await spawnCB(server, "后台服务");
  },
};

actions[action]();

function spawnCB(cp, prefix) {
  cp.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  cp.stderr.on("data", (data) => {
    console.log(data.toString());
  });

  cp.on("error", (err) => {
    console.error("启动子进程失败", err);
  });
  return new Promise((resolve) => {
    cp.on("close", () => {
      console.log(`${prefix}结束`);
      resolve(cp);
    });
  });
}