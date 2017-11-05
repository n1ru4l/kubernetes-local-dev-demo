/* eslint-disable no-console */
import path from 'path'
import fs from 'fs-extra'

const rootDir = path.resolve(__dirname, `..`)
const kubeConfigDir = path.resolve(rootDir, `kube`)

const devConfig = path.resolve(kubeConfigDir, `dev.yaml`)
const localDevConfig = path.resolve(kubeConfigDir, `dev.local.yaml`)

console.log(`Generate local development config`)
fs.writeFileSync(
  localDevConfig,
  fs.readFileSync(devConfig, `utf-8`).replace(`__PROJECT_PATH__`, rootDir),
)
