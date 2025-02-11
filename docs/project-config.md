# 项目配置快捷切换node版本 之 .nvmrc文件

1. 在项目根目录下创建.nvmrc文件
2. 在.nvmrc文件中写入node版本号（例如： `v18.18.0 或者 18.18.0`, nvm可以识别即可）
3. 在package.json命令新增 nvm use命令 `例如"dev: 'nvm use && vitepress dev'"`
```js
"scripts": {
    "dev": "bash dev.sh && vitepress dev docs",
  },
```
4. 在执行命令时，nvm会自动切换到.nvmrc文件中指定的node版本号
5. 如果需要切换到其他版本号，只需要修改.nvmrc文件中的版本号即可
6. 可能会存在 `nvm use` 命令找不到的情况，如果全局nvm可以使用则需要配置`.sh`文件， 先加载nvm后即可使用
``` sh
#!/bin/bash

# 加载 nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

nvm use

```